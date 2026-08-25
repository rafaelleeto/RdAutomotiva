import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { Sliders, Sparkles, Check, MoveHorizontal, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { BEFORE_AFTER_SCENARIOS } from '../data/content';

export const BeforeAfter: React.FC = () => {
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const scenario = BEFORE_AFTER_SCENARIOS[activeScenarioIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section
      id="antes-depois"
      className="py-24 bg-[#0B111A] relative overflow-hidden border-t border-[#1B2735]/50"
      onMouseUp={handleMouseUp}
      onTouchEnd={handleMouseUp}
    >
      {/* Background grid pattern & ambient glow */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-[#2563EB]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#3B82F6]"></div>
            <span className="text-[12px] font-bold tracking-[0.4em] text-[#3B82F6] uppercase">
              Comprovação Visual
            </span>
            <div className="w-8 h-[1px] bg-[#3B82F6]"></div>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight uppercase italic">
            A DIFERENÇA ESTÁ<br />
            <span className="text-[#3B82F6] text-glow">NOS DETALHES.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#CBD5E1] font-light">
            Arraste o divisor para comparar o estado original e o resultado após nossos procedimentos.
          </p>

          {/* Scenario Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {BEFORE_AFTER_SCENARIOS.map((sc, idx) => (
              <button
                key={sc.id}
                onClick={() => {
                  setActiveScenarioIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-5 py-2.5 rounded-sm text-[11px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
                  activeScenarioIndex === idx
                    ? 'bg-[#2563EB] text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] border border-[#3B82F6]'
                    : 'bg-[#111923]/80 text-[#94A3B8] hover:text-white border border-[#1B2735] hover:border-[#3B82F6]/50'
                }`}
              >
                {sc.title}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Card */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-sm overflow-hidden glass border border-[#1B2735] shadow-2xl p-2 sm:p-4 hover:border-[#3B82F6]/40 transition-all">
            
            {/* The Before/After Image Container */}
            <div
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onTouchStart={(e) => handleMove(e.touches[0].clientX)}
              className="relative w-full h-[340px] sm:h-[480px] md:h-[540px] rounded-sm overflow-hidden cursor-ew-resize select-none touch-none border border-[#1B2735]/60"
            >
              {/* "AFTER" (Full background layer) */}
              <img
                src={scenario.afterImage}
                alt={scenario.afterLabel}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center filter contrast-120"
              />

              {/* "BEFORE" (Clipped overlay layer) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={scenario.beforeImage}
                  alt={scenario.beforeLabel}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center filter contrast-90 brightness-90 saturate-50"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    maxWidth: 'none',
                  }}
                />
                
                {/* Left (Before) simulated scratches/holograms overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#000000]/20 to-transparent pointer-events-none" />
              </div>

              {/* Vertical Divider Line with Blue Glow */}
              <div
                className="absolute inset-y-0 w-1 bg-[#3B82F6] pointer-events-none shadow-[0_0_15px_#3B82F6]"
                style={{ left: `calc(${sliderPosition}% - 0.5px)` }}
              >
                {/* Drag Handle Button in Middle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#0B111A] border-2 border-[#3B82F6] flex items-center justify-center text-white shadow-[0_0_20px_rgba(59,130,246,0.8)] backdrop-blur-md">
                  <MoveHorizontal size={18} className="text-[#93C5FD]" />
                </div>
              </div>

              {/* Before Label Badge */}
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-sm bg-[#05080D]/90 border border-[#1B2735] backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-[#94A3B8]">
                {scenario.beforeLabel}
              </div>

              {/* After Label Badge */}
              <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-sm bg-[#0B111A]/95 border border-[#2563EB]/60 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-[#93C5FD] shadow-[0_0_15px_rgba(37,99,235,0.4)] flex items-center gap-1.5">
                <Sparkles size={12} className="text-[#3B82F6]" />
                <span>{scenario.afterLabel}</span>
              </div>

              {/* Hint badge in bottom center */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#05080D]/90 border border-[#1B2735] backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.25em] text-[#CBD5E1] pointer-events-none flex items-center gap-2 shadow-lg">
                <Sliders size={12} className="text-[#3B82F6]" />
                <span>ARRASTE PARA COMPARAR</span>
              </div>
            </div>

            {/* Bottom context description */}
            <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#1B2735]/60 mt-2">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3B82F6] block mb-0.5">
                  {scenario.part}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                  {scenario.title}
                </h4>
                <p className="text-xs text-[#CBD5E1] mt-1 max-w-2xl font-light">
                  {scenario.description}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setSliderPosition(20)}
                  className="px-3.5 py-1.5 rounded-sm bg-[#111923] hover:bg-[#1B2735] border border-[#1B2735] text-[10px] font-bold uppercase tracking-wider text-[#CBD5E1] transition-colors cursor-pointer"
                >
                  Ver Antes
                </button>
                <button
                  onClick={() => setSliderPosition(50)}
                  className="px-3.5 py-1.5 rounded-sm bg-[#111923] hover:bg-[#1B2735] border border-[#1B2735] text-[10px] font-bold uppercase tracking-wider text-[#CBD5E1] transition-colors cursor-pointer"
                >
                  Meio a Meio
                </button>
                <button
                  onClick={() => setSliderPosition(80)}
                  className="px-3.5 py-1.5 rounded-sm bg-[#2563EB]/25 hover:bg-[#2563EB]/40 border border-[#2563EB]/50 text-[10px] font-bold uppercase tracking-wider text-[#93C5FD] transition-colors cursor-pointer shadow-[0_0_10px_rgba(37,99,235,0.2)]"
                >
                  Ver Depois
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
