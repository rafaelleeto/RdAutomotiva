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
          ? 'bg-[#06090E]/95 backdrop-blur-md border-b border-[#16202E]/80 py-3 shadow-2xl'
          : 'bg-transparent border-b border-[#16202E]/40 py-4.5'
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
            <img
              src="./logo.png"
              alt="RD Studio Automotivo Logo"
              className="w-10 h-10 object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1">
                RD <span className="text-[#00A3FF]">Studio</span>
              </span>
              <span className="text-xs font-medium text-slate-400">
                Automotivo
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-white transition-colors py-1"
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
              className="bg-[#0284C7] hover:bg-[#0EA5E9] text-white px-5 py-2.5 rounded text-sm font-semibold transition-colors cursor-pointer shadow-sm"
            >
              Agendar Serviço
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              className="p-2 rounded text-slate-300 hover:text-white bg-[#0A0F16] border border-[#16202E] cursor-pointer"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0F16] border-b border-[#16202E] px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 rounded text-sm font-medium text-slate-200 hover:text-white hover:bg-[#16202E] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#16202E]">
            <button
              onClick={handleScheduleClick}
              className="w-full bg-[#0284C7] hover:bg-[#0EA5E9] text-white py-3 rounded text-sm font-semibold transition-colors text-center cursor-pointer"
            >
              Agendar Serviço
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
