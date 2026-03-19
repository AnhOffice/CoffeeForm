import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useTheme } from '../context/ThemeContext.tsx';
import { DATA } from '../constants.tsx';
import MotionWrapper from './MotionWrapper.tsx';
import { ShoppingBag, ArrowLeft, Filter, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AllProducts: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const content = DATA[language].ui.all_products;
  const productContent = DATA[language].ui.products;
  const products = DATA[language].products;
  
  // Use real products directly
  const allProducts = products;

  const [filter, setFilter] = useState('all');
  const [activeProducts, setActiveProducts] = useState(allProducts);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20 transition-colors duration-500" 
      style={{ background: theme === 'dark' ? '#1E1E1E' : '#FDFBF7' }}>
      {/* Header */}
      <div className="relative py-20 px-6 bg-[#2C1810] text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <img 
               src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=1600" 
               alt="Background" 
               className="w-full h-full object-cover"
             />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <button 
            onClick={() => navigate('/')}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <span className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-white/10 text-[#81C784] backdrop-blur-md">
            COFFEE FORM
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#FDFBF7] mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
            {content.title}
          </h1>
          <p className="text-[#D7CCC8] text-lg max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto custom-scrollbar">
            {[
              { id: 'all', label: content.filter_all },
              { id: 'new', label: content.filter_new },
              { id: 'best', label: content.filter_best }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 rounded-full whitespace-nowrap text-sm font-bold transition-all duration-300 ${
                  filter === cat.id
                    ? 'bg-[#2E7D32] text-white shadow-lg'
                    : theme === 'dark' 
                      ? 'bg-[#2C2C2C] text-[#E0E0E0] hover:bg-[#3E3E3E] border border-[#444]'
                      : 'bg-white text-[#6D4C41] hover:bg-[#E8F5E9] border border-[#D7CCC8]/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search (Visual Only) */}
          <div className="relative w-full md:w-64">
             <input 
               type="text" 
               placeholder="Search..." 
               className="w-full pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:border-[#2E7D32] transition-colors"
               style={{
                 background: theme === 'dark' ? '#2C2C2C' : '#FFFFFF',
                 borderColor: theme === 'dark' ? '#444' : 'rgba(215, 204, 200, 0.5)',
                 color: theme === 'dark' ? '#FFF' : '#000'
               }}
             />
             <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2" 
               style={{ color: theme === 'dark' ? '#AAA' : '#8D6E63' }} />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeProducts.map((product, index) => (
            <MotionWrapper key={product.id} delay={index * 50}>
              <div 
                onClick={() => navigate(`/product/${product.id.split('-')[0]}`)}
                className="group rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 border flex flex-col h-full"
                style={{
                  background: theme === 'dark' ? '#252525' : '#FFFFFF',
                  borderColor: theme === 'dark' ? '#333' : 'rgba(215, 204, 200, 0.2)'
                }}
              >
                <div className="relative pt-[100%] overflow-hidden bg-[#F5F5F5]">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {product.tag && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-[#2E7D32] shadow-sm">
                        {product.tag}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="px-6 py-3 bg-white text-[#2C1810] rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                      {productContent.buy_now}
                    </button>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold group-hover:text-[#2E7D32] transition-colors line-clamp-1"
                      style={{ color: theme === 'dark' ? '#E0E0E0' : '#2C1810' }}>
                      {product.name}
                    </h3>
                    <span className="font-bold whitespace-nowrap ml-2" style={{ color: '#2E7D32' }}>
                      {product.price}
                    </span>
                  </div>
                  <p className="text-sm mb-4 line-clamp-2 flex-grow"
                    style={{ color: theme === 'dark' ? '#AAA' : '#6D4C41' }}>
                    {product.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider pt-4 border-t"
                    style={{ 
                      color: theme === 'dark' ? '#888' : '#8D6E63',
                      borderColor: theme === 'dark' ? '#333' : '#EFEBE9'
                    }}>
                    <ShoppingBag className="w-4 h-4" />
                    <span>In Stock</span>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 rounded-full border-2 font-bold hover:bg-[#2C1810] hover:text-white transition-all duration-300"
            style={{
              borderColor: theme === 'dark' ? '#E0E0E0' : '#2C1810',
              color: theme === 'dark' ? '#E0E0E0' : '#2C1810'
            }}>
            {content.load_more}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
