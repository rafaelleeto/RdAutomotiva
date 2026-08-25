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
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 bg-[#0B111A]"
    >
      {/* Background Volumetric Blue Studio Light & Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-40"></div>
        <div className="absolute top-0 right-0 w-2/3 h-full car-glow pointer-events-none"></div>
        
        {/* Deep blue ambient glows */}
        <div className="absolute -top-40 -right-40 w-[650px] h-[650px] bg-[#2563EB]/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-[#1B2735]/40 rounded-full blur-[120px]" />
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
              <div className="w-8 h-[1px] bg-[#3B82F6]"></div>
              <span className="text-[12px] font-bold tracking-[0.4em] text-[#3B82F6] uppercase">
                Estética Automotiva Premium
              </span>
            </div>

            {/* Impact Headline */}
            <h1 className="font-display font-black text-4xl sm:text-6xl xl:text-7xl text-white tracking-tighter leading-[0.88] mb-8 italic">
              SEU CARRO.<br />
              <span className="text-[#3B82F6] text-glow">
                NOSSO PADRÃO.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#CBD5E1] text-base sm:text-lg max-w-lg leading-relaxed mb-10 font-light">
              Correção, proteção e cuidado em cada detalhe para preservar a aparência e valorizar o seu veículo com tecnologias de ponta.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenQuoteModal}
                id="hero-quote-btn"
                className="bg-white text-[#0B111A] px-8 py-4 font-bold text-xs tracking-widest uppercase hover:bg-[#CBD5E1] transition-all rounded-sm shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreServices}
                id="hero-services-btn"
                className="border border-[#1B2735] text-white px-8 py-4 font-bold text-xs tracking-widest uppercase hover:bg-[#1B2735] transition-all glass rounded-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Conhecer Serviços</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-[#1B2735]/60 w-full max-w-lg">
              <div>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-white flex items-center">
                  100<span className="text-[#3B82F6]">%</span>
                </div>
                <div className="text-xs text-[#94A3B8] font-medium mt-1 uppercase tracking-wider">Precisão Técnica</div>
              </div>
              <div>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-white flex items-center">
                  5.0<span className="text-[#3B82F6]">★</span>
                </div>
                <div className="text-xs text-[#94A3B8] font-medium mt-1 uppercase tracking-wider">Satisfação</div>
              </div>
              <div>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-white flex items-center">
                  +1.2k
                </div>
                <div className="text-xs text-[#94A3B8] font-medium mt-1 uppercase tracking-wider">Projetos Entregues</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Cinematic Studio Showcase with Realistic Lighting & Car Motion */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm glass p-3 sm:p-5 shadow-2xl overflow-hidden group border border-[#1B2735] hover:border-[#3B82F6]/50 transition-all">
              
              {/* Studio Light Beam Header */}
              <div className="relative w-full h-[280px] sm:h-[360px] rounded-sm overflow-hidden bg-[#070C13] flex items-center justify-center border border-[#1B2735]/60">
                
                {/* Overhead Studio Light Fixture Effect */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#60A5FA] to-transparent shadow-[0_0_20px_#3B82F6]" />
                <div className="absolute top-2 left-1/4 right-1/4 h-1 bg-[#3B82F6]/60 rounded-full blur-[2px]" />

                {/* Studio Backdrop Photo */}
                <img
                  src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80"
                  alt="Estética Automotiva RD Studio - Ambiente de Detalhamento"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-35 mix-blend-luminosity filter contrast-125"
                />

                {/* Ambient Blue Reflection Tint Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B111A] via-transparent to-[#05080D]/80" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#05080D]/90 via-transparent to-[#05080D]/80" />

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
                    {/* Realistic Silhouette & Highlights of Supercar */}
                    <div className="relative w-full">
                      
                      {/* Car Speed Light Trail / Reflection */}
                      <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-48 h-6 bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent blur-md pointer-events-none" />

                      {/* Realistic Car Body SVG Rendering with Metallic Shaders */}
                      <svg
                        viewBox="0 0 500 190"
                        className="w-full h-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)]"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          {/* Body Metallic Gradient */}
                          <linearGradient id="carBodyPaint" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1E293B" />
                            <stop offset="35%" stopColor="#0F172A" />
                            <stop offset="60%" stopColor="#1B2735" />
                            <stop offset="100%" stopColor="#0B111A" />
                          </linearGradient>

                          {/* Blue Studio Neon Light Line */}
                          <linearGradient id="neonBlueGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0" />
                            <stop offset="30%" stopColor="#3B82F6" stopOpacity="0.9" />
                            <stop offset="70%" stopColor="#93C5FD" stopOpacity="1" />
                            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                          </linearGradient>

                          {/* Glass Reflection */}
                          <linearGradient id="glassReflect" x1="0%" y1="0%" x2="50%" y2="100%">
                            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.35" />
                            <stop offset="100%" stopColor="#0F172A" stopOpacity="0.8" />
                          </linearGradient>

                          {/* Rim Metallic Gradient */}
                          <linearGradient id="rimMetal" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#E2E8F0" />
                            <stop offset="50%" stopColor="#475569" />
                            <stop offset="100%" stopColor="#94A3B8" />
                          </linearGradient>
                        </defs>

                        {/* Ground Shadow */}
                        <ellipse cx="250" cy="168" rx="210" ry="14" fill="#000000" opacity="0.85" />
                        <ellipse cx="250" cy="168" rx="170" ry="6" fill="#1D4ED8" opacity="0.3" filter="blur(4px)" />

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
                        {/* Glass Partition Pillar */}
                        <line x1="280" y1="62" x2="275" y2="118" stroke="#1E293B" strokeWidth="4" />

                        {/* Dynamic Neon Reflection Line on Car Shoulder */}
                        <path
                          d="M 65 132 C 120 120 190 115 280 112 C 370 110 440 122 470 134"
                          stroke="url(#neonBlueGlow)"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          filter="drop-shadow(0 0 6px #3B82F6)"
                        />

                        {/* Headlight / Daytime Running LED */}
                        <polygon points="460,126 478,132 468,138 452,132" fill="#93C5FD" />
                        <circle cx="470" cy="132" r="3" fill="#FFFFFF" filter="drop-shadow(0 0 8px #60A5FA)" />
                        
                        {/* Headlight beam project */}
                        <polygon points="475,130 520,110 520,165 475,138" fill="url(#neonBlueGlow)" opacity="0.35" />

                        {/* Taillight LED */}
                        <path d="M 52 136 C 50 140 55 142 62 142" stroke="#3B82F6" strokeWidth="2.5" />

                        {/* Aerodynamic Door Line & Air Scoop */}
                        <path d="M 230 118 Q 240 142 270 144" stroke="#1E293B" strokeWidth="2" fill="none" />
                        <path d="M 350 125 Q 365 140 375 145" stroke="#0F172A" strokeWidth="2" fill="none" />

                        {/* Front Wheel Assembly with Spinning Motion Indicator */}
                        <g transform="translate(400, 150)">
                          <circle cx="0" cy="0" r="24" fill="#05080D" stroke="#1E293B" strokeWidth="3" />
                          <circle cx="0" cy="0" r="18" fill="#111923" stroke="url(#rimMetal)" strokeWidth="2" />
                          {/* Rotating Rim Spokes */}
                          <g className="animate-spin-wheel origin-center">
                            <line x1="-16" y1="0" x2="16" y2="0" stroke="url(#rimMetal)" strokeWidth="2.5" />
                            <line x1="0" y1="-16" x2="0" y2="16" stroke="url(#rimMetal)" strokeWidth="2.5" />
                            <line x1="-11" y1="-11" x2="11" y2="11" stroke="url(#rimMetal)" strokeWidth="2.5" />
                            <line x1="-11" y1="11" x2="11" y2="-11" stroke="url(#rimMetal)" strokeWidth="2.5" />
                            <circle cx="0" cy="0" r="5" fill="#3B82F6" />
                          </g>
                          {/* Brake Caliper (Electric Blue) */}
                          <path d="M -12 -12 A 16 16 0 0 1 -2 -16" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" />
                        </g>

                        {/* Rear Wheel Assembly */}
                        <g transform="translate(150, 150)">
                          <circle cx="0" cy="0" r="24" fill="#05080D" stroke="#1E293B" strokeWidth="3" />
                          <circle cx="0" cy="0" r="18" fill="#111923" stroke="url(#rimMetal)" strokeWidth="2" />
                          <g className="animate-spin-wheel origin-center">
                            <line x1="-16" y1="0" x2="16" y2="0" stroke="url(#rimMetal)" strokeWidth="2.5" />
                            <line x1="0" y1="-16" x2="0" y2="16" stroke="url(#rimMetal)" strokeWidth="2.5" />
                            <line x1="-11" y1="-11" x2="11" y2="11" stroke="url(#rimMetal)" strokeWidth="2.5" />
                            <line x1="-11" y1="11" x2="11" y2="-11" stroke="url(#rimMetal)" strokeWidth="2.5" />
                            <circle cx="0" cy="0" r="5" fill="#3B82F6" />
                          </g>
                          <path d="M -12 -12 A 16 16 0 0 1 -2 -16" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" />
                        </g>
                      </svg>
                    </div>
                  </motion.div>
                </div>

                {/* Floating Studio Status Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-auto">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#0B111A]/90 border border-[#1B2735] backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-ping" />
                    <span className="text-[11px] font-semibold text-[#CBD5E1]">Iluminação Técnica Ativa</span>
                  </div>
                  
                  <button
                    onClick={handleReplayCar}
                    title="Repetir Animação Automotiva"
                    className="p-2 rounded-sm bg-[#111923]/90 hover:bg-[#1B2735] border border-[#1B2735] text-[#93C5FD] transition-all cursor-pointer"
                  >
                    <RotateCcw size={14} />
                  </button>
                </div>
              </div>

              {/* Bottom Feature Pill Grid */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="p-3 rounded-sm bg-[#0B111A]/80 border border-[#1B2735] flex items-center gap-3 hover:border-[#3B82F6]/40 transition-all">
                  <div className="w-8 h-8 rounded-sm bg-[#111923] border border-[#1B2735] flex items-center justify-center text-[#3B82F6]">
                    <Shield size={16} />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white uppercase tracking-wider">Ambiente Climatizado</div>
                    <div className="text-[11px] text-[#94A3B8]">Zero poeira & partículas</div>
                  </div>
                </div>

                <div className="p-3 rounded-sm bg-[#0B111A]/80 border border-[#1B2735] flex items-center gap-3 hover:border-[#3B82F6]/40 transition-all">
                  <div className="w-8 h-8 rounded-sm bg-[#111923] border border-[#1B2735] flex items-center justify-center text-[#3B82F6]">
                    <Gauge size={16} />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white uppercase tracking-wider">Medição Micrométrica</div>
                    <div className="text-[11px] text-[#94A3B8]">Espessura do verniz</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Prompt Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#94A3B8] mb-1">Role para explorar</span>
        <ChevronDown size={16} className="text-[#3B82F6] animate-bounce" />
      </div>
    </section>
  );
};
