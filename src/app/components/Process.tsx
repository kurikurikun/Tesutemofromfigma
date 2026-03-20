import { motion } from 'motion/react';
import { ClipboardCheck, MessageSquare, Play } from 'lucide-react';

export function Process() {
  const steps = [
    {
      number: '①',
      title: '打ち合わせ',
      description: 'お悩み、課題に対して、TesuTemoを活用した、オーダーメイドの解決方法をお話合します',
      icon: ClipboardCheck,
      color: 'from-[#e95228] to-[#ff6b4a]',
    },
    {
      number: '②',
      title: '候補者選び',
      description: '最適な人物像のイメージまでをお伝えし、それに合わせて、候補者を選んで頂きます',
      icon: MessageSquare,
      color: 'from-[#ff6b4a] to-[#e95228]',
      bgColor: 'bg-[#e95228]/10',
    },
    {
      number: '③',
      title: 'できあがり',
      description: 'あとはTesuTemoにお任せください。動画が完となれば、発信するだけです',
      icon: Play,
      color: 'from-[#e95228] to-[#ff6b4a]',
      bgColor: 'bg-[#e95228]/10',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-[#e95228]/5 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#e95228]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#e95228]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-[#e95228] to-[#ff6b4a] rounded-full">
            <span className="text-sm uppercase tracking-wider text-white font-semibold">Process</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            たった<span className="text-[#e95228]">3</span>ステップ
          </h2>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-2">
            全てオンラインで行うので、従来の現地での撮影と比べ
          </p>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            やり取りの時間が大幅に減り、担当者さま、被写体さまの負担がるかに少ない
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Connector line (hidden on mobile, shown on desktop for non-last items) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#e95228]/40 to-transparent"></div>
              )}

              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#e95228]/30">
                {/* Icon */}
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                  <step.icon className="w-10 h-10 text-white" strokeWidth={2} />
                </div>

                {/* Step number and title */}
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    <span className="text-[#e95228]">{step.number}</span> {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed text-center">
                  {step.description}
                </p>

                {/* Decorative accent */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${step.color} opacity-10 rounded-bl-full`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-full shadow-md border-2 border-[#e95228]/20">
            <div className="w-3 h-3 rounded-full bg-[#e95228] animate-pulse"></div>
            <span className="text-sm text-gray-700 font-medium">シンプルで迅速なプロセス</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}