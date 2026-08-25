import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ExternalLink, Clock, Phone, Navigation, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-24 bg-[#05080D] relative overflow-hidden border-t border-[#1B2735]/50">
      {/* Background ambient lighting and pattern */}
      <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#3B82F6]"></div>
            <span className="text-[12px] font-bold tracking-[0.4em] text-[#3B82F6] uppercase">
              Onde Estamos
            </span>
            <div className="w-8 h-[1px] bg-[#3B82F6]"></div>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight uppercase italic">
            VENHA CONHECER<br />
            <span className="text-[#3B82F6] text-glow">A RD STUDIO.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#CBD5E1] font-light">
            Ambiente exclusivo projetado com iluminação técnica e segurança monitorada para o seu veículo.
          </p>
        </div>

        {/* Studio Info & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-sm glass border border-[#1B2735] shadow-2xl">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3B82F6] block mb-1">
                  Estúdio Central
                </span>
                <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight italic">
                  Estrutura Premium
                </h3>
                <p className="text-xs sm:text-sm text-[#CBD5E1] mt-2 font-light leading-relaxed">
                  Recebemos seu veículo com agendamento prévio para garantir total exclusividade de atendimento e foco na perfeição.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3.5 p-3.5 rounded-sm bg-[#05080D]/80 border border-[#1B2735]">
                  <div className="w-8 h-8 rounded-sm bg-[#111923] border border-[#1B2735] flex items-center justify-center text-[#3B82F6] shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-white uppercase tracking-wider">Localização</div>
                    <div className="text-xs text-[#94A3B8] mt-0.5 font-light">{SITE_CONFIG.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-sm bg-[#05080D]/80 border border-[#1B2735]">
                  <div className="w-8 h-8 rounded-sm bg-[#111923] border border-[#1B2735] flex items-center justify-center text-[#3B82F6] shrink-0">
                    <Clock size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-white uppercase tracking-wider">Horário de Atendimento</div>
                    <div className="text-xs text-[#94A3B8] mt-0.5 font-light">{SITE_CONFIG.openingHours}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-sm bg-[#05080D]/80 border border-[#1B2735]">
                  <div className="w-8 h-8 rounded-sm bg-[#111923] border border-[#1B2735] flex items-center justify-center text-[#3B82F6] shrink-0">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-white uppercase tracking-wider">Segurança 24h</div>
                    <div className="text-xs text-[#94A3B8] mt-0.5 font-light">Estacionamento monitorado e seguro individual</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Action Button */}
            <div className="pt-8 mt-6 border-t border-[#1B2735]/60">
              <a
                href={SITE_CONFIG.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                id="open-google-maps-btn"
                className="w-full py-4 rounded-sm bg-[#2563EB] hover:bg-[#3B82F6] text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 group"
              >
                <span>ABRIR NO GOOGLE MAPS</span>
                <ExternalLink size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Stylized Visual Map Display */}
          <div className="lg:col-span-7 rounded-sm overflow-hidden bg-[#0B111A] border border-[#1B2735] relative shadow-2xl min-h-[380px] flex flex-col">
            
            {/* Visual Dark Map Canvas Simulation & Pin */}
            <div className="relative flex-grow w-full h-full min-h-[320px] bg-[#070C13] overflow-hidden flex items-center justify-center">
              
              {/* Dark Map Vector Grid Lines */}
              <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
              
              {/* Abstract Stylized Streets Layout (SVG) */}
              <svg className="absolute inset-0 w-full h-full opacity-35" preserveAspectRatio="none" viewBox="0 0 800 500">
                <path d="M-50,250 Q200,220 400,250 T850,260" stroke="#1E293B" strokeWidth="18" fill="none" />
                <path d="M-50,250 Q200,220 400,250 T850,260" stroke="#2563EB" strokeWidth="2" fill="none" strokeDasharray="6,6" />
                <path d="M300,-50 L450,550" stroke="#1E293B" strokeWidth="14" fill="none" />
                <path d="M100,-50 L250,550" stroke="#111923" strokeWidth="10" fill="none" />
                <path d="M600,-50 L520,550" stroke="#111923" strokeWidth="10" fill="none" />
                <circle cx="400" cy="250" r="90" fill="#2563EB" opacity="0.08" />
                <circle cx="400" cy="250" r="140" fill="#2563EB" opacity="0.04" />
              </svg>

              {/* Glowing Pulse Studio Location Pin */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-[#2563EB]/20 animate-ping absolute inset-0" />
                  <div className="w-14 h-14 rounded-sm bg-[#0B111A] border-2 border-[#3B82F6] flex items-center justify-center text-white shadow-[0_0_25px_#3B82F6] relative z-10">
                    <Navigation size={22} className="text-[#93C5FD] transform -rotate-45" />
                  </div>
                </div>

                <div className="mt-3 px-4 py-2 rounded-sm bg-[#0B111A]/95 border border-[#1B2735] backdrop-blur-md text-center shadow-xl">
                  <div className="font-display font-black text-xs text-white uppercase tracking-wider italic">
                    RD Studio Automotivo
                  </div>
                  <div className="text-[10px] text-[#3B82F6] font-semibold tracking-wider">
                    DESTINO PRINCIPAL
                  </div>
                </div>
              </div>

              {/* Map Floating Actions */}
              <div className="absolute bottom-4 right-4 z-10">
                <a
                  href={SITE_CONFIG.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-sm bg-[#0B111A]/95 hover:bg-[#111923] border border-[#1B2735] text-[10px] font-bold uppercase tracking-wider text-[#CBD5E1] hover:text-white transition-all flex items-center gap-1.5 backdrop-blur-md"
                >
                  <MapPin size={13} className="text-[#3B82F6]" />
                  <span>Navegar até aqui</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

