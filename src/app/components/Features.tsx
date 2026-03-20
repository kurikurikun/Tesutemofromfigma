import { motion } from 'motion/react';
import { Video, Users, Shield, Sparkles } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Video,
      title: 'リアルな判断材料',
      description: '実際に経験した人の声だから、自分に合うかどうかが具体的にわかる',
    },
    {
      icon: Users,
      title: '本音が見える',
      description: '文章では見えない、表情や言葉の温度感まで伝わる',
    },
    {
      icon: Shield,
      title: 'ミスマッチを防ぐ',
      description: '事前にリアルを知ることで、選択のズレを減らす',
    },
    {
      icon: Sparkles,
      title: 'オンラインで完結',
      description: 'インタビューから納品まで、すべてオンラインでスピーディに',
    },
  ];

  return (
    <section id="features" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-[#e95228] to-[#ff6b4a] rounded-full">
            <span className="text-sm uppercase tracking-wider text-white font-semibold">Features</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">テステモが選ばれる理由<br /></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            他の情報では分からない「本音」を、動画で。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg h-full">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(to bottom right, #e95228, #c74320)' }}>
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA section removed */}
      </div>
    </section>
  );
}