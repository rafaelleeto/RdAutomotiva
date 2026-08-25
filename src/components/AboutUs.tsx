import React from 'react';
import { motion } from 'motion/react';
import { Check, Award } from 'lucide-react';
import { ABOUT_INDICATORS } from '../data/content';

export const AboutUs: React.FC = () => {
  return (
    <section id="quem-somos" className="py-24 bg-[#06090E] relative overflow-hidden border-t border-[#16202E]/60">
      <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Detailing Photography */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded overflow-hidden border border-[#1E293B] shadow-xl bg-[#0B1017]">
              {/* Image */}
              <div className="aspect-[4/3] sm:aspect-[16/11] relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=80"
                  alt="Profissional de estética automotiva realizando polimento e detalhamento técnico"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter contrast-110"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06090E] via-transparent to-transparent opacity-85" />
              </div>

              {/* Floating Studio Quality Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded bg-[#06090E]/95 border border-[#1E293B] flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded bg-[#0A0F16] border border-[#1E293B] flex items-center justify-center text-[#00A3FF]">
                    <Award size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Metodologia Exclusiva</div>
                    <div className="text-xs text-slate-400">Estúdio com iluminação técnica</div>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#0A0F16] text-[#00A3FF] border border-[#1E293B]">
                  Certificado
                </span>
              </div>
            </div>
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
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#00A3FF]"></div>
              <span className="text-xs font-semibold tracking-wider text-[#00A3FF] uppercase">
                Quem Somos
              </span>
            </div>

            {/* Title */}
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-5">
              Cuidado que você vê.<br />
              <span className="text-[#00A3FF]">
                Qualidade que você sente.
              </span>
            </h2>

            {/* Text */}
            <p className="text-base text-slate-300 leading-relaxed mb-8 max-w-xl">
              A RD Studio Automotivo nasceu com o propósito de oferecer uma experiência diferenciada em estética automotiva. Nosso trabalho combina técnica, atenção aos detalhes e cuidado para entregar resultados que realmente fazem a diferença.
            </p>

            {/* Indicators Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
              {ABOUT_INDICATORS.map((ind, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded bg-[#0B1017] border border-[#1E293B] flex items-start gap-3"
                >
                  <div className="mt-0.5 w-5 h-5 rounded bg-[#070B10] border border-[#1E293B] flex items-center justify-center text-[#00A3FF] shrink-0">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {ind.label}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
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

