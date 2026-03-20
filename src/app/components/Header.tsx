import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import logo from 'figma:asset/a291da8460bd685d634f4adc10e7a3e85bae75d4.png';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 p-[0px]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Tesutemo" className="h-12" />
          
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="/case-study" className="text-lg hover:opacity-70 transition-opacity" style={{ color: '#7e91cf' }}>
            導入事例 for 企業
          </a>
          <a href="/recruitment" className="text-lg hover:opacity-70 transition-opacity" style={{ color: '#7e91cf' }}>
            採用促進 for 企業
          </a>
          <a href="/municipality" className="text-lg hover:opacity-70 transition-opacity" style={{ color: '#7e91cf' }}>
            for 自治体
          </a>
          <a href="/university" className="text-lg hover:opacity-70 transition-opacity" style={{ color: '#7e91cf' }}>
            for 大学
          </a>
          <a href="#contact" className="px-6 py-2.5 bg-gray-900 text-white text-lg rounded-full hover:bg-gray-800 transition-colors">
            はじめる
          </a>
        </nav>

        <button 
          className="md:hidden p-2 text-gray-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 space-y-4">
              <a 
                href="/case-study" 
                className="text-lg hover:opacity-70 transition-opacity py-2" 
                style={{ color: '#7e91cf' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                導入事例 for 企業
              </a>
              <a 
                href="/recruitment" 
                className="text-lg hover:opacity-70 transition-opacity py-2" 
                style={{ color: '#7e91cf' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                採用促進 for 企業
              </a>
              <a 
                href="/municipality" 
                className="text-lg hover:opacity-70 transition-opacity py-2" 
                style={{ color: '#7e91cf' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                for 自治体
              </a>
              <a 
                href="/university" 
                className="text-lg hover:opacity-70 transition-opacity py-2" 
                style={{ color: '#7e91cf' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                for 大学
              </a>
              <a 
                href="#contact" 
                className="px-6 py-2.5 bg-gray-900 text-white text-lg rounded-full hover:bg-gray-800 transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                はじめる
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}