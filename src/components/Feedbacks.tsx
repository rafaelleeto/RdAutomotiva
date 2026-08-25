import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, ExternalLink } from 'lucide-react';
import { FEEDBACKS_DATA } from '../data/content';

export const Feedbacks: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showAllModal, setShowAllModal] = useState(false);

  // Auto carousel rotation
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % FEEDBACKS_DATA.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + FEEDBACKS_DATA.length) % FEEDBACKS_DATA.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % FEEDBACKS_DATA.length);
  };

  const current = FEEDBACKS_DATA[currentIndex];

  return (
    <section
      id="feedbacks"
      className="py-24 bg-[#0B111A] relative overflow-hidden border-t border-[#1B2735]/50"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background ambient lighting & grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[600px] h-[400px] bg-[#2563EB]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#3B82F6]"></div>
            <span className="text-[12px] font-bold tracking-[0.4em] text-[#3B82F6] uppercase">
              Feedbacks
            </span>
            <div className="w-8 h-[1px] bg-[#3B82F6]"></div>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight uppercase italic">
            QUEM CONHECE,<br />
            <span className="text-[#3B82F6] text-glow">RECOMENDA.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#CBD5E1] font-light">
            A satisfação e a transformação que entregamos a cada cliente.
          </p>
        </div>

        {/* Carousel Showcase */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-6 sm:p-12 rounded-sm glass border border-[#1B2735] hover:border-[#3B82F6]/40 transition-all shadow-2xl overflow-hidden min-h-[320px] flex flex-col justify-between">
            
            {/* Top quote icon & stars */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#3B82F6] text-[#3B82F6]" />
                ))}
                <span className="ml-2 text-xs font-bold text-white tracking-wider">5.0 / 5.0</span>
              </div>

              <div className="w-10 h-10 rounded-sm bg-[#111923] border border-[#1B2735] flex items-center justify-center text-[#3B82F6]">
                <Quote size={18} />
              </div>
            </div>

            {/* Testimonial Content with Animated Transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="my-auto"
              >
                <p className="text-base sm:text-xl text-[#F8FAFC] font-light leading-relaxed italic">
                  "{current.comment}"
                </p>

                <div className="mt-8 pt-6 border-t border-[#1B2735]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="font-display font-black text-base sm:text-lg text-white uppercase tracking-wider">
                      {current.name}
                    </h4>
                    <div className="text-xs text-[#3B82F6] font-semibold mt-0.5">
                      {current.vehicle} • <span className="text-[#94A3B8]">{current.service}</span>
                    </div>
                  </div>

                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#94A3B8] bg-[#111923] px-3 py-1 rounded-sm border border-[#1B2735] self-start sm:self-auto">
                    Avaliação Verificada
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Navigation Controls */}
            <div className="mt-8 pt-4 flex items-center justify-between border-t border-[#1B2735]/40">
              {/* Dot Indicators */}
              <div className="flex items-center gap-2">
                {FEEDBACKS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Ir para avaliação ${idx + 1}`}
                    className={`h-1.5 rounded-sm transition-all cursor-pointer ${
                      currentIndex === idx ? 'w-8 bg-[#3B82F6]' : 'w-2 bg-[#1B2735] hover:bg-[#64748B]'
                    }`}
                  />
                ))}
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Avaliação anterior"
                  className="w-10 h-10 rounded-sm bg-[#111923] hover:bg-[#1B2735] border border-[#1B2735] text-[#CBD5E1] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Próxima avaliação"
                  className="w-10 h-10 rounded-sm bg-[#111923] hover:bg-[#1B2735] border border-[#1B2735] text-[#CBD5E1] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

          </div>

          {/* View More Reviews Button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAllModal(true)}
              id="feedbacks-more-btn"
              className="px-6 py-3 rounded-sm bg-[#111923] hover:bg-[#1B2735] border border-[#1B2735] hover:border-[#3B82F6] text-[11px] font-bold uppercase tracking-widest text-[#CBD5E1] hover:text-white transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>VER MAIS AVALIAÇÕES</span>
              <ExternalLink size={14} className="text-[#3B82F6]" />
            </button>
            <p className="text-[11px] text-[#64748B] mt-2">
              * Textos demonstrativos provisórios estruturados para integração futura com Google Reviews.
            </p>
          </div>
        </div>

      </div>

      {/* Modal with all testimonials list */}
      {showAllModal && (
        <div className="fixed inset-0 z-50 bg-[#05080D]/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0B111A] border border-[#1B2735] rounded-sm max-w-2xl w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-2xl glass">
            <div className="flex items-center justify-between pb-4 border-b border-[#1B2735]/60 mb-6">
              <div>
                <h3 className="font-display font-black text-xl text-white uppercase italic">
                  Avaliações de Clientes
                </h3>
                <p className="text-xs text-[#94A3B8]">Média 5.0 estrelas em cuidados automotivos</p>
              </div>
              <button
                onClick={() => setShowAllModal(false)}
                className="px-4 py-2 rounded-sm bg-[#111923] hover:bg-[#1B2735] border border-[#1B2735] text-[#CBD5E1] text-[11px] font-bold uppercase tracking-wider cursor-pointer"
              >
                Fechar
              </button>
            </div>

            <div className="space-y-4">
              {FEEDBACKS_DATA.map((fb) => (
                <div key={fb.id} className="p-4 rounded-sm bg-[#05080D] border border-[#1B2735]">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(fb.rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-[#3B82F6] text-[#3B82F6]" />
                      ))}
                    </div>
                    <span className="text-[10px] text-[#64748B]">{fb.date}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#CBD5E1] mb-2 italic font-light">"{fb.comment}"</p>
                  <div className="text-xs font-bold text-white uppercase">{fb.name} • <span className="text-[#3B82F6]">{fb.vehicle}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
