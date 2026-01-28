import React from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'success' | 'error';
  message: string;
}

const NotificationModal: React.FC<NotificationModalProps> = ({ isOpen, onClose, type, message }) => {
  const { language } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative animate-scale-up border-l-4"
        style={{ borderLeftColor: type === 'success' ? '#2E7D32' : '#D32F2F' }}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="flex flex-col items-center text-center">
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
            style={{ background: type === 'success' ? 'rgba(46, 125, 50, 0.1)' : 'rgba(211, 47, 47, 0.1)' }}
          >
            {type === 'success' ? (
              <CheckCircle className="w-8 h-8" style={{ color: '#2E7D32' }} />
            ) : (
              <XCircle className="w-8 h-8" style={{ color: '#D32F2F' }} />
            )}
          </div>
          
          <h3 className="text-xl font-bold mb-2" style={{ color: '#2C1810', fontFamily: "'Playfair Display', serif" }}>
            {type === 'success' 
              ? (language === 'vn' ? 'Thành Công!' : 'Success!') 
              : (language === 'vn' ? 'Lỗi!' : 'Error!')}
          </h3>
          
          <p className="text-gray-600 mb-6">
            {message}
          </p>
          
          <button
            onClick={onClose}
            className="px-8 py-3 rounded-full font-bold text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
            style={{ 
              background: type === 'success' 
                ? 'linear-gradient(135deg, #2E7D32, #66BB6A)' 
                : 'linear-gradient(135deg, #D32F2F, #FF5252)'
            }}
          >
            {language === 'vn' ? 'Đóng' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
