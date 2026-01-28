import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Star, Shield, Truck } from 'lucide-react';
import { DATA } from '../constants.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useCart } from '../context/CartContext.tsx';
import { ShoppingCart } from 'lucide-react';
import MotionWrapper from './MotionWrapper.tsx';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const { addToCart } = useCart();
  const products = DATA[language].products;
  const content = DATA[language].ui.product_detail;
  
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id, language]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F5DC]/20">
        <h2 className="text-3xl font-serif text-[#3E2723] mb-4">{content.not_found}</h2>
        <Link to="/" className="text-[#3E2723] font-bold underline hover:text-[#81C784]">
          {content.back_home}
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5DC]/20 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#3E2723] font-medium mb-8 hover:text-[#81C784] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {content.back_collection}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Product Image */}
          <MotionWrapper>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-xs uppercase tracking-widest font-bold text-[#3E2723] rounded-full shadow-sm">
                  {product.tag}
                </span>
              </div>
            </div>
          </MotionWrapper>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <MotionWrapper delay={200}>
              <h1 className="text-4xl md:text-5xl font-serif text-[#3E2723] mb-4">
                {product.name}
              </h1>
              <p className="text-3xl text-[#81C784] font-medium mb-6">
                {product.price}
              </p>
              
              <div className="flex items-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#3E2723] text-[#3E2723]" />
                ))}
                <span className="ml-2 text-sm text-[#3E2723]/60">(128 {content.reviews})</span>
              </div>

              <p className="text-lg text-[#3E2723]/70 leading-relaxed mb-8">
                {product.description}
              </p>

              <div className="grid grid-cols-2 ml-1 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-[#81C784]" />
                  <span className="text-sm font-medium text-[#3E2723]">{content.warranty}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-[#81C784]" />
                  <span className="text-sm font-medium text-[#3E2723]">{content.shipping}</span>
                </div>
              </div>

              <div className="h-px bg-[#3E2723]/10 w-full mb-8" />
              
              {/* Quantity Selector */}
              <div className="flex items-center gap-6 mb-8">
                <span className="font-bold text-[#3E2723] text-lg">{content.quantity}:</span>
                <div className="flex items-center bg-[#F5F5DC] rounded-xl border border-[#D7CCC8] p-1 shadow-inner">
                  <button 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center text-[#3E2723] hover:bg-white rounded-lg transition-colors disabled:opacity-30 disabled:hover:bg-transparent"
                    disabled={quantity <= 1}
                  >
                    <span className="text-xl font-bold">-</span>
                  </button>
                  <span className="w-12 text-center font-bold text-[#3E2723] text-xl">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(q => Math.min(10, q + 1))}
                    className="w-10 h-10 flex items-center justify-center text-[#3E2723] hover:bg-white rounded-lg transition-colors disabled:opacity-30 disabled:hover:bg-transparent"
                    disabled={quantity >= 10}
                  >
                    <span className="text-xl font-bold">+</span>
                  </button>
                </div>
              </div>

              {/* Order Button Section */}
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    addToCart(product, quantity);
                    setQuantity(1);
                  }}
                  className="flex-1 py-4 bg-white border-2 border-[#3E2723] text-[#3E2723] rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#F5F5DC] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>{content.add_to_cart}</span>
                </button>

                <Link 
                  to="/order/cart"
                  onClick={() => addToCart(product, quantity)}
                  className="flex-1 py-4 bg-[#3E2723] text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#3E2723]/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>{content.order_now}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

            </MotionWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
