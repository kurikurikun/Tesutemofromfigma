import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import Slider from 'react-slick';
import { useRef } from 'react';
import { Link } from 'react-router';

export function CaseStudyPage() {
  const handleContactClick = (source: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToVideoPreview = () => {
    const videoSection = document.getElementById('video-preview');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const howItWorks = [
    {
      number: '01',
      title: '日常環境だから',
      description: '自身のスマホに向けて話すことで、\nリラックスした状態でリアルな声を聞くことができる',
    },
    {
      number: '02',
      title: '専用ソフトで高品質に収録',
      description: 'ログイン・サインアップ不要の専用ソフトで収録することで、\n音声・映像の品質を保ちながら、\n現地に撮影に行く必要がなく、コストを抑えて実施できる',
    },
    {
      number: '03',
      title: '顧客の情報収集チャネルに最適化',
      description: 'ターゲットとなる顧客が日常的に使うSNSや企業サイトに適したコンテンツとして活用できる',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const videoPreviewSliderRef = useRef<Slider>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#7e91cf] z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">
            TesuTemo
          </Link>
          <div className="flex items-center gap-6">
            <button
              onClick={handleScrollToTop}
              className="text-white hover:text-gray-200 transition-colors cursor-pointer"
            >
              トップ
            </button>
            <button
              onClick={() => handleContactClick('casestudy-header')}
              className="px-6 py-2.5 bg-[#e95228] text-white rounded-xl font-medium hover:bg-[#c74320] transition-all duration-300"
            >
              はじめる
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                自社の<span className="text-[#e95228]">「ファン」</span>の声で、<br />
                次の顧客を動かす
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                これまでの<span className="text-[#e95228] font-semibold">お客様のリアルな声</span>で、<br />
                これからのお客様の<span className="text-[#e95228] font-semibold">信頼を築く</span>。<br />
                オンライン型の導入事例動画プロモーション
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleScrollToVideoPreview}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-[#e95228] text-[#e95228] rounded-xl font-medium hover:bg-[#e95228] hover:text-white transition-all duration-300"
                >
                  導入事例を見る
                  <ArrowRight size={20} />
                </button>
                <button
                  onClick={() => handleContactClick('casestudy-hero-contact')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#e95228] text-white rounded-xl font-medium hover:bg-[#c74320] transition-all duration-300"
                >
                  はじめる
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-[#7e91cf] to-[#5a6eb3] rounded-3xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://player.vimeo.com/video/1017754838?h=2df374323e&badge=0&autopause=0&player_id=0&app_id=58479"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              発信しているのに、お問い合わせが来ない
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">企業として情報発信はしているものの、<br />実際にはこんな課題を感じていませんか？</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 rounded-3xl p-8 lg:p-12 mb-12"
          >
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#e95228] rounded-full mt-2.5 flex-shrink-0" />
                <p className="text-lg text-gray-700 leading-relaxed">
                  予算が限られているのに、お客様のリアルな声を発信したい
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#e95228] rounded-full mt-2.5 flex-shrink-0" />
                <p className="text-lg text-gray-700 leading-relaxed">
                  導入事例を作っても、そもそも見てもらえない
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#e95228] rounded-full mt-2.5 flex-shrink-0" />
                <p className="text-lg text-gray-700 leading-relaxed">
                  SNS発信は大事だと知りながら、魅力のあるコンテンツがない
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#e95228] rounded-full mt-2.5 flex-shrink-0" />
                <p className="text-lg text-gray-700 leading-relaxed">
                  限られた人員で、継続的な発信が難しい
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#e95228] rounded-full mt-2.5 flex-shrink-0" />
                <p className="text-lg text-gray-700 leading-relaxed">
                  すぐに発信したいのに、従来の撮影では時間がかかる
                </p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl p-8 border-l-4 border-[#e95228]">
              <p className="text-xl text-gray-700 leading-relaxed">
                結果として、<br />
                見込み顧客の信頼を得られず、お問い合わせや成約に繋がっていない。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              テステモは、リアルな声で伝えます
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              お客様のインタビューを通して<br />
              サービスの"本当の価値"を可視化
            </p>
            <div className="bg-gradient-to-r from-[#e95228] to-[#ff6b4a] rounded-2xl p-8 text-white">
              <p className="text-2xl font-semibold">
                導入後の成果を具体的にイメージできるコンテンツ
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Preview Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="video-preview">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              リアルな声が、購入の判断を変える
            </h2>
            <p className="text-lg text-gray-600 mb-4">インタビュー動画（横型：90〜120秒 / 縦型：30〜60秒）</p>
            <div className="max-w-3xl mx-auto space-y-2">
              <p className="text-lg text-gray-700">
                横型は企業サイトや商談・展示会で<span className="font-bold" style={{ color: '#e95228' }}>「しっかり伝える」</span>ために
              </p>
              <p className="text-lg text-gray-700">
                縦型はSNSで<span className="font-bold" style={{ color: '#e95228' }}>「見つけてもらう」</span>ために
              </p>
            </div>
          </motion.div>

          {/* Horizontal Videos Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto mb-16"
          >
            <div className="relative bg-gradient-to-br from-[#ffd4c4] via-[#ffe4d4] to-[#ffc4b4] rounded-3xl overflow-hidden shadow-2xl p-8 lg:p-12">
              {/* Custom Navigation Arrows */}
              <button
                onClick={() => videoPreviewSliderRef.current?.slickPrev()}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Previous"
              >
                <ChevronLeft size={24} className="text-gray-800" />
              </button>
              <button
                onClick={() => videoPreviewSliderRef.current?.slickNext()}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Next"
              >
                <ChevronRight size={24} className="text-gray-800" />
              </button>

              <Slider ref={videoPreviewSliderRef} {...sliderSettings}>
                {/* Video 1 */}
                <div>
                  <div className="px-4">
                    <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
                      <iframe
                        src="https://player.vimeo.com/video/1019675789?h=8ca81d7847&badge=0&autopause=0&player_id=0&app_id=58479"
                        className="w-full h-full"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>

                {/* Video 2 */}
                <div>
                  <div className="px-4">
                    <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
                      <iframe
                        src="https://player.vimeo.com/video/1082523091?badge=0&autopause=0&player_id=0&app_id=58479"
                        className="w-full h-full"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>

                {/* Video 3 */}
                <div>
                  <div className="px-4">
                    <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
                      <iframe
                        src="https://player.vimeo.com/video/1049154514?badge=0&autopause=0&player_id=0&app_id=58479"
                        className="w-full h-full"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>

                {/* Video 4 */}
                <div>
                  <div className="px-4">
                    <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
                      <iframe
                        src="https://player.vimeo.com/video/1019649377?badge=0&autopause=0&player_id=0&app_id=58479"
                        className="w-full h-full"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </motion.div>

          {/* Vertical Videos Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-8">
              {/* Vertical Video 1 */}
              <div className="bg-gradient-to-br from-[#e8f0fe] to-[#d0e1fd] rounded-3xl p-6 shadow-xl">
                <div className="aspect-[9/16] bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
                  <iframe
                    src="https://player.vimeo.com/video/1020046986?h=83e6b0fedd&badge=0&autopause=0&player_id=0&app_id=58479"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Vertical Video 2 */}
              <div className="bg-gradient-to-br from-[#e8f0fe] to-[#d0e1fd] rounded-3xl p-6 shadow-xl">
                <div className="aspect-[9/16] bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
                  <iframe
                    src="https://player.vimeo.com/video/1049144140?badge=0&autopause=0&player_id=0&app_id=58479"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Vertical Video 3 */}
              <div className="bg-gradient-to-br from-[#e8f0fe] to-[#d0e1fd] rounded-3xl p-6 shadow-xl">
                <div className="aspect-[9/16] bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
                  <iframe
                    src="https://player.vimeo.com/video/1169470823?h=af1c20547e&badge=0&autopause=0&player_id=0&app_id=58479"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              すべてオンラインで完結だから
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 h-full">
                  <div className="text-6xl font-bold text-[#e95228] opacity-20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight size={24} className="text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              TesuTemoの料金プラン
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* SNS Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-3xl p-8 lg:p-10 h-full flex flex-col"
            >
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-6">SNSプラン</h3>
                <div className="text-5xl font-bold text-gray-900 mb-8">
                  120,000<span className="text-3xl">円</span>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#e95228] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">インタビュー 1人</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#e95228] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">縦型動画 4本<br /><span className="text-sm text-gray-500">30秒前後、SNS投稿用</span></p>
                </div>
                <div className="pt-4 border-t border-gray-300">
                  <p className="text-sm text-[#7e91cf] font-medium mb-1">※ 最低催行人数3人</p>
                  <p className="text-sm text-[#7e91cf] font-medium">※ 4人以上は一人当たり15%割引となります</p>
                </div>
              </div>

              <button
                onClick={() => handleContactClick('casestudy-pricing-sns')}
                className="w-full py-4 bg-[#e95228] text-white rounded-xl font-semibold hover:bg-[#c74320] transition-all duration-300"
              >
                コンタクト
              </button>
            </motion.div>

            {/* SNS + Screening Plan (Featured) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-[#fff5f0] to-[#ffe8dd] rounded-3xl p-8 lg:p-10 border-2 border-[#e95228] relative h-full flex flex-col shadow-xl lg:scale-105"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#7e91cf] text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Best Value
                </span>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">SNS+上映プラン</h3>
                <div className="text-5xl font-bold text-gray-900 mb-8">
                  180,000<span className="text-3xl">円</span>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#e95228] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">縦型動画 4本<br /><span className="text-sm text-gray-500">30秒前後、SNS投稿用</span></p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#e95228] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">横型動画 2本<br /><span className="text-sm text-gray-500">90秒前後、YOUTUBE、イベント上映など</span></p>
                </div>
                <div className="pt-4 border-t border-[#e95228] border-opacity-30">
                  <p className="text-sm text-[#7e91cf] font-medium mb-1">※ 最低催行人数3人</p>
                  <p className="text-sm text-[#7e91cf] font-medium">※ 4人以上は一人当たり15%割引となります</p>
                </div>
              </div>

              <button
                onClick={() => handleContactClick('casestudy-pricing-featured')}
                className="w-full py-4 bg-[#e95228] text-white rounded-xl font-semibold hover:bg-[#c74320] transition-all duration-300 shadow-lg"
              >
                コンタクト
              </button>
            </motion.div>

            {/* Option Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-3xl p-8 lg:p-10 h-full flex flex-col"
            >
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-6">オプション</h3>
                <div className="text-5xl font-bold text-gray-900 mb-8">
                  30,000<span className="text-3xl">円</span>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#e95228] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-white">1</span>
                  </div>
                  <p className="text-gray-700">インタビュー記事<br /><span className="text-sm text-gray-500">配布や友方のサイトに記載用</span></p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#e95228] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-white">2</span>
                  </div>
                  <p className="text-gray-700">フルインタビュー動画<br /><span className="text-sm text-gray-500">質問をタイトルとして構入たが動画未編集</span></p>
                </div>
                <div className="pt-4 border-t border-gray-300">
                  <p className="text-sm text-[#7e91cf] font-medium">※各オプション1、2の価格となります</p>
                </div>
              </div>

              <button
                onClick={() => handleContactClick('casestudy-pricing-option')}
                className="w-full py-4 bg-[#e95228] text-white rounded-xl font-semibold hover:bg-[#c74320] transition-all duration-300"
              >
                コンタクト
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact 
        organizationLabel="企業名"
        organizationPlaceholder="テステモ株式会社"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
