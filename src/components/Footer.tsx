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
    <footer className="bg-[#05080D] border-t border-[#1B2735]/60 pt-16 pb-12 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1B2735]/60">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-sm bg-[#111923] border border-[#2563EB]/40 flex items-center justify-center text-white font-display font-extrabold text-lg">
                <span className="text-[#3B82F6]">RD</span>
              </div>
              <div>
                <span className="font-display font-black text-xl tracking-wider text-white italic">
                  RD<span className="text-[#3B82F6]">.</span> STUDIO AUTOMOTIVO
                </span>
                <span className="block text-[10px] tracking-[0.3em] font-bold text-[#64748B] uppercase">
                  ESTÉTICA AUTOMOTIVA DE ALTA PRECISÃO
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#94A3B8] max-w-sm font-light leading-relaxed mt-2">
              Transformando a estética e a proteção de veículos através de metodologia avançada, rigor técnico e excelência em acabamento.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.3em] text-[#3B82F6] mb-4">
              Navegação
            </h4>
            <div className="grid grid-cols-2 gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs font-medium text-[#CBD5E1] hover:text-[#3B82F6] hover:translate-x-1 transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Networks & Back to top */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="font-display font-bold text-xs uppercase tracking-[0.3em] text-[#3B82F6] mb-4">
                Redes & Contato
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da RD Studio Automotivo"
                  className="w-10 h-10 rounded-sm bg-[#111923] hover:bg-[#1B2735] border border-[#1B2735] hover:border-[#3B82F6] flex items-center justify-center text-[#CBD5E1] hover:text-white transition-all"
                >
                  <Instagram size={17} />
                </a>
                <a
                  href={SITE_CONFIG.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook da RD Studio Automotivo"
                  className="w-10 h-10 rounded-sm bg-[#111923] hover:bg-[#1B2735] border border-[#1B2735] hover:border-[#3B82F6] flex items-center justify-center text-[#CBD5E1] hover:text-white transition-all"
                >
                  <Facebook size={17} />
                </a>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappRawNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappDefaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp da RD Studio Automotivo"
                  className="w-10 h-10 rounded-sm bg-[#111923] hover:bg-[#1B2735] border border-[#1B2735] hover:border-[#3B82F6] flex items-center justify-center text-[#CBD5E1] hover:text-white transition-all"
                >
                  <MessageCircle size={17} />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 self-start flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#64748B] hover:text-white transition-colors cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp size={13} className="text-[#3B82F6]" />
            </button>
          </div>

        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-4">
          <p>© 2026 RD Studio Automotivo. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
            <span className="tracking-wider uppercase text-[10px]">Padrão de Precisão & Estética Automotiva</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
