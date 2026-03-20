import { useState, useEffect } from 'react';
import { Mail, User, Building, Calendar, RefreshCw, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company: string;
  message: string;
  timestamp: string;
  status: string;
}

export function ContactAdmin() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSubmissions = () => {
    setLoading(true);
    
    try {
      const storedSubmissions = localStorage.getItem('contactSubmissions');
      const parsedSubmissions = storedSubmissions ? JSON.parse(storedSubmissions) : [];
      
      // Sort by timestamp (newest first)
      const sortedSubmissions = parsedSubmissions.sort((a: ContactSubmission, b: ContactSubmission) => {
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      });
      
      setSubmissions(sortedSubmissions);
    } catch (error) {
      console.error('Error loading submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return dateString;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#e95228] transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            ホームに戻る
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                お問い合わせ管理
              </h1>
              <p className="text-gray-600">
                Contact Form Submissions
              </p>
            </div>
            <button
              onClick={fetchSubmissions}
              disabled={loading}
              className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              <RefreshCw size={20} className={loading ? 'animate-spin' : ''} />
              更新
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-[#e952281a] flex items-center justify-center">
                <Mail size={20} style={{ color: '#e95228' }} />
              </div>
              <h3 className="text-sm font-semibold text-gray-600">総お問い合わせ数</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">{submissions.length}</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-[#7e91cf1a] flex items-center justify-center">
                <Building size={20} style={{ color: '#7e91cf' }} />
              </div>
              <h3 className="text-sm font-semibold text-gray-600">企業からの問い合わせ</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {submissions.filter(s => s.company).length}
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <User size={20} className="text-green-600" />
              </div>
              <h3 className="text-sm font-semibold text-gray-600">個人からの問い合わせ</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {submissions.filter(s => !s.company).length}
            </p>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-4 border-gray-200 border-t-[#e95228] rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600">読み込み中...</p>
          </div>
        )}

        {/* Submissions List */}
        {!loading && (
          <div className="space-y-4">
            {submissions.length === 0 ? (
              <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
                <p className="text-gray-600">まだお問い合わせがありません</p>
              </div>
            ) : (
              submissions.map((submission) => (
                <div
                  key={submission.id}
                  className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-[#e95228] transition-colors"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Left: Contact Info */}
                    <div>
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-[#e952281a] flex items-center justify-center flex-shrink-0">
                          <User size={18} style={{ color: '#e95228' }} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-lg">
                            {submission.name}
                          </h3>
                          {submission.company && (
                            <p className="text-sm text-gray-600 flex items-center gap-1">
                              <Building size={14} />
                              {submission.company}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2 ml-13">
                        <p className="text-sm text-gray-600 flex items-center gap-2">
                          <Mail size={14} />
                          <a
                            href={`mailto:${submission.email}`}
                            className="text-[#e95228] hover:underline"
                          >
                            {submission.email}
                          </a>
                        </p>
                        <p className="text-sm text-gray-500 flex items-center gap-2">
                          <Calendar size={14} />
                          {formatDate(submission.timestamp)}
                        </p>
                      </div>
                    </div>

                    {/* Right: Message */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">
                        お問い合わせ内容
                      </h4>
                      <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                        {submission.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}