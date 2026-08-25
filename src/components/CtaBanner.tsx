import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CtaBannerProps {
  onOpenQuoteModal: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-20 bg-[#06090E] relative overflow-hidden border-t border-[#16202E]/60">
      <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-12 rounded bg-[#0B1017] border border-[#1E293B] shadow-xl relative"
        >
          {/* Top accent badge */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-[2px] bg-[#00A3FF]"></div>
            <span className="text-xs font-semibold tracking-wider text-[#00A3FF] uppercase">
              Experiência RD Studio
            </span>
            <div className="w-8 h-[2px] bg-[#00A3FF]"></div>
          </div>

          {/* Title */}
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-4">
            Seu carro está pronto <br />
            <span className="text-[#00A3FF]">para um novo nível?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-base text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Descubra qual tratamento é ideal para o seu veículo com um atendimento técnico e plano personalizado.
          </p>

          {/* Button */}
          <button
            onClick={onOpenQuoteModal}
            id="cta-quote-btn"
            className="px-8 py-3.5 rounded bg-[#0284C7] hover:bg-[#0EA5E9] text-white text-sm font-semibold transition-colors cursor-pointer inline-flex items-center gap-2.5 shadow-sm"
          >
            <span>Solicitar Orçamento</span>
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

