import React from 'react';
import MotionWrapper from './MotionWrapper.tsx';
import { ArrowDown, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { DATA } from '../constants.tsx';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const content = DATA[language].ui.hero;

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=2560")',
        }}
      >
        {/* Dynamic Gradient Overlay */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(46, 125, 50, 0.4) 0%, rgba(62, 39, 35, 0.6) 100%)'
        }} />
        
        {/* Animated Particles */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
              style={{
                top: `${20 + i * 15}%`,
                left: `${15 + i * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 text-center">
        <MotionWrapper>
          {/* Decorative Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 backdrop-blur-md"
            style={{ 
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
            <Sparkles className="w-4 h-4 text-[#FFD54F]" />
            <span className="text-sm md:text-base tracking-[0.25em] uppercase font-semibold">
              {content.subtitle}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-8 font-bold leading-tight whitespace-pre-line text-center mx-auto tracking-wide"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
            }}>
            {content.title}
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl mb-12 font-light leading-relaxed"
            style={{ color: 'rgba(253, 251, 247, 0.95)' }}>
            {content.description}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12">
            <button 
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 rounded-full text-sm tracking-widest uppercase font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[200px]"
              style={{
                background: 'linear-gradient(135deg, #66BB6A, #2E7D32)',
                color: 'white'
              }}
            >
              <span className="relative">{content.cta_collection}</span>
            </button>
            <button 
              onClick={scrollToAbout}
              className="px-8 py-4 rounded-full border-2 text-sm tracking-widest uppercase font-bold transition-all duration-300 hover:bg-white/10 backdrop-blur-sm min-w-[200px]"
              style={{ borderColor: 'rgba(255, 255, 255, 0.8)', color: 'white' }}
            >
              {content.cta_story}
            </button>
          </div>

          {/* Stats - Floating Cards */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { value: '5T+', label: 'Recycled' },
              { value: '100%', label: 'Natural' },
              { value: '∞', label: 'Sustainable' }
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="px-6 py-3 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-110"
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}
              >
                <div className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-wider" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </MotionWrapper>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToAbout}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-white text-xs uppercase tracking-wider">Scroll</span>
          <ArrowDown className="text-white w-6 h-6 opacity-80" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FDFBF7] to-transparent" />
    </div>
  );
};

export default Hero;
