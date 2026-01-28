import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { DATA } from '../constants.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useCart } from '../context/CartContext.tsx';
import { useNavigate } from 'react-router-dom';
import NotificationModal from './NotificationModal.tsx';

interface OrderFormProps {
  onOrderSuccess: () => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ onOrderSuccess }) => {
  const { language } = useLanguage();
  const content = DATA[language].ui.order_page;
  const { cart, totalAmount } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [notification, setNotification] = useState<{
    show: boolean;
    type: 'success' | 'error';
    message: string;
  }>({ show: false, type: 'success', message: '' });

  // Google Form IDs
  const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSckm85UMzeIGhUY10Fq6VcN8VVJPfk2e3dq9IcKU-MCVFaNVg/formResponse";
  const ENTRY_NAME = "entry.1013124254"; 
  const ENTRY_EMAIL = "entry.153116173"; 
  const ENTRY_PHONE = "entry.1123782137"; 
  const ENTRY_ADDRESS = "entry.1776952615"; 
  const ENTRY_ORDER_DETAILS = "entry.684873411";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare Cart String
    const orderDetails = cart.map(item => 
      `- ${item.name} x${item.quantity} (${item.price})`
    ).join('\n');
    
    const fullOrderDetails = `ORDER LIST:\n${orderDetails}\n\nTOTAL AMOUNT: ${totalAmount.toLocaleString('vi-VN')}₫`;

    const formBody = new FormData();
    formBody.append(ENTRY_NAME, formData.name);
    formBody.append(ENTRY_EMAIL, formData.email);
    formBody.append(ENTRY_PHONE, formData.phone);
    formBody.append(ENTRY_ADDRESS, formData.address);
    formBody.append(ENTRY_ORDER_DETAILS, fullOrderDetails); 

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formBody
      });
      
      onOrderSuccess(); // Call parent handler instead of clearCart
      setSubmitted(true);
      // Removed success notification modal as per request
      
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Order error:", error);
      setNotification({
        show: true,
        type: 'error',
        message: language === 'vn' 
          ? 'Có lỗi xảy ra. Vui lòng thử lại.' 
          : 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {submitted ? (
        <div className="bg-[#F5F5DC] p-8 rounded-2xl text-center animate-fade-in">
          <div className="w-20 h-20 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-[#2E7D32]" />
          </div>
          <h3 className="text-3xl font-serif text-[#3E2723] mb-4">
            {language === 'vn' ? 'Cảm ơn bạn đã đặt hàng!' : 'Thank you for your order!'}
          </h3>
          <p className="text-[#5D4037] text-lg mb-2 font-medium">
            {language === 'vn' 
              ? 'Đơn hàng của bạn đã được ghi nhận thành công.' 
              : 'Your order has been successfully recorded.'}
          </p>
          <p className="text-[#795548] max-w-lg mx-auto leading-relaxed mb-8">
            {language === 'vn'
              ? 'Chúng tôi sẽ liên hệ với bạn qua số điện thoại đã cung cấp trong vòng 24 giờ tới để xác nhận chi tiết đơn hàng và thời gian giao nhận. Xin chân thành cảm ơn quý khách đã tin tưởng và ủng hộ!'
              : 'We will contact you via the provided phone number within the next 24 hours to confirm order details and delivery time. Thank you sincerely for your trust and support!'}
          </p>
          <div className="mb-8">
             <p className="text-[#6D4C41] mb-2">{language === 'vn' ? 'Nếu bạn có thắc mắc, vui lòng nhắn tin trực tiếp cho Fanpage:' : 'If you have any questions, please message our Fanpage:'}</p>
             <a 
               href="https://www.facebook.com/share/1NJwTBqBeV/?mibextid=wwXIfr"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 text-[#2E7D32] font-bold hover:underline"
             >
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
               Coffee Form Fanpage
             </a>
          </div>
          <button 
            onClick={() => {
               setSubmitted(false);
               navigate('/products');
            }}
            className="px-8 py-3 bg-[#3E2723] text-white rounded-full font-bold hover:bg-[#3E2723]/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            {DATA[language].ui.product_detail.back_collection}
          </button>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#F5F5DC]">
          <h3 className="text-2xl font-serif text-[#3E2723] mb-2">{content.form_title}</h3>
          <p className="text-sm text-[#6D4C41] mb-6">
            {language === 'vn' 
              ? 'Vui lòng điền đầy đủ thông tin bên dưới để hoàn tất đơn hàng. Chúng tôi sẽ liên hệ xác nhận trong vòng 24 giờ.'
              : 'Please fill in all the information below to complete your order. We will contact you for confirmation within 24 hours.'}
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-[#3E2723] mb-1">{content.fields.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#F5F5DC]/30 border border-[#F5F5DC] focus:outline-none focus:border-[#81C784] transition-colors"
                placeholder={content.fields.name_placeholder}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-[#3E2723] mb-1">{content.fields.email}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#F5F5DC]/30 border border-[#F5F5DC] focus:outline-none focus:border-[#81C784] transition-colors"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-[#3E2723] mb-1">{content.fields.phone}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#F5F5DC]/30 border border-[#F5F5DC] focus:outline-none focus:border-[#81C784] transition-colors"
                  placeholder="+84 90 123 4567"
                />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-bold text-[#3E2723] mb-1">{content.fields.address}</label>
              <textarea
                id="address"
                name="address"
                required
                rows={3}
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#F5F5DC]/30 border border-[#F5F5DC] focus:outline-none focus:border-[#81C784] transition-colors resize-none"
                placeholder={content.fields.address_placeholder}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[#3E2723] text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#3E2723]/90 transition-colors mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span>{isSubmitting ? (language === 'vn' ? 'Đang gửi...' : 'Sending...') : content.confirm_order}</span>
              {!isSubmitting && <Send className="w-4 h-4" />}
            </button>
          </form>
        </div>
      )}

      <NotificationModal
        isOpen={notification.show}
        onClose={() => setNotification(prev => ({ ...prev, show: false }))}
        type={notification.type}
        message={notification.message}
      />
    </>
  );
};

export default OrderForm;
