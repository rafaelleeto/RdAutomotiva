import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, ChevronDown, Gauge, Shield, Play, RotateCcw } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onExploreServices }) => {
  const [carAnimationKey, setCarAnimationKey] = useState(0);
  const [isPlayingPass, setIsPlayingPass] = useState(true);

  const handleReplayCar = () => {
    setCarAnimationKey((prev) => prev + 1);
    setIsPlayingPass(true);
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 bg-[#06090E]"
    >
      {/* Background Volumetric Blue Studio Light & Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-40"></div>
        <div className="absolute top-0 right-0 w-2/3 h-full car-glow pointer-events-none"></div>
        
        {/* Deep cyan ambient glows */}
        <div className="absolute -top-40 -right-40 w-[650px] h-[650px] bg-[#0284C7]/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-[#16202E]/40 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Header Accent Line & Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[#00A3FF]"></div>
              <span className="text-xs font-semibold tracking-wider text-[#00A3FF] uppercase">
                Estética Automotiva de Alta Precisão
              </span>
            </div>

            {/* Impact Headline */}
            <h1 className="font-display font-bold text-4xl sm:text-6xl xl:text-7xl text-white tracking-tight leading-[1.02] mb-6">
              Seu carro.<br />
              <span className="text-[#00A3FF]">
                Nosso padrão.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed mb-8">
              Correção, proteção e cuidado em cada detalhe para preservar a aparência e valorizar o seu veículo com rigor técnico.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenQuoteModal}
                id="hero-quote-btn"
                className="bg-[#0284C7] hover:bg-[#0EA5E9] text-white px-7 py-3.5 font-semibold text-sm rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={onExploreServices}
                id="hero-services-btn"
                className="border border-[#1E293B] text-slate-200 px-7 py-3.5 font-semibold text-sm rounded hover:bg-[#16202E] hover:text-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Conhecer Serviços</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-6 pt-8 mt-8 border-t border-[#1E293B] w-full max-w-lg">
              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-white flex items-center">
                  100<span className="text-[#00A3FF]">%</span>
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1">Precisão Técnica</div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-white flex items-center">
                  5.0<span className="text-[#00A3FF]">★</span>
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1">Satisfação</div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-white flex items-center">
                  +1.2k
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1">Projetos Entregues</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Cinematic Studio Showcase with Realistic Lighting & Car Motion */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded bg-[#0B1017] p-3 sm:p-4 shadow-xl overflow-hidden border border-[#1E293B]">
              
              {/* Studio Light Beam Header */}
              <div className="relative w-full h-[280px] sm:h-[360px] rounded overflow-hidden bg-[#070A0F] flex items-center justify-center border border-[#1E293B]/80">
                
                {/* Overhead Studio Light Fixture Effect */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A3FF]/70 to-transparent" />

                {/* Studio Backdrop Photo */}
                <img
                  src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80"
                  alt="Estética Automotiva RD Studio - Ambiente de Detalhamento"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-30 mix-blend-luminosity filter contrast-125"
                />

                {/* Ambient Reflection Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06090E] via-transparent to-[#06090E]/80" />

                {/* ANIMATED CAR MOTION PASS */}
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  
                  {/* Moving Car Container */}
                  <motion.div
                    key={carAnimationKey}
                    initial={{ x: '-110%', opacity: 0 }}
                    animate={{
                      x: ['-110%', '0%', '110%'],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 4.8,
                      ease: [0.25, 0.1, 0.25, 1],
                      repeat: Infinity,
                      repeatDelay: 2.2,
                    }}
                    className="relative w-[320px] sm:w-[420px] flex items-center justify-center select-none"
                  >
                    {/* Realistic Silhouette of Supercar */}
                    <div className="relative w-full">
                      <svg
                        viewBox="0 0 500 190"
                        className="w-full h-auto drop-shadow-lg"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <linearGradient id="carBodyPaint" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#334155" />
                            <stop offset="50%" stopColor="#0F172A" />
                            <stop offset="100%" stopColor="#020617" />
                          </linearGradient>
                          <linearGradient id="neonBlueGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#0284C7" stopOpacity="0" />
                            <stop offset="30%" stopColor="#00A3FF" stopOpacity="0.9" />
                            <stop offset="70%" stopColor="#BAE6FD" stopOpacity="1" />
                            <stop offset="100%" stopColor="#00A3FF" stopOpacity="0" />
                          </linearGradient>
                          <linearGradient id="glassReflect" x1="0%" y1="0%" x2="50%" y2="100%">
                            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#0F172A" stopOpacity="0.85" />
                          </linearGradient>
                          <linearGradient id="rimMetal" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#FFFFFF" />
                            <stop offset="50%" stopColor="#64748B" />
                            <stop offset="100%" stopColor="#CBD5E1" />
                          </linearGradient>
                        </defs>

                        {/* Ground Shadow */}
                        <ellipse cx="250" cy="168" rx="210" ry="14" fill="#000000" opacity="0.85" />

                        {/* Car Main Body */}
                        <path
                          d="M 50 145 C 55 130 75 125 105 125 C 130 125 155 110 185 85 C 220 58 310 52 355 78 C 390 100 425 112 455 120 C 475 125 485 135 480 148 C 470 155 450 155 425 155 C 415 135 385 135 375 155 C 260 155 230 155 175 155 C 165 135 135 135 125 155 C 80 155 60 155 50 145 Z"
                          fill="url(#carBodyPaint)"
                          stroke="#334155"
                          strokeWidth="1.5"
                        />

                        {/* Cabin Glass */}
                        <path
                          d="M 188 84 C 215 62 295 56 345 78 C 362 92 385 112 395 118 L 165 118 C 172 104 180 92 188 84 Z"
                          fill="url(#glassReflect)"
                          stroke="#64748B"
                          strokeWidth="1"
                        />
                        <line x1="280" y1="62" x2="275" y2="118" stroke="#16202E" strokeWidth="4" />

                        {/* Reflection Line */}
                        <path
                          d="M 65 132 C 120 120 190 115 280 112 C 370 110 440 122 470 134"
                          stroke="url(#neonBlueGlow)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />

                        {/* Headlight */}
                        <polygon points="460,126 478,132 468,138 452,132" fill="#BAE6FD" />
                        <circle cx="470" cy="132" r="3" fill="#FFFFFF" />

                        {/* Taillight */}
                        <path d="M 52 136 C 50 140 55 142 62 142" stroke="#00A3FF" strokeWidth="2.5" />

                        {/* Aerodynamic Door Line */}
                        <path d="M 230 118 Q 240 142 270 144" stroke="#16202E" strokeWidth="2" fill="none" />
                        <path d="M 350 125 Q 365 140 375 145" stroke="#0F172A" strokeWidth="2" fill="none" />

                        {/* Front Wheel */}
                        <g transform="translate(400, 150)">
                          <circle cx="0" cy="0" r="24" fill="#06090E" stroke="#16202E" strokeWidth="3" />
                          <circle cx="0" cy="0" r="18" fill="#0A0F16" stroke="url(#rimMetal)" strokeWidth="2" />
                          <g className="animate-spin-wheel origin-center">
                            <line x1="-16" y1="0" x2="16" y2="0" stroke="url(#rimMetal)" strokeWidth="2.5" />
                            <line x1="0" y1="-16" x2="0" y2="16" stroke="url(#rimMetal)" strokeWidth="2.5" />
                            <line x1="-11" y1="-11" x2="11" y2="11" stroke="url(#rimMetal)" strokeWidth="2.5" />
                            <line x1="-11" y1="11" x2="11" y2="-11" stroke="url(#rimMetal)" strokeWidth="2.5" />
                            <circle cx="0" cy="0" r="5" fill="#00A3FF" />
                          </g>
                        </g>

                        {/* Rear Wheel */}
                        <g transform="translate(150, 150)">
                          <circle cx="0" cy="0" r="24" fill="#06090E" stroke="#16202E" strokeWidth="3" />
                          <circle cx="0" cy="0" r="18" fill="#0A0F16" stroke="url(#rimMetal)" strokeWidth="2" />
                          <g className="animate-spin-wheel origin-center">
                            <line x1="-16" y1="0" x2="16" y2="0" stroke="url(#rimMetal)" strokeWidth="2.5" />
                            <line x1="0" y1="-16" x2="0" y2="16" stroke="url(#rimMetal)" strokeWidth="2.5" />
                            <line x1="-11" y1="-11" x2="11" y2="11" stroke="url(#rimMetal)" strokeWidth="2.5" />
                            <line x1="-11" y1="11" x2="11" y2="-11" stroke="url(#rimMetal)" strokeWidth="2.5" />
                            <circle cx="0" cy="0" r="5" fill="#00A3FF" />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </motion.div>
                </div>

                {/* Studio Status Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-auto">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#06090E]/90 border border-[#1E293B]">
                    <span className="w-2 h-2 rounded-full bg-[#00A3FF]" />
                    <span className="text-xs font-medium text-slate-200">Iluminação Técnica Ativa</span>
                  </div>
                  
                  <button
                    onClick={handleReplayCar}
                    title="Repetir Animação Automotiva"
                    className="p-2 rounded bg-[#0A0F16] hover:bg-[#16202E] border border-[#1E293B] text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <RotateCcw size={14} />
                  </button>
                </div>
              </div>

              {/* Bottom Feature Grid */}
              <div className="mt-3 grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded bg-[#070B10] border border-[#1E293B] flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#0A0F16] border border-[#1E293B] flex items-center justify-center text-[#00A3FF] shrink-0">
                    <Shield size={16} />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-white">Ambiente Climatizado</div>
                    <div className="text-xs text-slate-400">Zero poeira e partículas</div>
                  </div>
                </div>

                <div className="p-3 rounded bg-[#070B10] border border-[#1E293B] flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#0A0F16] border border-[#1E293B] flex items-center justify-center text-[#00A3FF] shrink-0">
                    <Gauge size={16} />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-white">Medição Micrométrica</div>
                    <div className="text-xs text-slate-400">Espessura do verniz</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Prompt Indicator (smooth, no bounce) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-xs font-medium text-slate-400 mb-1">Explorar</span>
        <ChevronDown size={16} className="text-slate-400" />
      </div>
    </section>
  );
};
