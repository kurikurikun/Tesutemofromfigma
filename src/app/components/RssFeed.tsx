import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Calendar } from 'lucide-react';

interface RssItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  contentEncoded?: string;
}

export function RssFeed() {
  const [items, setItems] = useState<RssItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRss = async () => {
      try {
        // Use RSS2JSON service to fetch and parse the RSS feed
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent('https://note.com/chris_moore/rss')}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch RSS feed');
        }
        
        const data = await response.json();
        
        if (data.status !== 'ok') {
          throw new Error('RSS feed parsing failed');
        }
        
        const parsedItems: RssItem[] = data.items.slice(0, 3).map((item: any) => ({
          title: item.title || '',
          link: item.link || '',
          pubDate: item.pubDate || '',
          description: item.description || '',
          contentEncoded: item.content || item.description || '',
        }));

        setItems(parsedItems);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching RSS feed:', err);
        setError('Failed to load articles');
        setLoading(false);
      }
    };

    fetchRss();
  }, []);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-[#7e91cf] to-[#9ea9d5] rounded-full">
            <span className="text-sm uppercase tracking-wider text-white font-semibold">Blog</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            最新記事
            <br />
            <span className="text-3xl lg:text-4xl">Latest Articles</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            テステモに関する最新の情報やインサイトをお届けします
          </p>
        </motion.div>

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-4 border-gray-200 border-t-[#e95228] rounded-full animate-spin"></div>
          </div>
        )}

        {error && (
          <div className="text-center py-12 text-gray-600">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {items.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-2xl border border-gray-100 hover:border-[#e95228] transition-all duration-300 hover:shadow-xl overflow-hidden h-full"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <Calendar size={16} />
                      <time>{formatDate(item.pubDate)}</time>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#e95228] transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                      {stripHtml(item.contentEncoded || item.description)}
                    </p>
                    
                    <div className="flex items-center gap-2 text-[#e95228] font-semibold group-hover:gap-3 transition-all">
                      <span>Read more</span>
                      <ExternalLink size={16} />
                    </div>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://note.com/chris_moore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-full transition-all border-2 bg-white hover:bg-gray-50"
            style={{ borderColor: '#7e91cf', color: '#7e91cf' }}
          >
            View all articles
            <ExternalLink size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}