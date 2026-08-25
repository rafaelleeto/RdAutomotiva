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
      className="py-24 bg-[#0A0F16] relative overflow-hidden border-t border-[#16202E]/60"
      onMouseUp={handleMouseUp}
      onTouchEnd={handleMouseUp}
    >
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#00A3FF]"></div>
            <span className="text-xs font-semibold tracking-wider text-[#00A3FF] uppercase">
              Comprovação Visual
            </span>
            <div className="w-8 h-[2px] bg-[#00A3FF]"></div>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            A diferença está <span className="text-[#00A3FF]">nos detalhes.</span>
          </h2>

          <p className="mt-4 text-base text-slate-300 max-w-xl mx-auto">
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
                className={`px-4 py-2 rounded text-xs font-semibold transition-colors cursor-pointer ${
                  activeScenarioIndex === idx
                    ? 'bg-[#0284C7] text-white border border-[#00A3FF] shadow-sm'
                    : 'bg-[#0B1017] text-slate-300 hover:text-white border border-[#1E293B] hover:border-slate-500'
                }`}
              >
                {sc.title}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Card */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded overflow-hidden bg-[#0B1017] border border-[#1E293B] shadow-xl p-2 sm:p-4">
            
            {/* The Before/After Image Container */}
            <div
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onTouchStart={(e) => handleMove(e.touches[0].clientX)}
              className="relative w-full h-[340px] sm:h-[480px] md:h-[540px] rounded overflow-hidden cursor-ew-resize select-none touch-none border border-[#1E293B]"
            >
              {/* "AFTER" (Full background layer) */}
              <img
                src={scenario.afterImage}
                alt={scenario.afterLabel}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center filter contrast-115"
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
              </div>

              {/* Vertical Divider Line */}
              <div
                className="absolute inset-y-0 w-0.5 bg-[#00A3FF] pointer-events-none"
                style={{ left: `calc(${sliderPosition}% - 1px)` }}
              >
                {/* Drag Handle Button in Middle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#06090E] border border-[#00A3FF] flex items-center justify-center text-white shadow-md">
                  <MoveHorizontal size={16} className="text-[#BAE6FD]" />
                </div>
              </div>

              {/* Before Label Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded bg-[#06090E]/90 border border-[#1E293B] text-xs font-semibold text-slate-300">
                {scenario.beforeLabel}
              </div>

              {/* After Label Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded bg-[#06090E]/95 border border-[#0284C7] text-xs font-semibold text-[#00A3FF] flex items-center gap-1.5 shadow-sm">
                <Sparkles size={12} />
                <span>{scenario.afterLabel}</span>
              </div>

              {/* Hint badge in bottom center */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3.5 py-1.5 rounded-full bg-[#06090E]/90 border border-[#1E293B] text-xs font-medium text-slate-300 pointer-events-none flex items-center gap-2 shadow-md">
                <Sliders size={12} className="text-[#00A3FF]" />
                <span>Arraste para comparar</span>
              </div>
            </div>

            {/* Bottom context description */}
            <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#1E293B] mt-2">
              <div>
                <span className="text-xs font-semibold text-[#00A3FF] uppercase tracking-wider block mb-0.5">
                  {scenario.part}
                </span>
                <h3 className="text-base font-bold text-white">
                  {scenario.title}
                </h3>
                <p className="text-sm text-slate-300 mt-1 max-w-2xl">
                  {scenario.description}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setSliderPosition(20)}
                  className="px-3.5 py-1.5 rounded bg-[#070B10] hover:bg-[#16202E] border border-[#1E293B] text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  Ver Antes
                </button>
                <button
                  onClick={() => setSliderPosition(50)}
                  className="px-3.5 py-1.5 rounded bg-[#070B10] hover:bg-[#16202E] border border-[#1E293B] text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  Meio a Meio
                </button>
                <button
                  onClick={() => setSliderPosition(80)}
                  className="px-3.5 py-1.5 rounded bg-[#0284C7] hover:bg-[#0EA5E9] border border-[#00A3FF] text-xs font-medium text-white transition-colors cursor-pointer shadow-sm"
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
