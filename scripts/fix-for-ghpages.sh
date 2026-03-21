#!/bin/bash
# Automatically patches Figma Make output for GitHub Pages deployment
# This runs in CI before the build step

set -e

echo "🔧 Patching for GitHub Pages..."

# 1. Fix figma:asset imports → @/assets/
echo "  Fixing figma:asset imports..."
find src -name '*.tsx' -o -name '*.ts' | xargs sed -i'' -e 's|figma:asset/|@/assets/|g'

# 2. Add base path to vite.config.ts (if not already present)
if ! grep -q "base:" vite.config.ts; then
  echo "  Adding Vite base path..."
  sed -i'' -e "s|export default defineConfig({|export default defineConfig({\n  base: '/Tesutemofromfigma/',|" vite.config.ts
fi

# 3. Add basename to React Router (if not already present)
if ! grep -q "basename:" src/app/routes.tsx; then
  echo "  Adding React Router basename..."
  sed -i'' -e 's|createBrowserRouter(\[|createBrowserRouter([|' src/app/routes.tsx
  # Replace the closing ]); with ], { basename: "/Tesutemofromfigma" });
  sed -i'' -e 's|^\]);|], { basename: "/Tesutemofromfigma" });|' src/app/routes.tsx
fi

# 4. Replace <a href="/..."> with <Link to="/..."> for internal links
echo "  Fixing internal links to use React Router Link..."
find src -name '*.tsx' | while read file; do
  # Check if file has internal <a href="/"> links (not external http links)
  if grep -q 'href="/' "$file"; then
    # Add Link import if not present
    if ! grep -q "import.*Link.*from 'react-router'" "$file"; then
      sed -i'' -e "1s|^|import { Link } from 'react-router';\n|" "$file"
    fi
    # Replace <a href="/..."> with <Link to="/..."> and </a> nearby
    sed -i'' -e 's|<a href="/\([^"]*\)"|<Link to="/\1"|g' "$file"
    sed -i'' -e 's|</a>|</Link>|g' "$file"
  fi
done

# 5. Ensure react & react-dom are in dependencies (not just peer deps)
echo "  Ensuring react is in dependencies..."
if ! node -e "const p=require('./package.json'); process.exit(p.dependencies?.react ? 0 : 1)" 2>/dev/null; then
  node -e "
    const fs = require('fs');
    const pkg = JSON.parse(fs.readFileSync('package.json','utf8'));
    const reactVer = pkg.peerDependencies?.react || '18.3.1';
    const reactDomVer = pkg.peerDependencies?.['react-dom'] || '18.3.1';
    pkg.dependencies = pkg.dependencies || {};
    pkg.dependencies.react = reactVer;
    pkg.dependencies['react-dom'] = reactDomVer;
    delete pkg.overrides;
    fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
  "
fi

echo "✅ Patches applied successfully!"
