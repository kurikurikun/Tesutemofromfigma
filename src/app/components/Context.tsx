import { motion } from 'motion/react';
import { Video, Users, Heart, ArrowRight, AlertCircle, Sparkles } from 'lucide-react';
import videoScreenshot from '@/assets/120490623265b746393032cad54594c2cd947ff7.png';

export function Context() {
  const howSteps = [
    {
      icon: Users,
      title: 'オンラインでインタビューを実施',
      description: '場所を選ばず、気軽に実施できます',
    },
    {
      icon: Video,
      title: '実際のユーザーの声をそのまま収録',
      description: '台本なし、リアルな体験を語ってもらいます',
    },
    {
      icon: Heart,
      title: '見やすい動画に編集して提供',
      description: '視聴者に伝わりやすい形で届けます',
    },
  ];

  const valuePoints = [
    { label: '表情', icon: '😊', videoUrl: "https://player.vimeo.com/video/1020065025?h=c786d2097a&title=0&byline=0&portrait=0" },
    { label: '温度感', icon: '🔥', videoUrl: "https://player.vimeo.com/video/1014779536?h=2c4b22d316&title=0&byline=0&portrait=0" },
    { label: '本音', icon: '💬', videoUrl: "https://player.vimeo.com/video/1173147932?h=22cefed8a7&title=0&byline=0&portrait=0" },
  ];

  const whyReasons = [
    {
      icon: AlertCircle,
      title: '情報の過多化',
      description: 'インターネットやSNSの普及により、あらゆる情報が手軽に手に入るようになりました。',
    },
    {
      icon: AlertCircle,
      title: 'リアルな声の欠如',
      description: '実際のリアルな声が見えないため、正しい情報を判断するのが難しくなります。',
    },
    {
      icon: AlertCircle,
      title: '自分に合っているか判断できない',
      description: '自分に合っているか判断できないため、選択に迷い、ミスマッチが起きる可能性があります。',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gray-200/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#e95228]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Problem Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full">
            <span className="text-sm uppercase tracking-wider text-white font-semibold">Problem → Solution</span>
          </div>
        </motion.div>

        {/* Problem → Bridge → Solution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 mb-24 max-w-6xl mx-auto items-center">
          
          {/* Problem Section (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border-2 border-gray-200 hover:border-gray-300 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  情報は発信しているのに、<br />伝わらない。
                </h3>
              </div>
              
              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                Webサイトやパンフレット、SNSなどで情報発信はしているものの、
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">✕</span>
                  <p className="text-sm text-gray-600">本当の魅力が伝わっていない</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">✕</span>
                  <p className="text-sm text-gray-600">他社・他校・他地域との差別化ができない</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">✕</span>
                  <p className="text-sm text-gray-600">応募・集客につながらない</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <p className="text-base font-semibold text-gray-800">
                  結果として、<br />ミスマッチや機会損失が起きている。
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bridge/Arrow Section (Center) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center justify-center lg:px-4"
          >
            <div className="hidden lg:flex flex-col items-center gap-4">
              <ArrowRight className="w-12 h-12 text-[#e95228]" strokeWidth={2.5} />
              <div className="text-center max-w-[200px]">
                <p className="text-sm font-medium text-gray-700 leading-snug">本当に必要なのは、<br /><span className="text-[#e95228] font-bold">「実際に選んだ人の<br />リアルな声」</span></p>
              </div>
              <ArrowRight className="w-12 h-12 text-[#e95228]" strokeWidth={2.5} />
            </div>
            
            {/* Mobile version */}
            <div className="lg:hidden flex items-center justify-center gap-3 py-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#e95228] to-transparent"></div>
              <div className="text-center px-4">
                <p className="text-sm font-medium text-gray-700 leading-snug mb-2">
                  本当に必要なのは、
                </p>
                <p className="text-sm text-[#e95228] font-bold">
                  「第三者の<br />リアルな声」
                </p>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#e95228] to-transparent"></div>
            </div>
          </motion.div>

          {/* Solution Section (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[#e95228] via-[#ff6b4a] to-[#e95228] rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">
                    テステモは、<br />リアルな声で伝えます
                  </h3>
                </div>
                
                <p className="text-base text-white/95 mb-6 leading-relaxed">
                  実際にその企業・大学・地域を選んだ人へのインタビューを通して、
                </p>
                
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-6">
                  <p className="text-lg font-bold text-white text-center">判断につながる<br className="sm:hidden" />リアルな情報を<br className="sm:hidden" />動画で届ける</p>
                </div>
                
                <div className="flex items-center gap-2 text-white/90">
                  <Video className="w-5 h-5" />
                  <p className="text-sm font-medium">インタビュー動画で意思決定を支援</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Why Section */}
        

        {/* How Section */}
        

        {/* Value Section - Horizontal Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 shadow-xl border-2 border-gray-200">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-3">Value</h3>
            <p className="text-center text-gray-600 mb-8">文字や写真では伝わらない</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {valuePoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-4 shadow-md border border-[#e95228]/20 text-center overflow-hidden"
                >
                  <div className="mb-3 mx-auto max-w-[180px]">
                    <div className="relative w-full rounded-lg overflow-hidden shadow-sm" style={{ paddingBottom: '177.78%' }}>
                      <iframe
                        src={point.videoUrl}
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title={`Tesutemo Interview - ${point.label}`}
                      ></iframe>
                    </div>
                  </div>
                  <p className="text-xl font-bold text-[#e95228]">{point.label}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center bg-white rounded-2xl p-6 shadow-md">
              <p className="text-lg lg:text-xl text-gray-900 font-semibold leading-relaxed">
                まで含めて伝えることで、<br className="sm:hidden" />
                <span className="text-[#e95228]">信頼できる判断材料</span>を提供します
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}