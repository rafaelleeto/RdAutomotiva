import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';

interface HeaderProps {
  onOpenQuoteModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setMobileMenuOpen(false);
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

  const handleScheduleClick = () => {
    setMobileMenuOpen(false);
    if (onOpenQuoteModal) {
      onOpenQuoteModal();
    } else {
      const el = document.querySelector('#contato');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B111A]/95 backdrop-blur-md border-b border-[#1B2735]/50 py-3.5 shadow-2xl'
          : 'bg-transparent border-b border-[#1B2735]/30 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center gap-3 group text-left"
            id="brand-logo-link"
          >
            <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#1B2735] to-[#111923] border border-[#2563EB]/40 flex items-center justify-center text-white font-display font-black text-lg tracking-tighter group-hover:border-[#3B82F6] transition-all shadow-[0_0_15px_rgba(37,99,235,0.15)]">
              <span className="text-[#3B82F6] group-hover:text-white transition-colors">RD</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black tracking-tighter text-white">
                RD<span className="text-[#3B82F6]">.</span>
              </span>
              <span className="text-[10px] tracking-[0.2em] font-bold text-[#3B82F6] uppercase">
                STUDIO AUTOMOTIVO
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-widest font-semibold text-[#CBD5E1]" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#3B82F6] transition-colors relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={handleScheduleClick}
              id="header-schedule-btn"
              className="bg-[#2563EB] hover:bg-[#3B82F6] text-white px-6 py-2.5 rounded-sm text-[11px] font-bold tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] cursor-pointer"
            >
              AGENDAR SERVIÇO
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label="Abrir Menu"
              className="p-2 rounded-sm bg-[#111923] border border-[#1B2735] text-[#CBD5E1] hover:text-white hover:border-[#3B82F6] transition-colors"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden bg-[#0B111A]/98 backdrop-blur-xl border-b border-[#1B2735]/60 px-6 py-6 transition-all animate-fadeIn"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs uppercase tracking-widest font-semibold text-[#CBD5E1] hover:text-[#3B82F6] py-2.5 border-b border-[#111923] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={handleScheduleClick}
                id="mobile-schedule-btn"
                className="w-full py-3.5 rounded-sm bg-[#2563EB] text-white text-xs font-bold uppercase tracking-widest text-center shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:bg-[#3B82F6] transition-all"
              >
                AGENDAR SERVIÇO
              </button>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappRawNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-sm bg-[#111923] border border-[#1B2735] text-[#CBD5E1] hover:text-white text-xs font-semibold uppercase tracking-widest text-center flex items-center justify-center gap-2"
              >
                <PhoneCall size={14} className="text-[#3B82F6]" />
                WhatsApp Direto
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
