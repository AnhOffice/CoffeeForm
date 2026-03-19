import React from 'react';
import { useNavigate } from 'react-router-dom';
import MotionWrapper from './MotionWrapper.tsx';
import { Leaf, Recycle, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { DATA } from '../constants.tsx';

const About: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const content = DATA[language].ui.about;

  return (
    <section id="about" className="py-20 md:py-24" style={{ background: 'linear-gradient(135deg, #F5F5DC 0%, #EFEBE9 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header Section */}
        <MotionWrapper>
          <div className="text-center mb-20 md:mb-32">
            <Quote className="w-16 h-16 mx-auto mb-8" style={{ color: '#2E7D32', opacity: 0.2 }} />
            <p className="text-2xl md:text-5xl font-serif italic mb-8 leading-tight max-w-5xl mx-auto" style={{ fontFamily: "'Merriweather', serif", color: '#2C1810' }}>
              {content.quote}
            </p>
            <div className="flex justify-center items-center gap-4">
              <div className="h-px w-20 bg-[#D7CCC8]"></div>
              <span className="text-[#2E7D32] font-bold tracking-widest uppercase text-sm">{content.philosophy}</span>
              <div className="h-px w-20 bg-[#D7CCC8]"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mt-8 tracking-tight uppercase" style={{ color: '#2C1810', fontFamily: "'Merriweather', serif" }}>
              FROM CUP <span className="text-[#2E7D32]">TO CORNER</span>
            </h1>
          </div>
        </MotionWrapper>

        <div className="space-y-24 md:space-y-32">
          {/* Chapter 1: The Beginning */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <MotionWrapper className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-6 text-[#2C1810]">01. Khởi Nguồn</h3>
              <div className="space-y-6 text-lg leading-relaxed text-[#5D4037] font-light">
                <p>{(content.story || [])[0]}</p>
                <p className="text-xl font-medium text-[#2C1810] italic border-l-4 border-[#2E7D32] pl-6 py-2">
                  {(content.story || [])[1]}
                </p>
                <p>{(content.story || [])[2]}</p>
              </div>
            </MotionWrapper>
            <MotionWrapper className="order-1 lg:order-2" delay={200}>
              <div className="relative">
                <div className="absolute inset-0 bg-[#2E7D32] rounded-[2rem] transform rotate-3 opacity-10"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5]">
                  <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800" alt="Coffee Grounds" className="w-full h-full object-cover" />
                </div>
              </div>
            </MotionWrapper>
          </div>

          {/* Chapter 2: The Craft */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <MotionWrapper className="order-1" delay={200}>
               <div className="relative">
                <div className="absolute inset-0 bg-[#8D6E63] rounded-[2rem] transform -rotate-3 opacity-10"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5]">
                  <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800" alt="Handcrafting" className="w-full h-full object-cover" />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl">
                    <div className="flex items-center gap-4">
                      <Recycle className="w-8 h-8 text-[#2E7D32]" />
                      <div>
                        <h4 className="font-bold text-[#2C1810]">{content.feature1_title}</h4>
                        <p className="text-sm text-[#5D4037]">{content.feature1_desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MotionWrapper>
            <MotionWrapper className="order-2" delay={300}>
              <h3 className="text-2xl font-bold mb-6 text-[#2C1810]">02. Hành Trình Tái Sinh</h3>
              <div className="space-y-6 text-lg leading-relaxed text-[#5D4037] font-light">
                <p>{(content.story || [])[3]}</p>
                <p>{(content.story || [])[4]}</p>
              </div>
            </MotionWrapper>
          </div>

          {/* Chapter 3: The Product */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <MotionWrapper className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-6 text-[#2C1810]">03. Tác Phẩm Ra Đời</h3>
              <div className="space-y-6 text-lg leading-relaxed text-[#5D4037] font-light">
                <p>{(content.story || [])[5]}</p>
                <p>{(content.story || [])[6]}</p>
              </div>
            </MotionWrapper>
            <MotionWrapper className="order-1 lg:order-2" delay={200}>
               <div className="relative">
                <div className="absolute inset-0 bg-[#A1887F] rounded-[2rem] transform rotate-2 opacity-10"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-square">
                  <img src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&q=80&w=800" alt="Finished Product" className="w-full h-full object-cover" />
                  <div className="absolute top-6 right-6 bg-[#2C1810] text-white p-4 rounded-full shadow-lg">
                    <Leaf className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>

           {/* Chapter 4: The Mission */}
           <div className="bg-[#2C1810] rounded-[3rem] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale" />
             </div>
             
             <MotionWrapper className="relative z-10 max-w-3xl mx-auto">
               <Quote className="w-12 h-12 mx-auto mb-8 text-[#FFD54F]" />
               <p className="text-xl md:text-3xl text-[#FDFBF7] font-serif leading-relaxed mb-8 italic">
                 "{(content.story || [])[8]}"
               </p>
               <p className="text-[#D7CCC8] text-lg md:text-xl mb-12">{(content.story || [])[7]}</p>
               
              <button 
                 onClick={() => navigate('/products')}
                 className="bg-[#FFD54F] text-[#2C1810] px-10 py-4 rounded-full font-bold text-lg hover:transform hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,213,79,0.3)]">
                 Khám Phá COFFEE FORM
               </button>
             </MotionWrapper>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;
