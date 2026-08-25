/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyUs } from './components/WhyUs';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { BeforeAfter } from './components/BeforeAfter';
import { CtaBanner } from './components/CtaBanner';
import { Feedbacks } from './components/Feedbacks';
import { LocationSection } from './components/LocationSection';
import { ContactForm } from './components/ContactForm';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ServiceItem } from './types';

export default function App() {
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);
  const [selectedServiceForForm, setSelectedServiceForForm] = useState<string>('Ainda não sei');

  const scrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForForm(serviceName);
    }
    const el = document.querySelector('#contato');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.querySelector('#servicos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#06090E] text-[#CBD5E1] font-sans selection:bg-[#0284C7] selection:text-white flex flex-col justify-between">
      {/* Fixed Navigation Header */}
      <Header onOpenQuoteModal={() => scrollToContact()} />

      {/* Main Landing Sections */}
      <main className="flex-grow">
        {/* 01. Hero with Cinematic Animation */}
        <Hero
          onOpenQuoteModal={() => scrollToContact()}
          onExploreServices={scrollToServices}
        />

        {/* 02. Por que a RD Studio? */}
        <WhyUs />

        {/* 03. Quem Somos */}
        <AboutUs />

        {/* 04. Serviços (01 Correção, 02 Proteção, 03 Valorização) */}
        <Services onSelectService={(service) => setSelectedServiceForModal(service)} />

        {/* 05. Antes / Depois Interactive Slider */}
        <BeforeAfter />

        {/* 06. CTA Radial Section */}
        <CtaBanner onOpenQuoteModal={() => scrollToContact()} />

        {/* 07. Feedbacks & Depoimentos */}
        <Feedbacks />

        {/* 08. Localização & Onde Estamos */}
        <LocationSection />

        {/* 09. Formulário de Contato / Orçamento */}
        <ContactForm initialService={selectedServiceForForm} />
      </main>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedServiceForModal}
        onClose={() => setSelectedServiceForModal(null)}
        onSelectForQuote={(name) => scrollToContact(name)}
      />

      {/* 10. Floating WhatsApp Button */}
      <WhatsAppFloating />

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}

