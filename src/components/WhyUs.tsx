import React from 'react';
import { motion } from 'motion/react';
import { Crosshair, ShieldCheck, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';
import { WHY_US_ITEMS } from '../data/content';

const iconMap: Record<string, React.ReactNode> = {
  Crosshair: <Crosshair size={24} className="text-[#00A3FF]" />,
  ShieldCheck: <ShieldCheck size={24} className="text-[#00A3FF]" />,
  Sparkles: <Sparkles size={24} className="text-[#00A3FF]" />,
  TrendingUp: <TrendingUp size={24} className="text-[#00A3FF]" />,
};

export const WhyUs: React.FC = () => {
  return (
    <section id="por-que-rd" className="py-24 bg-[#0A0F16] relative overflow-hidden border-t border-[#16202E]/60">
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#00A3FF]"></div>
            <span className="text-xs font-semibold tracking-wider text-[#00A3FF] uppercase">
              Diferenciais Exclusivos
            </span>
            <div className="w-8 h-[2px] bg-[#00A3FF]"></div>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Por que escolher a <span className="text-[#00A3FF]">RD Studio?</span>
          </h2>

          <p className="mt-4 text-base text-slate-300 max-w-xl mx-auto">
            Cuidar do seu veículo com metodologia que combina rigor técnico, produtos de excelência e proteção duradoura.
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
              className="relative p-6 sm:p-7 rounded bg-[#0B1017] border border-[#1E293B] hover:border-slate-600 transition-colors flex flex-col justify-between shadow-md"
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded bg-[#070B10] border border-[#1E293B] flex items-center justify-center mb-5">
                  {iconMap[item.iconName] || <Sparkles size={22} className="text-[#00A3FF]" />}
                </div>

                {/* Subtag */}
                <span className="text-xs font-semibold text-[#00A3FF] uppercase tracking-wider block mb-1">
                  {item.tag}
                </span>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-white mb-2.5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom detail row */}
              <div className="mt-6 pt-4 border-t border-[#1E293B] flex items-center gap-2 text-xs font-medium text-slate-400">
                <CheckCircle2 size={14} className="text-[#00A3FF] shrink-0" />
                <span>Padrão RD Verificado</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

