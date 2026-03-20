import { motion } from 'motion/react';

export function Customers() {
  // Placeholder customer logos
  const customers = [
    { name: '株式会社A' },
    { name: '大学B' },
    { name: '自治体C' },
    { name: '株式会社D' },
    { name: 'スタートアップE' },
    { name: '団体F' },
  ];

  // Client testimonials
  const testimonials = [
    {
      quote: '学生の人柄や授業のインパクトなど、AI生成では出せない生のインタビューのリアルさや親近感がこのテステモの価値だなと改めて感じました！',
      author: 'クライアント様',
      company: '企業名',
    },
    {
      quote: '学生の人柄や授業のインパクトなど、AI生成では出せない生のインタビューのリアルさや親近感がこのテステモの価値だなと改めて感じました！',
      author: 'クライアント様',
      company: '企業名',
    },
    {
      quote: '学生の人柄や授業のインパクトなど、AI生成では出せない生のインタビューのリアルさや親近感がこのテステモの価値だなと改めて感じました！',
      author: 'クライアント様',
      company: '企業名',
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

        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 mb-16">
          {customers.map((customer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0"
            >
              <div className="bg-gray-50 rounded-xl px-8 py-6 hover:bg-gray-100 transition-colors duration-300 border border-gray-200">
                <span className="text-gray-700 text-base font-medium whitespace-nowrap">
                  {customer.name}
                </span>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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