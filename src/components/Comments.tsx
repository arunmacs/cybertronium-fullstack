import { useState } from 'react';
import { UserCircle, Send, MessageSquare } from 'lucide-react';
import { API_BASE_URL } from '@/config/api';

interface Comment {
  id: string;
  content: string;
  guestName: string | null;
  createdAt: string;
  author: {
    name: string | null;
    image: string | null;
  } | null;
}

interface CommentsProps {
  postSlug: string;
  initialComments?: Comment[];
}

const ExpandableText = ({ text, maxLength = 200 }: { text: string; maxLength?: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (text.length <= maxLength) {
    return <p className="text-[#4F4F4F] leading-relaxed whitespace-pre-wrap">{text}</p>;
  }

  return (
    <div title={!isExpanded ? text : undefined}>
      <div className={`text-[#4F4F4F] leading-relaxed whitespace-pre-wrap ${isExpanded ? 'max-h-[200px] overflow-y-auto pr-2' : ''}`}>
        {isExpanded ? text : `${text.slice(0, maxLength)}...`}
      </div>
      <button
        title={isExpanded ? 'Collapse comment' : 'Expand comment'}
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-[#C01E6C] text-[13px] font-semibold mt-1 hover:underline focus:outline-none transition-all"
      >
        {isExpanded ? 'See Less' : 'See More'}
      </button>
    </div>
  );
};

const Comments = ({ postSlug, initialComments = [] }: CommentsProps) => {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !content.trim()) return;

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setMessage('');

    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/posts/${postSlug}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ guestName: name, guestEmail: email, content })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit comment');
      }

      setStatus('success');
      setMessage(data.message || 'Comment submitted for review.');
      setName('');
      setEmail('');
      setContent('');

      // Optionally add to list immediately with PENDING state, or wait for approval.
      // Since it's pending, we won't add it to the live list to avoid confusing the user.

    } catch (err: any) {
      setStatus('error');
      setMessage(err.message);
    }
  };

  return (
    <div className="mt-8 border-t border-gray-100 pt-6">
      <div className="flex items-center gap-3 mb-6">
        <MessageSquare className="w-6 h-6 text-[#C01E6C]" />
        <h3 className="text-2xl font-bold text-[#461148]">
          Comments {comments.length > 0 && <span className="text-gray-400 text-lg font-normal">({comments.length})</span>}
        </h3>
      </div>

      {/* Comment Form */}
      <div className="bg-[#F8F9FB] rounded-[20px] p-4 mb-6 border border-gray-100 shadow-sm">
        <h4 className="text-lg font-semibold text-[#333333] mb-4">Leave a Reply</h4>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={status === 'submitting'}
              className="w-full md:w-1/2 px-4 py-2 rounded-xl border border-gray-200 focus:border-[#C01E6C] focus:ring-1 focus:ring-[#C01E6C] outline-none transition-all bg-white"
              required
            />
            <input
              type="email"
              placeholder="Your Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'submitting'}
              className="w-full md:w-1/2 px-4 py-2 rounded-xl border border-gray-200 focus:border-[#C01E6C] focus:ring-1 focus:ring-[#C01E6C] outline-none transition-all bg-white"
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Your Comment *"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              disabled={status === 'submitting'}
              rows={4}
              className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-[#C01E6C] focus:ring-1 focus:ring-[#C01E6C] outline-none transition-all bg-white resize-none"
              required
            />
          </div>

          {message && (
            <div className={`p-2 rounded-lg text-sm ${status === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
              {message}
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={status === 'submitting' || !name.trim() || !email.trim() || !content.trim()}
              className="px-6 py-3 bg-[#461148] hover:bg-[#2A0A2B] text-white font-medium rounded-xl flex items-center gap-2 transition-all disabled:opacity-50"
            >
              {status === 'submitting' ? 'Submitting...' : (
                <>Post Comment <Send className="w-4 h-4" /></>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Comments List */}
      {comments.length > 0 ? (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="flex gap-4 p-4 bg-white border border-gray-100 rounded-[20px] shadow-sm">
              <div className="shrink-0">
                {comment.author?.image ? (
                  <img src={comment.author.image} alt={comment.author.name || ''} className="w-10 h-10 rounded-full object-cover" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                    <UserCircle className="w-6 h-6" />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h5 className="font-bold text-[#333333]">{comment.author?.name || comment.guestName || 'Anonymous'}</h5>
                  <span className="text-sm text-gray-400">{formatDate(comment.createdAt)}</span>
                </div>
                <ExpandableText text={comment.content} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          No comments yet. Be the first to share your thoughts!
        </div>
      )}
    </div>
  );
};

export default Comments;
