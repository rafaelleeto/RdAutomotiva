import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';

export const WhatsAppFloating: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappRawNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappDefaultMessage)}`;

  return (
    <div
      id="whatsapp-floating-container"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 select-none"
    >
      {/* Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-sm glass border border-[#1B2735] text-xs font-bold text-white shadow-2xl backdrop-blur-md animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
          <span className="tracking-wide">Fale conosco</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-[#64748B] hover:text-white ml-1 cursor-pointer"
          >
            <X size={12} />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="whatsapp-floating-btn"
        aria-label="Fale conosco no WhatsApp"
        className="group relative w-14 h-14 rounded-sm bg-[#2563EB] hover:bg-[#3B82F6] text-white flex items-center justify-center shadow-[0_0_25px_rgba(37,99,235,0.6)] hover:shadow-[0_0_35px_rgba(59,130,246,0.8)] transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-sm bg-[#3B82F6]/30 animate-ping pointer-events-none" />

        {/* WhatsApp Vector Icon with High Contrast & Blue Style */}
        <MessageCircle size={26} className="text-white fill-white/20 group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
};
