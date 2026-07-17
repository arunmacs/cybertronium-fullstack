import { useState } from 'react';
import { Mail, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const NewsletterCTA = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    // Simulate API call for newsletter subscription
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-[#461148] to-[#2A0A2B] rounded-[24px] p-8 md:p-12 text-white relative overflow-hidden my-12 shadow-xl"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#C01E6C] to-transparent rounded-full opacity-20 -mr-32 -mt-32 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#E21F55] to-transparent rounded-full opacity-20 -ml-24 -mb-24 blur-3xl" />
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 ring-1 ring-white/20">
            <Mail className="w-6 h-6 text-[#F9D6E4]" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Stay Ahead of Cyber Threats</h3>
          <p className="text-gray-300 text-[15px] max-w-md mx-auto md:mx-0">
            Join thousands of professionals receiving our latest insights, threat intelligence, and security best practices.
          </p>
        </div>

        <div className="w-full md:w-[400px]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading' || status === 'success'}
                className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-400 outline-none focus:bg-white/15 focus:border-white/30 transition-all disabled:opacity-50"
                required
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success' || !email}
              className="w-full px-6 py-4 bg-gradient-to-r from-[#E21F55] to-[#C01E6C] hover:from-[#C01E6C] hover:to-[#A0185A] text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 shadow-lg"
            >
              {status === 'loading' ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : status === 'success' ? (
                <>
                  <CheckCircle className="w-5 h-5" /> Subscribed
                </>
              ) : (
                <>
                  Subscribe Now <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
            <p className="text-xs text-center text-gray-400 mt-2">
              We care about your data. Read our <a href="/privacy-policy" className="underline hover:text-white transition-colors">Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsletterCTA;
