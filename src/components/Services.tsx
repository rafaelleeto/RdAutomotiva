import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="servicos" className="py-24 bg-[#05080D] relative overflow-hidden border-t border-[#1B2735]/50">
      {/* Background ambient lighting and pattern */}
      <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-10 left-1/4 w-[600px] h-[400px] bg-[#2563EB]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-[#1B2735]/30 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#3B82F6]"></div>
            <span className="text-[12px] font-bold tracking-[0.4em] text-[#3B82F6] uppercase">
              Nossos Serviços
            </span>
            <div className="w-8 h-[1px] bg-[#3B82F6]"></div>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight uppercase italic">
            TRATAMENTOS PENSADOS<br />
            <span className="text-[#3B82F6] text-glow">PARA O SEU VEÍCULO.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#CBD5E1] font-light">
            Soluções completas com processos milimetricamente desenvolvidos para cada necessidade.
          </p>
        </div>

        {/* 3 Large Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              onClick={() => onSelectService(service)}
              className="group relative rounded-sm overflow-hidden glass border border-[#1B2735] hover:border-[#3B82F6] transition-all duration-500 cursor-pointer flex flex-col justify-between shadow-2xl hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]"
            >
              {/* Top Image Box with Dark Overlay and Hover Zoom */}
              <div className="relative h-64 overflow-hidden border-b border-[#1B2735]/60">
                <img
                  src={service.image}
                  alt={`Serviço de ${service.title} - RD Studio Automotivo`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 filter contrast-125"
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B111A] via-[#0B111A]/60 to-transparent" />
                <div className="absolute inset-0 bg-[#0B111A]/40 group-hover:bg-[#2563EB]/10 transition-colors duration-500" />

                {/* Big Service Number */}
                <div className="absolute top-5 left-6 font-display font-black text-4xl text-white/30 group-hover:text-[#3B82F6] transition-colors">
                  {service.number}
                </div>

                {/* Badge */}
                <div className="absolute top-5 right-6 px-3 py-1 rounded-sm bg-[#0B111A]/95 border border-[#1B2735] text-[10px] font-bold uppercase tracking-widest text-[#93C5FD] backdrop-blur-md">
                  {service.badge}
                </div>

                {/* Card Title on Image base */}
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3B82F6] block mb-1">
                    Tratamento
                  </span>
                  <h3 className="font-display font-black text-xl text-white uppercase tracking-wider group-hover:text-[#93C5FD] transition-colors flex items-center justify-between">
                    <span>{service.number} — {service.title}</span>
                    <span className="w-8 h-8 rounded-sm bg-[#111923] border border-[#1B2735] group-hover:bg-[#2563EB] group-hover:border-[#3B82F6] flex items-center justify-center text-white transition-all transform group-hover:translate-x-1">
                      <ArrowUpRight size={16} />
                    </span>
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  <p className="text-xs sm:text-sm text-[#CBD5E1] font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                        <CheckCircle2 size={14} className="text-[#3B82F6] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Trigger */}
                <div className="pt-4 border-t border-[#1B2735]/60 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#94A3B8] group-hover:text-white transition-colors">
                    Ver detalhes & Orçamento
                  </span>
                  <ChevronRight size={16} className="text-[#3B82F6] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

