import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import image1 from 'figma:asset/3c126e1bc058009e2983a362b6e8d773e4e67605.png';
import image2 from 'figma:asset/2fad9edad6112139233ee09eb6b3defe54d0c039.png';
import image3 from 'figma:asset/9c66842611afaf80a1360179cfc99cad3268bcc0.png';
import image4 from 'figma:asset/3ce8ea23f34b75c4a480115989795adf3ae4e8bd.png';
import image5 from 'figma:asset/efdc294a577106acd325b7a657a01a6aacc8f514.png';

export function Hero() {
  const carouselImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.5;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main Content Area */}
        <div className="max-w-6xl mx-auto">
          {/* Hero Text Section with Color Accent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8 md:mb-10"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight px-4">
              Real Voices.
              <br />
              <span className="bg-gradient-to-r from-[#e95228] to-[#ff6b4a] bg-clip-text text-transparent">
                Better Decisions.
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 mb-4 md:mb-5 leading-tight px-4">
              リアルな声で、人生の意思決定を支える
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 leading-relaxed">
              人は、広告よりも「人の声」で意思決定する
            </p>
          </motion.div>

          {/* Carousel Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 md:mb-8"
          >
            
            <div className="relative -mx-4 sm:mx-0">
              {/* Gradient Overlays for smooth edges */}
              <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
              
              <div ref={scrollRef} className="overflow-hidden">
                <div className="flex gap-3 sm:gap-4 md:gap-6">
                  {/* Duplicate images for seamless loop */}
                  {[...carouselImages, ...carouselImages].map((image, index) => (
                    <div key={index} className="flex-shrink-0 w-32 sm:w-36 md:w-44">
                      <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg aspect-[3/4] group">
                        <ImageWithFallback
                          src={image}
                          alt={`テステモ参加者 ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#e95228]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Description Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-8"
          >
            <div className="inline-block px-4 sm:px-6 py-2 bg-gradient-to-r from-[#e95228]/10 to-[#ff6b4a]/10 rounded-full text-base sm:text-lg md:text-xl lg:text-[24px] mx-4">
              リアルな声を動画で届け、人と組織をつなぐインタビューサービス
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
          >
            <a
              href="#usecases"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#e95228] to-[#ff6b4a] text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
            >
              導入事例を見る
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-[#e95228] hover:text-[#e95228] transition-all duration-300 text-center"
            >
              お問い合わせ
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}