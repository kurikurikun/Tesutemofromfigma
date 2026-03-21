import { motion } from 'motion/react';
import { UserPlus, TrendingUp, GraduationCap, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import recruitImage from 'figma:asset/5cc6f68e65b026ca288e5d61a109c4986c13bd8b.png';
import customerImage from 'figma:asset/b6870bc75d96781841096514a5a6fb31fb15370a.png';

export function UseCases() {
  const useCases = [
    {
      icon: UserPlus,
      title: '人材を採用する',
      description: '社員のリアルな声で、人材と出会う',
      image: recruitImage,
      color: 'from-[#e95228] to-[#c74320]',
      link: '/recruitment',
    },
    {
      icon: TrendingUp,
      title: '顧客を増やす',
      description: 'お客様のリアルな声で、次の顧客と出会う',
      image: customerImage,
      color: 'from-purple-500 to-pink-500',
      link: '#',
    },
    {
      icon: GraduationCap,
      title: '学生と出会う',
      description: '在学生のリアルな声で、未来の学生と出会う',
      videoUrl: 'https://player.vimeo.com/video/1019675789?h=8ca81d7847&badge=0&autopause=0&player_id=0&app_id=58479',
      color: 'from-green-500 to-teal-500',
      link: '/university',
    },
    {
      icon: MapPin,
      title: '移住者を増やす',
      description: '移住者のリアルな声で、新しい住民と出会う',
      videoUrl: 'https://player.vimeo.com/video/1010822965?h=430839385f&badge=0&autopause=0&player_id=0&app_id=58479',
      color: 'from-orange-500 to-red-500',
      link: '/municipality',
    },
  ];

  return (
    <section id="usecases" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-[#e95228] to-[#ff6b4a] rounded-full">
            <span className="text-sm uppercase tracking-wider text-white font-semibold">Use Cases</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">リアルな声が意思決定を加速</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">採用強化、集客改善、信頼構築、移住促進。目的に合ったカテゴリを選んでください</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  {useCase.image ? (
                    <ImageWithFallback
                      src={useCase.image}
                      alt={useCase.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <iframe
                      src={useCase.videoUrl}
                      className="w-full h-full object-cover"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                  <div className="absolute top-6 left-6 pointer-events-none">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                      <useCase.icon size={24} className="text-gray-900" />
                    </div>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                    {useCase.description}
                  </p>
                  <a
                    href={useCase.link}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-[#e95228] text-[#e95228] rounded-xl font-medium hover:bg-[#e95228] hover:text-white transition-all duration-300 group/btn"
                  >
                    もっとみる
                    <svg 
                      className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}