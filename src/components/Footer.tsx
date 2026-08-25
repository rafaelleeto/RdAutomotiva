import React from 'react';
import { ArrowUp, Instagram, Facebook, MessageCircle, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Quem Somos', href: '#quem-somos' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Feedbacks', href: '#feedbacks' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#06090E] border-t border-[#16202E]/60 pt-16 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1E293B]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="./logo.png"
                alt="RD Studio Automotivo Logo"
                className="w-10 h-10 object-contain"
              />
              <div>
                <span className="font-display font-bold text-lg tracking-tight text-white flex items-center gap-1">
                  RD <span className="text-[#00A3FF]">Studio</span> Automotivo
                </span>
                <span className="block text-xs text-slate-400 font-medium mt-0.5">
                  Estética Automotiva de Alta Precisão
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed mt-1">
              Transformando a estética e a proteção de veículos através de metodologia avançada, rigor técnico e excelência em acabamento.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h3 className="font-display font-semibold text-sm text-white mb-4">
              Navegação
            </h3>
            <div className="grid grid-cols-2 gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Networks & Back to top */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h3 className="font-display font-semibold text-sm text-white mb-4">
                Redes & Contato
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da RD Studio Automotivo"
                  className="w-9 h-9 rounded bg-[#0A0F16] hover:bg-[#16202E] border border-[#1E293B] hover:border-slate-500 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                >
                  <Instagram size={17} />
                </a>
                <a
                  href={SITE_CONFIG.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook da RD Studio Automotivo"
                  className="w-9 h-9 rounded bg-[#0A0F16] hover:bg-[#16202E] border border-[#1E293B] hover:border-slate-500 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                >
                  <Facebook size={17} />
                </a>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappRawNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappDefaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp da RD Studio Automotivo"
                  className="w-9 h-9 rounded bg-[#0A0F16] hover:bg-[#16202E] border border-[#1E293B] hover:border-slate-500 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                >
                  <MessageCircle size={17} />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 self-start flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp size={13} className="text-[#00A3FF]" />
            </button>
          </div>

        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 RD Studio Automotivo. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A3FF]" />
            <span className="text-xs">Padrão de Precisão & Estética Automotiva</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
