import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight, Sparkles, Shield, AlertTriangle } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForQuote: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectForQuote,
}) => {
  if (!service) return null;

  const handleRequest = () => {
    onSelectForQuote(service.title);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05080D]/90 backdrop-blur-md overflow-y-auto">
        
        {/* Modal Backdrop click */}
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative max-w-2xl w-full bg-[#0B111A] border border-[#1B2735] rounded-sm overflow-hidden shadow-2xl z-10 my-8 glass"
        >
          {/* Header Image with Dark Overlay */}
          <div className="relative h-60 w-full overflow-hidden border-b border-[#1B2735]/60">
            <img
              src={service.image}
              alt={service.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B111A] via-[#0B111A]/60 to-transparent" />
            <div className="absolute inset-0 bg-[#2563EB]/15 mix-blend-color" />

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Fechar"
              className="absolute top-4 right-4 w-9 h-9 rounded-sm bg-[#05080D]/80 hover:bg-[#111923] border border-[#1B2735] text-[#CBD5E1] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Title on Image */}
            <div className="absolute bottom-4 left-6 right-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3B82F6] block mb-1">
                {service.badge}
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight italic">
                {service.number} — <span className="text-glow">{service.title}</span>
              </h3>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#3B82F6] mb-2">
                Visão Geral do Procedimento
              </h4>
              <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-light">
                {service.description}
              </p>
            </div>

            {/* Features Checklist */}
            <div className="p-5 rounded-sm glass border border-[#1B2735]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                Itens Inclusos no Tratamento:
              </h4>
              <div className="space-y-2.5">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                    <CheckCircle2 size={15} className="text-[#3B82F6] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal For Note */}
            <div className="p-4 rounded-sm bg-[#111923]/60 border border-[#1B2735] flex items-start gap-3">
              <Sparkles size={18} className="text-[#3B82F6] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-white uppercase tracking-wider block">
                  Indicação Técnica:
                </span>
                <p className="text-xs text-[#94A3B8] mt-0.5 font-light">
                  {service.idealFor}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-[#1B2735]/60 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-sm border border-[#1B2735] hover:bg-[#1B2735] text-[#CBD5E1] text-[11px] font-bold uppercase tracking-widest transition-colors cursor-pointer"
              >
                Voltar aos Serviços
              </button>

              <button
                onClick={handleRequest}
                className="w-full sm:w-auto px-7 py-3 rounded-sm bg-[#2563EB] hover:bg-[#3B82F6] text-white text-[11px] font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Solicitar Este Orçamento</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
