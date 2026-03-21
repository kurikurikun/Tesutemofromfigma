import { motion } from 'motion/react';
import fujinomiyaLogo from 'figma:asset/e1a0e97f16fc4b1f72bc942e4ccce7e307a31e45.png';
import otsukiLogo from 'figma:asset/bf4051cc8021842035a84efedca386b1ba93c23a.png';
import kansaiLogo from 'figma:asset/7dc70f324689cc10dd0bca8896ac599ce9ead2b2.png';
import wasedaLogo from 'figma:asset/3145ea66b2626018cecc84d7e04a75b4e47fc4d6.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Customers() {
  // Customer logos with images
  const customers = [
    { name: '富士宮市', logo: fujinomiyaLogo },
    { name: '大月町', logo: otsukiLogo },
    { name: '関西大学', logo: kansaiLogo },
    { name: '早稲田大学', logo: wasedaLogo },
  ];

  // Client testimonials
  const testimonials = [
    {
      quote: '学生の人柄や授業のインパクトなど、AI生成では出せない生のインタビューのリアルさや親近感がこのテステモの価値だなと改めて感じました！',
      author: '関西大学',
      company: '学部・大学院事務グループ',
    },
  ];

  return (
    <section className="bg-white border-y border-gray-100 px-[0px] py-[4px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-[#e95228] to-[#ff6b4a] rounded-full">
            <span className="text-sm uppercase tracking-wider text-white font-semibold">Trusted By</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            導入実績
          </h2>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            すでに、リアルな声の価値に気づいた企業・団体が活用を始めています
          </p>
        </motion.div>

        <div className="flex justify-center items-center gap-8 lg:gap-12 mb-16">
          {customers.map((customer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0"
            >
              <div className="bg-white rounded-xl px-4 py-3 hover:shadow-md transition-all duration-300 border border-gray-200 flex items-center justify-center">
                <ImageWithFallback
                  src={customer.logo}
                  alt={customer.name}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
            お客様の声
          </h3>
          <div className="flex justify-center max-w-2xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200 hover:border-[#e95228]/30 transition-all h-full flex flex-col">
                  {/* Quote icon */}
                  <div className="text-[#e95228] text-4xl mb-4 leading-none">"</div>
                  
                  {/* Quote text */}
                  <p className="text-base text-gray-700 leading-relaxed mb-6 flex-grow">
                    {testimonial.quote}
                  </p>
                  
                  {/* Author info */}
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional trust indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          
        </motion.div>
      </div>
    </section>
  );
}