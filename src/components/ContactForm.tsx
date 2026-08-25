import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, Phone, Sparkles, MessageSquare, Car, Mail, User } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';
import { QuoteFormData } from '../types';

interface ContactFormProps {
  initialService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    whatsapp: '',
    email: '',
    vehicle: '',
    service: (initialService as any) || 'Ainda não sei',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof QuoteFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Por favor, informe seu nome completo.';
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'Por favor, informe seu WhatsApp para contato.';
    } else if (formData.whatsapp.replace(/\D/g, '').length < 10) {
      newErrors.whatsapp = 'Digite um número de WhatsApp válido com DDD.';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Digite um e-mail válido.';
    }

    if (!formData.vehicle.trim()) {
      newErrors.vehicle = 'Informe a marca e modelo do veículo.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);

    // Simulate reliable form submission processing
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1200);
  };

  const generateWhatsAppDirectLink = () => {
    const text = `*Solicitação de Orçamento - RD Studio Automotivo*\n\n*Nome:* ${formData.name}\n*Veículo:* ${formData.vehicle}\n*Serviço:* ${formData.service}\n*WhatsApp:* ${formData.whatsapp}\n*E-mail:* ${formData.email || 'Não informado'}\n*Mensagem:* ${formData.message || 'Sem observações adicionais'}`;
    return `https://wa.me/${SITE_CONFIG.whatsappRawNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      whatsapp: '',
      email: '',
      vehicle: '',
      service: 'Ainda não sei',
      message: '',
    });
  };

  return (
    <section id="contato" className="py-24 bg-[#06090E] relative overflow-hidden border-t border-[#16202E]/60">
      <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#00A3FF]"></div>
            <span className="text-xs font-semibold tracking-wider text-[#00A3FF] uppercase">
              Atendimento Exclusivo
            </span>
            <div className="w-8 h-[2px] bg-[#00A3FF]"></div>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Fale com a <span className="text-[#00A3FF]">RD Studio.</span>
          </h2>

          <p className="mt-4 text-base text-slate-300">
            Conte para nós o que você deseja fazer no seu veículo e nossa equipe técnica entrará em contato.
          </p>
        </div>

        {/* Form Card Container */}
        <div className="p-6 sm:p-10 rounded bg-[#0B1017] border border-[#1E293B] shadow-xl relative">
          
          {isSuccess ? (
            /* Success View */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#070B10] border border-[#00A3FF] flex items-center justify-center text-[#00A3FF] mb-5 shadow-sm">
                <CheckCircle2 size={28} />
              </div>

              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Solicitação Recebida com Sucesso!
              </h3>

              <p className="text-sm text-slate-300 max-w-md mb-6 leading-relaxed">
                Obrigado, <strong className="text-white">{formData.name}</strong>. Nossa equipe técnica já está analisando as especificações do seu <strong className="text-white">{formData.vehicle}</strong>.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
                <a
                  href={generateWhatsAppDirectLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3 rounded bg-[#0284C7] hover:bg-[#0EA5E9] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone size={15} />
                  <span>Acelerar pelo WhatsApp</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 rounded bg-[#070B10] hover:bg-[#16202E] border border-[#1E293B] text-slate-300 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Enviar Outro Orçamento
                </button>
              </div>
            </motion.div>
          ) : (
            /* Active Form View */
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Nome */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <User size={13} className="text-[#00A3FF]" />
                    <span>Nome Completo *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Alexandre Silva"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded bg-[#070B10] border ${
                      errors.name ? 'border-red-500' : 'border-[#1E293B]'
                    } focus:border-[#00A3FF] focus:ring-1 focus:ring-[#00A3FF] text-white placeholder-slate-500 text-sm outline-none transition-colors`}
                  />
                  {errors.name && (
                    <span className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.name}
                    </span>
                  )}
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Phone size={13} className="text-[#00A3FF]" />
                    <span>WhatsApp / Celular *</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Ex: (11) 99999-9999"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className={`w-full px-4 py-3 rounded bg-[#070B10] border ${
                      errors.whatsapp ? 'border-red-500' : 'border-[#1E293B]'
                    } focus:border-[#00A3FF] focus:ring-1 focus:ring-[#00A3FF] text-white placeholder-slate-500 text-sm outline-none transition-colors`}
                  />
                  {errors.whatsapp && (
                    <span className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.whatsapp}
                    </span>
                  )}
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* E-mail */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Mail size={13} className="text-[#00A3FF]" />
                    <span>E-mail</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Ex: seuemail@dominio.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded bg-[#070B10] border ${
                      errors.email ? 'border-red-500' : 'border-[#1E293B]'
                    } focus:border-[#00A3FF] focus:ring-1 focus:ring-[#00A3FF] text-white placeholder-slate-500 text-sm outline-none transition-colors`}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.email}
                    </span>
                  )}
                </div>

                {/* Veículo */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Car size={13} className="text-[#00A3FF]" />
                    <span>Veículo (Marca / Modelo / Ano) *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Porsche 911 2024 Preto"
                    value={formData.vehicle}
                    onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                    className={`w-full px-4 py-3 rounded bg-[#070B10] border ${
                      errors.vehicle ? 'border-red-500' : 'border-[#1E293B]'
                    } focus:border-[#00A3FF] focus:ring-1 focus:ring-[#00A3FF] text-white placeholder-slate-500 text-sm outline-none transition-colors`}
                  />
                  {errors.vehicle && (
                    <span className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.vehicle}
                    </span>
                  )}
                </div>

              </div>

              {/* Serviço de Interesse Dropdown */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Sparkles size={13} className="text-[#00A3FF]" />
                  <span>Serviço de Interesse</span>
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value as any })}
                  className="w-full px-4 py-3 rounded bg-[#070B10] border border-[#1E293B] focus:border-[#00A3FF] focus:ring-1 focus:ring-[#00A3FF] text-white text-sm outline-none transition-colors cursor-pointer"
                >
                  <option value="Correção">01 — Correção (Polimento Técnico & Restauração de Verniz)</option>
                  <option value="Proteção">02 — Proteção (Tratamentos de Longa Duração)</option>
                  <option value="Valorização">03 — Valorização (Detalhamento Completo Premium)</option>
                  <option value="Ainda não sei">Ainda não sei (Solicitar Diagnóstico Técnico)</option>
                </select>
              </div>

              {/* Mensagem */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <MessageSquare size={13} className="text-[#00A3FF]" />
                  <span>Mensagem / Observações do Veículo</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Descreva o estado do veículo ou dúvidas específicas que deseja esclarecer..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded bg-[#070B10] border border-[#1E293B] focus:border-[#00A3FF] focus:ring-1 focus:ring-[#00A3FF] text-white placeholder-slate-500 text-sm outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                id="submit-quote-form-btn"
                className={`w-full py-3.5 rounded bg-[#0284C7] hover:bg-[#0EA5E9] text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : 'active:scale-98'
                }`}
              >
                {isLoading ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    <span>Processando Solicitação...</span>
                  </>
                ) : (
                  <>
                    <span>Solicitar Orçamento</span>
                    <Send size={15} />
                  </>
                )}
              </button>

              <div className="text-center pt-1">
                <span className="text-xs text-slate-400">
                  Garantia de sigilo e privacidade dos dados de contato. Resposta em até 2 horas úteis.
                </span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
