import React from 'react';
import { motion } from 'motion/react';
import { Crosshair, ShieldCheck, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';
import { WHY_US_ITEMS } from '../data/content';

const iconMap: Record<string, React.ReactNode> = {
  Crosshair: <Crosshair size={24} className="text-[#3B82F6]" />,
  ShieldCheck: <ShieldCheck size={24} className="text-[#3B82F6]" />,
  Sparkles: <Sparkles size={24} className="text-[#3B82F6]" />,
  TrendingUp: <TrendingUp size={24} className="text-[#3B82F6]" />,
};

export const WhyUs: React.FC = () => {
  return (
    <section id="por-que-rd" className="py-24 bg-[#05080D] relative overflow-hidden border-t border-[#1B2735]/50">
      {/* Background grid pattern & ambient light */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#2563EB]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#3B82F6]"></div>
            <span className="text-[12px] font-bold tracking-[0.4em] text-[#3B82F6] uppercase">
              Diferenciais Exclusivos
            </span>
            <div className="w-8 h-[1px] bg-[#3B82F6]"></div>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight uppercase italic">
            POR QUE A <span className="text-[#3B82F6] text-glow">RD STUDIO?</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#CBD5E1] font-light">
            Porque cuidar do seu veículo vai muito além de deixá-lo bonito.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative p-8 rounded-sm glass hover:border-[#3B82F6]/60 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_25px_rgba(37,99,235,0.2)]"
            >
              {/* Top corner ambient blue highlight */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#2563EB]/0 group-hover:bg-[#2563EB]/15 rounded-tr-sm blur-xl transition-all duration-300 pointer-events-none" />

              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-sm bg-[#111923] border border-[#1B2735] group-hover:border-[#3B82F6] flex items-center justify-center mb-6 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.35)]">
                  {iconMap[item.iconName] || <Sparkles size={24} className="text-[#3B82F6]" />}
                </div>

                {/* Subtag */}
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3B82F6] block mb-2">
                  {item.tag}
                </span>

                {/* Title */}
                <h3 className="font-display font-black text-lg text-white tracking-widest uppercase mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#CBD5E1] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom detail pill */}
              <div className="mt-8 pt-4 border-t border-[#1B2735]/60 flex items-center gap-2 text-[11px] font-semibold text-[#94A3B8] group-hover:text-white transition-colors">
                <CheckCircle2 size={13} className="text-[#3B82F6]" />
                <span className="tracking-wider uppercase">Padrão RD Verificado</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

