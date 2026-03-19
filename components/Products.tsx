import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MotionWrapper from './MotionWrapper.tsx';
import { DATA } from '../constants.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { ArrowRight, ShoppingCart } from 'lucide-react';

const Products: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const content = DATA[language].ui.products;
  const products = DATA[language].products;

  return (
    <section id="products" className="py-20 md:py-24" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <MotionWrapper>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Merriweather', serif", color: '#2C1810' }}>
              {content.title}
            </h2>
            <p className="mt-4 max-w-md text-lg" style={{ color: '#6D4C41' }}>
              {content.desc}
            </p>
          </MotionWrapper>
          <MotionWrapper delay={200}>
            <button 
              onClick={() => navigate('/products')}
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg"
              style={{
                color: '#2E7D32',
                border: '2px solid #2E7D32'
              }}>
              {content.view_all}
              <ArrowRight className="w-4 h-4" />
            </button>
          </MotionWrapper>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <MotionWrapper key={product.id} delay={idx * 150}>
              <Link to={`/product/${product.id}`}>
                <div className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl"
                  style={{ background: 'linear-gradient(135deg, #FDFBF7 0%, #F5F5DC 100%)' }}>
                  
                  {/* Image Container */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Tag Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 text-xs uppercase tracking-wider font-bold rounded-full shadow-lg"
                        style={{
                          background: 'rgba(255, 255, 255, 0.95)',
                          color: '#2E7D32'
                        }}>
                        {product.tag}
                      </span>
                    </div>

                    {/* Hover Action */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <button className="w-12 h-12 rounded-full flex items-center justify-center shadow-xl"
                        style={{
                          background: 'linear-gradient(135deg, #2E7D32, #66BB6A)'
                        }}>
                        <ShoppingCart className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold" style={{ fontFamily: "'Merriweather', serif", color: '#2C1810' }}>
                        {product.name}
                      </h3>
                      <span className="font-bold text-lg" style={{ color: '#2E7D32' }}>
                        {product.price}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: '#6D4C41' }}>
                      {product.description}
                    </p>
                    <button className="flex items-center gap-2 text-sm font-semibold transition-colors duration-300"
                      style={{ color: '#2E7D32' }}>
                      {content.buy_now}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </Link>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
