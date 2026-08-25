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
    <section id="servicos" className="py-24 bg-[#06090E] relative overflow-hidden border-t border-[#16202E]/60">
      <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#00A3FF]"></div>
            <span className="text-xs font-semibold tracking-wider text-[#00A3FF] uppercase">
              Nossos Serviços
            </span>
            <div className="w-8 h-[2px] bg-[#00A3FF]"></div>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Tratamentos pensados <br className="hidden sm:inline" />
            <span className="text-[#00A3FF]">para o seu veículo.</span>
          </h2>

          <p className="mt-4 text-base text-slate-300 max-w-xl mx-auto">
            Soluções completas com processos desenvolvidos com rigor técnico para cada necessidade.
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
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onClick={() => onSelectService(service)}
              className="group relative rounded overflow-hidden bg-[#0B1017] border border-[#1E293B] hover:border-slate-500 transition-colors cursor-pointer flex flex-col justify-between shadow-lg"
            >
              {/* Top Image Box */}
              <div className="relative h-60 overflow-hidden border-b border-[#1E293B]">
                <img
                  src={service.image}
                  alt={`Serviço de ${service.title} - RD Studio Automotivo`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter contrast-110"
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1017] via-[#0B1017]/60 to-transparent" />

                {/* Big Service Number */}
                <div className="absolute top-4 left-5 font-display font-bold text-3xl text-white/30 group-hover:text-[#00A3FF] transition-colors">
                  {service.number}
                </div>

                {/* Badge */}
                <div className="absolute top-4 right-5 px-2.5 py-1 rounded bg-[#06090E]/90 border border-[#1E293B] text-xs font-semibold text-[#00A3FF]">
                  {service.badge}
                </div>

                {/* Card Title on Image base */}
                <div className="absolute bottom-4 left-5 right-5">
                  <h3 className="font-display font-bold text-xl text-white flex items-center justify-between">
                    <span>{service.number} — {service.title}</span>
                    <span className="w-8 h-8 rounded bg-[#0A0F16] border border-[#1E293B] group-hover:bg-[#0284C7] group-hover:text-white flex items-center justify-center text-slate-300 transition-colors">
                      <ArrowUpRight size={16} />
                    </span>
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-6">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-sm text-slate-200">
                        <CheckCircle2 size={15} className="text-[#00A3FF] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Trigger */}
                <div className="pt-4 border-t border-[#1E293B] flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                    Ver detalhes e orçamento
                  </span>
                  <ChevronRight size={16} className="text-[#00A3FF] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

