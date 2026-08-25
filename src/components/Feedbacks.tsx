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
      className="py-24 bg-[#06090E] relative overflow-hidden border-t border-[#16202E]/60"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#00A3FF]"></div>
            <span className="text-xs font-semibold tracking-wider text-[#00A3FF] uppercase">
              Feedbacks
            </span>
            <div className="w-8 h-[2px] bg-[#00A3FF]"></div>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Quem conhece, <span className="text-[#00A3FF]">recomenda.</span>
          </h2>

          <p className="mt-4 text-base text-slate-300 max-w-xl mx-auto">
            A satisfação e a transformação que entregamos a cada cliente.
          </p>
        </div>

        {/* Carousel Showcase */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-6 sm:p-10 rounded bg-[#0B1017] border border-[#1E293B] shadow-xl overflow-hidden min-h-[300px] flex flex-col justify-between">
            
            {/* Top quote icon & stars */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="fill-[#00A3FF] text-[#00A3FF]" />
                ))}
                <span className="ml-2 text-xs font-semibold text-white">5.0 / 5.0</span>
              </div>

              <div className="w-9 h-9 rounded bg-[#070B10] border border-[#1E293B] flex items-center justify-center text-[#00A3FF]">
                <Quote size={16} />
              </div>
            </div>

            {/* Testimonial Content with Animated Transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="my-auto"
              >
                <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed italic">
                  "{current.comment}"
                </p>

                <div className="mt-6 pt-5 border-t border-[#1E293B] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="font-display font-bold text-base text-white">
                      {current.name}
                    </h3>
                    <div className="text-xs text-[#00A3FF] font-medium mt-0.5">
                      {current.vehicle} • <span className="text-slate-400">{current.service}</span>
                    </div>
                  </div>

                  <div className="text-xs font-medium text-slate-400 bg-[#070B10] px-3 py-1 rounded border border-[#1E293B] self-start sm:self-auto">
                    Avaliação Verificada
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Navigation Controls */}
            <div className="mt-6 pt-4 flex items-center justify-between border-t border-[#1E293B]/70">
              {/* Dot Indicators */}
              <div className="flex items-center gap-2">
                {FEEDBACKS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Ir para avaliação ${idx + 1}`}
                    className={`h-1.5 rounded transition-all cursor-pointer ${
                      currentIndex === idx ? 'w-6 bg-[#00A3FF]' : 'w-2 bg-[#1E293B] hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Avaliação anterior"
                  className="w-9 h-9 rounded bg-[#070B10] hover:bg-[#16202E] border border-[#1E293B] text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Próxima avaliação"
                  className="w-9 h-9 rounded bg-[#070B10] hover:bg-[#16202E] border border-[#1E293B] text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

          </div>

          {/* View More Reviews Button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAllModal(true)}
              id="feedbacks-more-btn"
              className="px-5 py-2.5 rounded bg-[#070B10] hover:bg-[#16202E] border border-[#1E293B] hover:border-slate-500 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <span>Ver mais avaliações</span>
              <ExternalLink size={13} className="text-[#00A3FF]" />
            </button>
            <p className="text-xs text-slate-500 mt-2">
              * Textos demonstrativos estruturados para integração com Google Reviews.
            </p>
          </div>
        </div>

      </div>

      {/* Modal with all testimonials list */}
      {showAllModal && (
        <div className="fixed inset-0 z-50 bg-[#06090E]/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0B1017] border border-[#1E293B] rounded max-w-2xl w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#1E293B] mb-6">
              <div>
                <h3 className="font-display font-bold text-xl text-white">
                  Avaliações de Clientes
                </h3>
                <p className="text-xs text-slate-400">Média 5.0 estrelas em estética automotiva</p>
              </div>
              <button
                onClick={() => setShowAllModal(false)}
                className="px-3.5 py-1.5 rounded bg-[#070B10] hover:bg-[#16202E] border border-[#1E293B] text-slate-300 text-xs font-medium cursor-pointer"
              >
                Fechar
              </button>
            </div>

            <div className="space-y-3.5">
              {FEEDBACKS_DATA.map((fb) => (
                <div key={fb.id} className="p-4 rounded bg-[#070B10] border border-[#1E293B]">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(fb.rating)].map((_, i) => (
                        <Star key={i} size={13} className="fill-[#00A3FF] text-[#00A3FF]" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500">{fb.date}</span>
                  </div>
                  <p className="text-sm text-slate-300 mb-2 italic font-normal">"{fb.comment}"</p>
                  <div className="text-xs font-semibold text-white">{fb.name} • <span className="text-[#00A3FF]">{fb.vehicle}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
