'use client';

import React, { useState, useEffect } from 'react';
import { FlashcardItem } from '@/types/content';
import { CheckCircle2, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';
import { clsx } from 'clsx';

interface FlashcardDeckProps {
  cards: FlashcardItem[];
}

export default function FlashcardDeck({ cards }: FlashcardDeckProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown, { passive: false });
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFlipped]);

  const handleMastered = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#10b981', '#2dd4bf', '#ffffff']
    });
    setStreak(prev => prev + 1);
    setIsFlipped(false);
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const currentCard = cards[currentIndex];

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-2 px-3 py-1 bg-accent-amber/10 border border-accent-amber/30 rounded-full">
        <Flame className="w-3 h-3 text-accent-amber" />
        <span className="text-xs font-mono-sci text-accent-amber font-bold">Streak: {streak}</span>
      </div>

      <div
        className="relative w-full aspect-[3/4] cursor-pointer perspective-1000"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className={clsx(
          "relative w-full h-full transition-all duration-500 preserve-3d",
          isFlipped ? "rotate-y-180" : ""
        )}>
          {/* Front Side */}
          <div className="absolute inset-0 backface-hidden bg-card-base border border-white/10 rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-xl">
            <div className="text-xs font-mono-sci text-text-muted uppercase mb-4">Question</div>
            <h3 className="text-lg font-medium text-text-primary leading-relaxed">{currentCard.question}</h3>
            <div className="mt-auto text-[10px] font-mono-sci text-text-muted opacity-50">Press Space to Flip</div>
          </div>

          {/* Back Side */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-card-base border border-accent-primary/30 rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-xl">
            <div className="text-xs font-mono-sci text-accent-primary uppercase mb-4">Answer</div>
            <p className="text-md text-text-body leading-relaxed">{currentCard.answer}</p>
            <div className="mt-auto text-[10px] font-mono-sci text-text-muted opacity-50">Press Space to Flip back</div>
          </div>
        </div>
      </div>

      <div className="flex gap-3 w-full">
        <button
          onClick={(e) => { e.stopPropagation(); setIsFlipped(false); setCurrentIndex(prev => Math.max(0, prev - 1)); }}
          className="flex-1 py-3 px-4 rounded-xl bg-surface-panel border border-white/10 text-text-secondary text-xs font-medium hover:bg-white/5 transition-all"
        >
          Previous
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); handleMastered(); }}
          className="flex-1 py-3 px-4 rounded-xl bg-accent-primary text-canvas-base text-xs font-bold hover:bg-accent-primary/90 transition-all flex items-center justify-center gap-2"
        >
          <CheckCircle2 className="w-4 h-4" /> Mastered
        </button>
      </div>
    </div>
  );
}
