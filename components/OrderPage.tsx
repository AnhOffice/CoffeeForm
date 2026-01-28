import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Trash2 } from 'lucide-react';
import { DATA } from '../constants.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useCart } from '../context/CartContext.tsx';
import OrderForm from './OrderForm.tsx';
import MotionWrapper from './MotionWrapper.tsx';

const OrderPage: React.FC = () => {
  const { language } = useLanguage();
  const { cart, updateQuantity, removeFromCart, totalAmount, cartCount, clearCart } = useCart();
  const content = DATA[language].ui.order_page;
  const navigate = useNavigate();
  const [orderSuccess, setOrderSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [language]);

  if (cartCount === 0 && !orderSuccess) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F5DC]/20 px-4">
        <h2 className="text-3xl font-serif text-[#3E2723] mb-4 text-center">
          {language === 'vn' ? 'Giỏ hàng của bạn đang trống' : 'Your cart is empty'}
        </h2>
        <Link to="/products" className="px-8 py-3 bg-[#3E2723] text-white rounded-full font-bold hover:bg-[#3E2723]/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
          {DATA[language].ui.product_detail.back_collection}
        </Link>
      </div>
    );
  }

  const handleOrderSuccess = () => {
    setOrderSuccess(true);
    clearCart(); // Clear cart immediately when order is successful
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC]/20 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {!orderSuccess && (
          <Link 
            to="/products"
            className="inline-flex items-center gap-2 text-[#3E2723] font-medium mb-8 hover:text-[#81C784] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {content.back_product}
          </Link>
        )}

        {!orderSuccess && cart.map((item, index) => (
          <MotionWrapper key={item.id} delay={index * 50}>
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-[#F5F5DC] flex flex-col md:flex-row items-center gap-6 mb-4 relative group">
              <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 border border-[#F5F5DC]">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 w-full">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-lg md:text-xl font-serif text-[#3E2723] pr-8">{item.name}</h2>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="absolute top-4 right-4 md:static text-red-400 hover:text-red-600 transition-colors p-1"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <p className="text-[#81C784] font-medium">{item.price}</p>
                  
                  <div className="flex items-center justify-between md:justify-end gap-6 bg-[#F5F5DC]/50 rounded-lg p-2 md:p-0 md:bg-transparent">
                    <span className="md:hidden text-sm font-medium text-[#3E2723]/70">{language === 'vn' ? 'Số lượng:' : 'Quantity:'}</span>
                    <div className="flex items-center gap-3 bg-[#F5F5DC] rounded-lg p-1">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center bg-white rounded shadow-sm text-[#3E2723] hover:text-[#81C784] transition-colors disabled:opacity-50"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-bold text-[#3E2723]">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-white rounded shadow-sm text-[#3E2723] hover:text-[#81C784] transition-colors disabled:opacity-50"
                        disabled={item.quantity >= 10}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MotionWrapper>
        ))}

        {!orderSuccess && (
          <MotionWrapper delay={200}>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#F5F5DC] mb-8">
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-[#3E2723]">{language === 'vn' ? 'Tổng Thanh Toán:' : 'Total Amount:'}</span>
                <span className="text-2xl font-bold text-[#2E7D32]">{totalAmount.toLocaleString('vi-VN')}₫</span>
              </div>
            </div>
          </MotionWrapper>
        )}

        <MotionWrapper delay={300}>
          <OrderForm onOrderSuccess={handleOrderSuccess} />
        </MotionWrapper>
      </div>
    </div>
  );
};

export default OrderPage;
