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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#06090E]/90 backdrop-blur-md overflow-y-auto">
        
        {/* Modal Backdrop click */}
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative max-w-2xl w-full bg-[#0B1017] border border-[#1E293B] rounded overflow-hidden shadow-2xl z-10 my-8"
        >
          {/* Header Image with Dark Overlay */}
          <div className="relative h-56 w-full overflow-hidden border-b border-[#1E293B]">
            <img
              src={service.image}
              alt={service.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter contrast-115"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1017] via-[#0B1017]/60 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Fechar"
              className="absolute top-4 right-4 w-9 h-9 rounded bg-[#06090E]/80 hover:bg-[#16202E] border border-[#1E293B] text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Title on Image */}
            <div className="absolute bottom-4 left-6 right-6">
              <span className="text-xs font-semibold text-[#00A3FF] uppercase tracking-wider block mb-1">
                {service.badge}
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                {service.number} — <span className="text-[#00A3FF]">{service.title}</span>
              </h2>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-5">
            <div>
              <h3 className="text-xs font-semibold text-[#00A3FF] uppercase tracking-wider mb-2">
                Visão Geral do Procedimento
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Features Checklist */}
            <div className="p-4 rounded bg-[#070B10] border border-[#1E293B]">
              <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
                Itens Inclusos no Tratamento:
              </h3>
              <div className="space-y-2.5">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 size={15} className="text-[#00A3FF] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal For Note */}
            <div className="p-4 rounded bg-[#070B10] border border-[#1E293B] flex items-start gap-3">
              <Sparkles size={18} className="text-[#00A3FF] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold text-white uppercase tracking-wider block">
                  Indicação Técnica:
                </span>
                <p className="text-sm text-slate-300 mt-0.5">
                  {service.idealFor}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded border border-[#1E293B] hover:bg-[#16202E] text-slate-300 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Voltar aos Serviços
              </button>

              <button
                onClick={handleRequest}
                className="w-full sm:w-auto px-6 py-2.5 rounded bg-[#0284C7] hover:bg-[#0EA5E9] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
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
