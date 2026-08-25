import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ExternalLink, Clock, Phone, Navigation, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-24 bg-[#0A0F16] relative overflow-hidden border-t border-[#16202E]/60">
      <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#00A3FF]"></div>
            <span className="text-xs font-semibold tracking-wider text-[#00A3FF] uppercase">
              Onde Estamos
            </span>
            <div className="w-8 h-[2px] bg-[#00A3FF]"></div>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Venha conhecer <span className="text-[#00A3FF]">a RD Studio.</span>
          </h2>

          <p className="mt-4 text-base text-slate-300 max-w-xl mx-auto">
            Ambiente exclusivo projetado com iluminação técnica e segurança monitorada para o seu veículo.
          </p>
        </div>

        {/* Studio Info & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded bg-[#0B1017] border border-[#1E293B] shadow-xl">
            <div className="space-y-6">
              <div>
                <h3 className="font-display font-bold text-xl text-white">
                  Estrutura Premium
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Recebemos seu veículo com agendamento prévio para garantir total exclusividade de atendimento e foco na perfeição.
                </p>
              </div>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3.5 p-3.5 rounded bg-[#070B10] border border-[#1E293B]">
                  <div className="w-8 h-8 rounded bg-[#0A0F16] border border-[#1E293B] flex items-center justify-center text-[#00A3FF] shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Localização</div>
                    <div className="text-xs text-slate-300 mt-0.5">{SITE_CONFIG.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded bg-[#070B10] border border-[#1E293B]">
                  <div className="w-8 h-8 rounded bg-[#0A0F16] border border-[#1E293B] flex items-center justify-center text-[#00A3FF] shrink-0">
                    <Clock size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Horário de Atendimento</div>
                    <div className="text-xs text-slate-300 mt-0.5">{SITE_CONFIG.openingHours}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded bg-[#070B10] border border-[#1E293B]">
                  <div className="w-8 h-8 rounded bg-[#0A0F16] border border-[#1E293B] flex items-center justify-center text-[#00A3FF] shrink-0">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Segurança 24h</div>
                    <div className="text-xs text-slate-300 mt-0.5">Estacionamento monitorado e seguro individual</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Action Button */}
            <div className="pt-6 mt-6 border-t border-[#1E293B]">
              <a
                href={SITE_CONFIG.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                id="open-google-maps-btn"
                className="w-full py-3.5 rounded bg-[#0284C7] hover:bg-[#0EA5E9] text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Abrir no Google Maps</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>

          {/* Stylized Visual Map Display */}
          <div className="lg:col-span-7 rounded overflow-hidden bg-[#070A0F] border border-[#1E293B] relative shadow-xl min-h-[360px] flex flex-col">
            
            {/* Visual Dark Map Canvas Simulation & Pin */}
            <div className="relative flex-grow w-full h-full min-h-[320px] bg-[#070A0F] overflow-hidden flex items-center justify-center">
              
              {/* Dark Map Vector Grid Lines */}
              <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
              
              {/* Abstract Streets Layout */}
              <svg className="absolute inset-0 w-full h-full opacity-35" preserveAspectRatio="none" viewBox="0 0 800 500">
                <path d="M-50,250 Q200,220 400,250 T850,260" stroke="#1E293B" strokeWidth="18" fill="none" />
                <path d="M-50,250 Q200,220 400,250 T850,260" stroke="#00A3FF" strokeWidth="2" fill="none" strokeDasharray="6,6" />
                <path d="M300,-50 L450,550" stroke="#1E293B" strokeWidth="14" fill="none" />
                <path d="M100,-50 L250,550" stroke="#0A0F16" strokeWidth="10" fill="none" />
                <path d="M600,-50 L520,550" stroke="#0A0F16" strokeWidth="10" fill="none" />
              </svg>

              {/* Studio Location Pin */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#06090E] border-2 border-[#00A3FF] flex items-center justify-center text-white shadow-lg">
                  <Navigation size={20} className="text-[#00A3FF] transform -rotate-45" />
                </div>

                <div className="mt-3 px-3.5 py-1.5 rounded bg-[#06090E]/95 border border-[#1E293B] text-center shadow-lg">
                  <div className="font-display font-bold text-xs text-white">
                    RD Studio Automotivo
                  </div>
                  <div className="text-xs text-[#00A3FF] font-medium">
                    Destino Principal
                  </div>
                </div>
              </div>

              {/* Map Floating Action */}
              <div className="absolute bottom-4 right-4 z-10">
                <a
                  href={SITE_CONFIG.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded bg-[#06090E]/95 hover:bg-[#16202E] border border-[#1E293B] text-xs font-semibold text-slate-200 hover:text-white transition-colors flex items-center gap-1.5 shadow-md"
                >
                  <MapPin size={13} className="text-[#00A3FF]" />
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

