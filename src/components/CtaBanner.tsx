import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CtaBannerProps {
  onOpenQuoteModal: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-20 bg-[#05080D] relative overflow-hidden border-t border-[#1B2735]/50">
      {/* Intense Radial Blue Illumination Glow in Center */}
      <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[400px] bg-[#2563EB]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[200px] bg-[#3B82F6]/30 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-14 rounded-sm glass border border-[#1B2735] hover:border-[#3B82F6]/60 shadow-2xl relative transition-all"
        >
          {/* Top accent badge */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#3B82F6]"></div>
            <span className="text-[12px] font-bold tracking-[0.4em] text-[#3B82F6] uppercase">
              Experiência RD Studio
            </span>
            <div className="w-8 h-[1px] bg-[#3B82F6]"></div>
          </div>

          {/* Impact Title */}
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase leading-tight italic mb-4">
            SEU CARRO ESTÁ PRONTO<br />
            <span className="text-[#3B82F6] text-glow">PARA UM NOVO NÍVEL?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#CBD5E1] max-w-xl mx-auto font-light mb-8">
            Descubra qual tratamento é ideal para o seu veículo com um plano personalizado.
          </p>

          {/* Button */}
          <button
            onClick={onOpenQuoteModal}
            id="cta-quote-btn"
            className="px-9 py-4 rounded-sm bg-[#2563EB] hover:bg-[#3B82F6] text-white text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(59,130,246,0.6)] cursor-pointer inline-flex items-center gap-3 group"
          >
            <span>SOLICITAR ORÇAMENTO</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

