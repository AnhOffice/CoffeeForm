import React, { useState } from 'react';
import NotificationModal from './NotificationModal.tsx';
import { Facebook, Instagram, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { DATA } from '../constants.tsx';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const content = DATA[language].ui.footer;
  const navLinks = DATA[language].nav;
  
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    show: boolean;
    type: 'success' | 'error';
    message: string;
  }>({ show: false, type: 'success', message: '' });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeYcjK85EQ_twffGL6CRQFOzkPRdpGsVMDQ3a6BBc74IYbcnA/formResponse";
    
    const formData = new FormData();
    formData.append('entry.361133067', email);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      });
      setNotification({
        show: true,
        type: 'success',
        message: language === 'vn' ? 'Đăng ký thành công! Cảm ơn bạn.' : 'Subscribed successfully! Thank you.'
      });
      setEmail('');
    } catch (error) {
      console.error("Newsletter error:", error);
      setNotification({
        show: true,
        type: 'error',
        message: language === 'vn' ? 'Có lỗi xảy ra. Vui lòng thử lại.' : 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative" style={{ background: 'linear-gradient(135deg, #2C1810 0%, #3E2723 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden bg-white">
                <img 
                  src="images/logo/LogoWeb.jpg" 
                  alt="Coffee Form Logo" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: '#FDFBF7' }}>
                COFFEE FORM
              </span>
            </div>
            <p className="text-sm mb-6" style={{ color: '#D7CCC8' }}>
              {content.brand_desc}
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/share/1NJwTBqBeV/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: 'rgba(102, 187, 106, 0.2)' }}>
                <Facebook className="w-5 h-5" style={{ color: '#66BB6A' }} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg" style={{ color: '#FDFBF7', fontFamily: "'Playfair Display', serif" }}>
              {content.quick_links}
            </h4>
            <ul className="space-y-2">
              {Object.keys(navLinks).map((key) => (
                <li key={key}>
                  <a href={`#${key}`} className="text-sm transition-colors duration-300 hover:text-opacity-100"
                    style={{ color: '#D7CCC8' }}>
                    {navLinks[key as keyof typeof navLinks]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4 text-lg" style={{ color: '#FDFBF7', fontFamily: "'Playfair Display', serif" }}>
              {content.resources.title}
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: '#D7CCC8' }}>
              <li><a href="#" className="hover:opacity-100 transition-opacity">{content.resources.story}</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">{content.resources.sustainability}</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">{content.resources.blog}</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">{content.resources.faqs}</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4 text-lg" style={{ color: '#FDFBF7', fontFamily: "'Playfair Display', serif" }}>
              {content.newsletter.title}
            </h4>
            <p className="text-sm mb-4" style={{ color: '#D7CCC8' }}>
              {content.newsletter.desc}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={content.newsletter.placeholder}
                className="flex-1 px-4 py-2 rounded-full text-sm focus:outline-none disabled:opacity-50"
                style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#FDFBF7', border: '1px solid rgba(255, 255, 255, 0.2)' }}
                required
                disabled={isSubmitting}
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="p-2 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:hover:scale-100"
                style={{ background: 'linear-gradient(135deg, #2E7D32, #66BB6A)' }}>
                <Mail className="w-5 h-5 text-white" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          <p className="text-sm flex items-center gap-1" style={{ color: '#D7CCC8' }}>
            {content.rights} • Made with <Heart className="w-4 h-4 fill-current" style={{ color: '#E57373' }} />
          </p>
          <div className="flex gap-6 text-sm" style={{ color: '#D7CCC8' }}>
            <a href="#" className="hover:opacity-100 transition-opacity">{content.privacy}</a>
            <a href="#" className="hover:opacity-100 transition-opacity">{content.terms}</a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 z-40"
        style={{ background: 'linear-gradient(135deg, #2E7D32, #66BB6A)' }}>
        <ArrowUp className="w-6 h-6 text-white" />
      </button>
      <NotificationModal
        isOpen={notification.show}
        onClose={() => setNotification(prev => ({ ...prev, show: false }))}
        type={notification.type}
        message={notification.message}
      />
    </footer>
  );
};

export default Footer;
