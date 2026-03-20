import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, User, Building, MessageSquare, Send, CheckCircle } from 'lucide-react';
import chrisPhoto from '@/assets/5d0da16a4e4230023464c5fbd3449b1fe459a92b.png';
import kinoshitaPhoto from '@/assets/71bea6c1621878f2da0e2569839aca8ca5d673fb.png';

interface ContactProps {
  organizationLabel?: string;
  organizationPlaceholder?: string;
}

export function Contact({ 
  organizationLabel = '会社名・組織名',
  organizationPlaceholder = '株式会社テステモ'
}: ContactProps = {}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'お名前を入力してください';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'メッセージを入力してください';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'メッセージは10文字以上で入力してください';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '56f12d3d-3999-4828-bf4d-8400c34959b6',
          name: formData.name,
          email: formData.email,
          company: formData.company || '未入力',
          message: formData.message,
          subject: `Tesutemoお問い合わせ: ${formData.name}様より`,
        })
      });

      const result = await response.json();

      if (result.success) {
        console.log('Form submitted successfully via Web3Forms');
        setIsSuccess(true);
        setFormData({ name: '', email: '', company: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } else {
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setErrors({ submit: '送信に失敗しました。もう一度お試しください。' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-[#e95228] to-[#ff6b4a] rounded-full">
              <span className="text-sm uppercase tracking-wider text-white font-semibold">Contact</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              お問い合わせ
              <br />
              <span className="text-3xl lg:text-4xl">Get in Touch</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              テステモについてのご質問や、導入に関するご相談など、
              お気軽にお問い合わせください。
            </p>

            <div className="space-y-6">
              {/* Chris */}
              <div className="flex items-start gap-4">
                <img 
                  src={chrisPhoto} 
                  alt="Chris Moore" 
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0 shadow-md"
                />
                <div>
                  <div className="group relative inline-block">
                    <h3 className="font-semibold text-gray-900 mb-1 transition-opacity duration-300 group-hover:opacity-0">
                      Chris Moore
                    </h3>
                    <h3 className="font-semibold text-gray-900 mb-1 absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      クリス・モア
                    </h3>
                  </div>
                  <a 
                    href="mailto:chris@move-ment.co" 
                    className="text-[#e95228] hover:underline block"
                  >
                    chris@move-ment.co
                  </a>
                </div>
              </div>

              {/* Kinoshita */}
              <div className="flex items-start gap-4">
                <img 
                  src={kinoshitaPhoto} 
                  alt="Yosuke Kinoshita" 
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0 shadow-md"
                />
                <div>
                  <div className="group relative inline-block">
                    <h3 className="font-semibold text-gray-900 mb-1 transition-opacity duration-300 group-hover:opacity-0">
                      Yosuke Kinoshita
                    </h3>
                    <h3 className="font-semibold text-gray-900 mb-1 absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap">
                      木下陽介
                    </h3>
                  </div>
                  <a 
                    href="mailto:kinoshita@move-ment.co" 
                    className="text-[#e95228] hover:underline block"
                  >
                    kinoshita@move-ment.co
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 lg:p-10"
          >
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">送信完了</h3>
                <p className="text-gray-600">
                  お問い合わせありがとうございます。
                  <br />
                  担当者より2営業日以内にご連絡いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    お名前 <span className="text-[#e95228]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <User size={20} />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? 'border-red-300 focus:ring-red-200'
                          : 'border-gray-200 focus:ring-[#e952281a] focus:border-[#e95228]'
                      }`}
                      placeholder="山田 太郎"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    メールアドレス <span className="text-[#e95228]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <Mail size={20} />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? 'border-red-300 focus:ring-red-200'
                          : 'border-gray-200 focus:ring-[#e952281a] focus:border-[#e95228]'
                      }`}
                      placeholder="example@company.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Company Field (Optional) */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                    {organizationLabel} <span className="text-gray-400 font-normal">（任意）</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <Building size={20} />
                    </div>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e952281a] focus:border-[#e95228] transition-all"
                      placeholder={organizationPlaceholder}
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    お問い合わせ内容 <span className="text-[#e95228]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all resize-none ${
                      errors.message
                        ? 'border-red-300 focus:ring-red-200'
                        : 'border-gray-200 focus:ring-[#e952281a] focus:border-[#e95228]'
                    }`}
                    placeholder="お問い合わせ内容をご記入ください"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                {/* Privacy Notice */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-600">
                    <a href="#" className="text-[#e95228] hover:underline">プライバシーポリシー</a>
                    に同意の上、送信してください。お預かりした個人情報は、お問い合わせへの対応のみに使用いたします。
                  </p>
                </div>

                {errors.submit && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="text-sm text-red-600">{errors.submit}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 text-lg font-semibold rounded-full transition-all shadow-lg hover:shadow-xl text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#e95228' }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      送信中...
                    </>
                  ) : (
                    <>
                      送信する
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}