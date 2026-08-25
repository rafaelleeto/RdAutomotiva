import React from 'react';
import { motion } from 'motion/react';
import { Check, Award } from 'lucide-react';
import { ABOUT_INDICATORS } from '../data/content';

export const AboutUs: React.FC = () => {
  return (
    <section id="quem-somos" className="py-24 bg-[#0B111A] relative overflow-hidden border-t border-[#1B2735]/50">
      {/* Background ambient lighting and pattern */}
      <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Cinematic Detailing Specialist Photography */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-sm overflow-hidden border border-[#1B2735] glass group shadow-2xl">
              {/* Image */}
              <div className="aspect-[4/3] sm:aspect-[16/11] relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=80"
                  alt="Profissional de estética automotiva realizando polimento e detalhamento técnico"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 filter contrast-110"
                />
                
                {/* Overlay gradient with blue backlight reflection */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B111A] via-transparent to-transparent opacity-85" />
                <div className="absolute inset-0 bg-[#05080D]/30 mix-blend-multiply" />
                <div className="absolute -bottom-1 left-0 right-0 h-16 bg-gradient-to-t from-[#0B111A] to-transparent" />
              </div>

              {/* Floating Studio Quality Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-sm bg-[#0B111A]/95 border border-[#1B2735] backdrop-blur-md flex items-center justify-between shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-[#111923] border border-[#2563EB]/40 flex items-center justify-center text-[#3B82F6]">
                    <Award size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider">Metodologia Exclusiva</div>
                    <div className="text-[11px] text-[#94A3B8]">Estúdio com luzes de espectro técnico</div>
                  </div>
                </div>
                <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-sm bg-[#111923] text-[#93C5FD] border border-[#1B2735]">
                  Certificado
                </span>
              </div>
            </div>

            {/* Corner Blue Accent Line */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#3B82F6] rounded-tl-sm pointer-events-none" />
          </motion.div>

          {/* Right Column: Copy & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Header Accent Line & Badge */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[1px] bg-[#3B82F6]"></div>
              <span className="text-[12px] font-bold tracking-[0.4em] text-[#3B82F6] uppercase">
                Quem Somos
              </span>
            </div>

            {/* Title */}
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.05] uppercase italic mb-6">
              CUIDADO QUE VOCÊ VÊ.<br />
              <span className="text-[#3B82F6] text-glow">
                QUALIDADE QUE VOCÊ SENTE.
              </span>
            </h2>

            {/* Text */}
            <p className="text-base text-[#CBD5E1] font-light leading-relaxed mb-8">
              A RD Studio Automotivo nasceu com o propósito de oferecer uma experiência diferenciada em estética automotiva. Nosso trabalho combina técnica, atenção aos detalhes e cuidado para entregar resultados que realmente fazem diferença.
            </p>

            {/* Indicators Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-2">
              {ABOUT_INDICATORS.map((ind, i) => (
                <div
                  key={i}
                  className="p-4 rounded-sm glass border border-[#1B2735] hover:border-[#3B82F6]/50 transition-all flex items-start gap-3.5"
                >
                  <div className="mt-0.5 w-6 h-6 rounded-sm bg-[#111923] border border-[#2563EB]/40 flex items-center justify-center text-[#3B82F6] shrink-0">
                    <Check size={14} className="stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      {ind.label}
                    </h4>
                    <p className="text-[11px] text-[#94A3B8] mt-1 leading-snug font-light">
                      {ind.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

