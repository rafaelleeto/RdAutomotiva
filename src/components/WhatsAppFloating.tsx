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
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded bg-[#0B1017] border border-[#1E293B] text-xs font-semibold text-slate-200 shadow-xl">
          <span className="w-2 h-2 rounded-full bg-[#00A3FF]" />
          <span>Fale conosco</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-white ml-1 cursor-pointer"
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
        className="w-13 h-13 rounded-full bg-[#0284C7] hover:bg-[#0EA5E9] text-white flex items-center justify-center shadow-lg transition-colors cursor-pointer"
      >
        <MessageCircle size={24} className="text-white fill-white/20" />
      </a>
    </div>
  );
};
