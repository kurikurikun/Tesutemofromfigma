import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Users, Video, Globe, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import Slider from 'react-slick';
import { useRef } from 'react';
import mynaviImage from '@/assets/4f7a5f3047b013fe694cbb11edb6c98e0583ae76.png';

export function RecruitmentPage() {
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

  const useCases = [
    {
      title: '志願者数を増やしたい',
      icon: Users,
    },
    {
      title: 'オープンキャンパスの補完をしたい',
      icon: Video,
    },
    {
      title: '学部ごとの魅力を伝えたい',
      icon: GraduationCap,
    },
    {
      title: '留学生向けの情報を強化したい',
      icon: Globe,
    },
  ];

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
      title: '求職者の情報収集チャネルに最適化',
      description: 'ターゲットとなる求職者が日常的に使うSNSに適したコンテンツとして活用できる',
    },
  ];

  const values = [
    {
      title: '動画素材がすぐ使える',
      description: 'SNSや採用イベント・説明会で使用するために適した\n縦型・横型の動画素材が手に入る',
    },
    {
      title: '制作の手間が減る',
      description: '制作の手間が大幅に減ることで\n担当者の負担が減る',
    },
    {
      title: '共感されるコンテンツ',
      description: 'Z世代 / α世代にとって信頼性のあるリアルな声は共感を生む',
    },
    {
      title: '稟議が通しやすい',
      description: '低予算で豊富なプランにより稟議を通しやすい',
    },
    {
      title: '現地に行かず実施できる',
      description: '現地に撮影に行く必要がなく、\n距離に関係なく低コストで実施できる',
    },
    {
      title: '採用活動の導線を強化',
      description: 'パンフレットや採用サイトに動画を組み込むことで、\n応募につながる導線をつくる',
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
          <a href="/" className="text-2xl font-bold text-white">
            TesuTemo
          </a>
          <div className="flex items-center gap-6">
            <button
              onClick={handleScrollToTop}
              className="text-white hover:text-gray-200 transition-colors cursor-pointer"
            >
              トップ
            </button>
            <button
              onClick={() => handleContactClick('recruitment-header')}
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
                会社の<span className="text-[#e95228]">「ファン」</span>である社員の声で、<br />
                次の仲間を迎える
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                <span className="text-[#e95228] font-semibold">リアルな声</span>で求職者の共感を生み<br />
                <span className="text-[#e95228] font-semibold">安価</span>で手に入る採用の動画プロモーション
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
                  onClick={() => handleContactClick('recruitment-hero-contact')}
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
              発信しているのに、応募が来ない
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
                  予算が限られているのに、社員のリアルな声を発信したい
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#e95228] rounded-full mt-2.5 flex-shrink-0" />
                <p className="text-lg text-gray-700 leading-relaxed">
                  採用サイトを作っても、そもそも辿りつかない
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#e95228] rounded-full mt-2.5 flex-shrink-0" />
                <p className="text-lg text-gray-700 leading-relaxed">
                  SNS発信は大事だと知りながら、魅力のコンテンツがない
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
                会社が求める数とタイプの応募者が集まらず、採用のミスマッチが起きている。
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
              社員のインタビューを通して<br />
              企業の"本当の魅力"を可視化
            </p>
            <div className="bg-gradient-to-r from-[#e95228] to-[#ff6b4a] rounded-2xl p-8 text-white">
              <p className="text-2xl font-semibold">
                入社後の働き方を具体的にイメージできるコンテンツ
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
              リアルな声が、入社の判断を変える
            </h2>
            <p className="text-lg text-gray-600 mb-4">インタビュー動画（横型：90〜120秒 / 縦型：30〜60秒）</p>
            <div className="max-w-3xl mx-auto space-y-2">
              <p className="text-lg text-gray-700">
                横型は採用サイトや説明会・イベントで<span className="font-bold" style={{ color: '#e95228' }}>「しっかり伝える」</span>ために
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
                {/* Video 1 - Original */}
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

                {/* Video 2 - New */}
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

                {/* Video 3 - New */}
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

                {/* Video 4 - New */}
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

      {/* Value Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="bg-gradient-to-r from-[#e8e5f5] to-[#f0eef8] rounded-2xl py-8 px-6 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                採用現場での<br />TesuTemo動画活用イメージ
              </h2>
            </div>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* ① SNS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-[#e95228] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">①</span>
                </div>
                <h3 className="text-2xl font-bold text-[#e95228] mt-1">SNS</h3>
              </div>
              <ul className="space-y-3 ml-14">
                <li className="flex items-start gap-3">
                  <span className="text-gray-700">•</span>
                  <p className="text-gray-700 leading-relaxed">SNSから情報を手に入れているターゲット層と繋がります。</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-700">•</span>
                  <p className="text-gray-700 leading-relaxed">広範囲なエンゲージメントを得られる強力な手段。</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-700">•</span>
                  <p className="text-gray-700 leading-relaxed">インタビュー動画は視聴の魅力でシェアされやすく、SNSでの拡散を促進します。</p>
                </li>
              </ul>
            </motion.div>

            {/* ② 採用説明会 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-[#e95228] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">②</span>
                </div>
                <h3 className="text-2xl font-bold text-[#e95228] mt-1">採用説明会</h3>
              </div>
              <ul className="space-y-3 ml-14">
                <li className="flex items-start gap-3">
                  <span className="text-gray-700">•</span>
                  <p className="text-gray-700 leading-relaxed">企業の雰囲気や文化、職場環境を視覚的に伝え、求職者に印象を与えしもらいます</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-700">•</span>
                  <p className="text-gray-700 leading-relaxed">他の企業との差別化します</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-700">•</span>
                  <p className="text-gray-700 leading-relaxed">短時間で、求職者の関心を引きつけます</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-700">•</span>
                  <p className="text-gray-700 leading-relaxed">求職者はその企業で働くイメージを具体的に持ちやすくなります</p>
                </li>
              </ul>
            </motion.div>

            {/* ③ 企業の採用ページ */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-[#e95228] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">③</span>
                </div>
                <h3 className="text-2xl font-bold text-[#e95228] mt-1">企業の採用ページ</h3>
              </div>
              <ul className="space-y-3 ml-14">
                <li className="flex items-start gap-3">
                  <span className="text-gray-700">•</span>
                  <p className="text-gray-700 leading-relaxed">企業のリアルな雰囲気と文化を伝え、求職者の信頼を得ると共に、応募意欲を高めます</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-700">•</span>
                  <p className="text-gray-700 leading-relaxed">企業の雇用ブランディングを強化します</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-700">•</span>
                  <p className="text-gray-700 leading-relaxed">職場環境や社員の表情、熱意などを直感伝えられます</p>
                </li>
              </ul>
            </motion.div>

            {/* ④ 採用サイト */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-[#e95228] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">④</span>
                </div>
                <h3 className="text-2xl font-bold text-[#e95228] mt-1">採用サイト</h3>
              </div>
              <ul className="space-y-3 ml-14">
                <li className="flex items-start gap-3">
                  <span className="text-gray-700">•</span>
                  <p className="text-gray-700 leading-relaxed">応募する際の意思決定を後押しする効果になります</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-700">•</span>
                  <p className="text-gray-700 leading-relaxed">多様な職種を効率よく比較できます</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-700">•</span>
                  <p className="text-gray-700 leading-relaxed">マイナビなど、採用サイトも縦動画のショートムービーを導入しています</p>
                </li>
              </ul>
            </motion.div>

            {/* マイナビスクリーンショット */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="text-center mb-6">
                <p className="text-lg text-gray-700 font-semibold">マイナビさま</p>
                <p className="text-sm text-gray-500 mt-1">※弊社実績ではなくイメージです</p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src={mynaviImage}
                  alt="マイナビ ショートムービーギャラリー"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
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
                onClick={() => handleContactClick('recruitment-pricing-sns')}
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
                onClick={() => handleContactClick('recruitment-pricing-featured')}
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
                onClick={() => handleContactClick('recruitment-pricing-option')}
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