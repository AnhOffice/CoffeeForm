import React from 'react';
import MotionWrapper from './MotionWrapper.tsx';
import { DATA } from '../constants.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { Linkedin } from 'lucide-react';

const Team: React.FC = () => {
  const { language } = useLanguage();
  const content = DATA[language].ui.team;
  const teamMembers = DATA[language].team;

  return (
    <section id="team" className="py-20 md:py-24" style={{ background: 'linear-gradient(135deg, #2C1810 0%, #3E2723 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <MotionWrapper>
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-4"
              style={{
                background: 'rgba(102, 187, 106, 0.2)',
                color: '#66BB6A'
              }}>
              {content.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Merriweather', serif", color: '#FDFBF7' }}>
              {content.title}
            </h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: '#D7CCC8' }}>
              {content.desc}
            </p>
          </div>
        </MotionWrapper>

        {/* First Row: 3 members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {teamMembers.slice(0, 3).map((member, idx) => (
            <MotionWrapper key={member.id} delay={idx * 150}>
              <div className="group text-center p-6 rounded-2xl transition-all duration-500 hover:shadow-2xl"
                style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full transition-all duration-500 group-hover:opacity-60 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, #2E7D32, #66BB6A)',
                      opacity: 0.3
                    }} />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 transition-all duration-500 group-hover:border-opacity-100"
                    style={{ borderColor: 'rgba(102, 187, 106, 0.3)' }}>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Merriweather', serif", color: '#FDFBF7' }}>
                  {member.name}
                </h3>
                <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide mb-4"
                  style={{
                    background: 'rgba(102, 187, 106, 0.2)',
                    color: '#66BB6A'
                  }}>
                  {member.role}
                </span>
                <p className="text-sm leading-relaxed max-w-xs mx-auto mb-4" style={{ color: '#D7CCC8' }}>
                  {member.bio}
                </p>
                
                <button className="w-10 h-10 rounded-full flex items-center justify-center mx-auto transition-all duration-300 hover:scale-110"
                  style={{ background: 'rgba(102, 187, 106, 0.2)' }}>
                  <Linkedin className="w-5 h-5" style={{ color: '#66BB6A' }} />
                </button>
              </div>
            </MotionWrapper>
          ))}
        </div>

        {/* Second Row: 2 members (centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.slice(3, 5).map((member, idx) => (
            <MotionWrapper key={member.id} delay={(idx + 3) * 150}>
              <div className="group text-center p-6 rounded-2xl transition-all duration-500 hover:shadow-2xl"
                style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full transition-all duration-500 group-hover:opacity-60 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, #2E7D32, #66BB6A)',
                      opacity: 0.3
                    }} />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 transition-all duration-500 group-hover:border-opacity-100"
                    style={{ borderColor: 'rgba(102, 187, 106, 0.3)' }}>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Merriweather', serif", color: '#FDFBF7' }}>
                  {member.name}
                </h3>
                <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide mb-4"
                  style={{
                    background: 'rgba(102, 187, 106, 0.2)',
                    color: '#66BB6A'
                  }}>
                  {member.role}
                </span>
                <p className="text-sm leading-relaxed max-w-xs mx-auto mb-4" style={{ color: '#D7CCC8' }}>
                  {member.bio}
                </p>
                
                <button className="w-10 h-10 rounded-full flex items-center justify-center mx-auto transition-all duration-300 hover:scale-110"
                  style={{ background: 'rgba(102, 187, 106, 0.2)' }}>
                  <Linkedin className="w-5 h-5" style={{ color: '#66BB6A' }} />
                </button>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
