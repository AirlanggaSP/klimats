'use client';

import React, { useState } from 'react';
import { QuizQuestion } from '@/types/content';
import { CheckCircle2, XCircle, Info } from 'lucide-react';
import confetti from 'canvas-confetti';
import { clsx } from 'clsx';

interface ChapterQuizSectionProps {
  questions: QuizQuestion[];
}

export default function ChapterQuizSection({ questions }: ChapterQuizSectionProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({});

  const handleAnswer = (questionId: string, optionId: string) => {
    const question = questions.find(q => q.id === questionId);
    if (!question) return;

    setAnswers(prev => ({ ...prev, [questionId]: optionId }));

    if (optionId === question.correctOptionId) {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.8 },
        colors: ['#10b981', '#2dd4bf']
      });
    }

    setShowExplanation(prev => ({ ...prev, [questionId]: true }));
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-accent-mint/10 rounded-lg">
          <Info className="w-5 h-5 text-accent-mint" />
        </div>
        <h2 className="text-xl font-bold text-text-primary">Chapter Knowledge Check</h2>
      </div>

      {questions.map((q, idx) => (
        <div key={q.id} className="bg-card-base border border-white/10 rounded-xl p-6 transition-all">
          <div className="flex items-start gap-4 mb-6">
            <span className="text-xs font-mono-sci text-text-muted px-2 py-1 bg-canvas-base rounded border border-white/5">
              Q{String(idx + 1).padStart(2, '0')}
            </span>
            <h3 className="text-md font-medium text-text-body leading-relaxed">{q.question}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {q.options.map((opt) => {
              const isSelected = answers[q.id] === opt.id;
              const isCorrect = opt.id === q.correctOptionId;
              const hasAnswered = answers[q.id] !== undefined;

              let btnClass = "border-white/10 text-text-secondary hover:bg-white/5";
              if (hasAnswered) {
                if (isCorrect) btnClass = "border-accent-primary bg-accent-primary/15 text-accent-primary";
                else if (isSelected) btnClass = "border-accent-danger bg-accent-danger/15 text-accent-danger";
                else btnClass = "border-white/5 text-text-muted opacity-50";
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => handleAnswer(q.id, opt.id)}
                  disabled={hasAnswered}
                  className={clsx(
                    "flex items-center justify-between p-4 rounded-xl border text-left transition-all text-sm font-medium",
                    btnClass
                  )}
                >
                  <span>{opt.text}</span>
                  {hasAnswered && isCorrect && <CheckCircle2 className="w-4 h-4" />}
                  {hasAnswered && isSelected && !isCorrect && <XCircle className="w-4 h-4" />}
                </button>
              );
            })}
          </div>

          {showExplanation[q.id] && (
            <div className="mt-6 p-4 bg-canvas-base rounded-xl border-l-4 border-accent-mint animate-in fade-in slide-in-from-top-2">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-4 h-4 text-accent-mint" />
                <span className="text-xs font-bold text-accent-mint uppercase tracking-wider">Scientific Explanation</span>
              </div>
              <p className="text-sm text-text-body leading-relaxed opacity-90">{q.explanation}</p>
              {q.sourceRef && (
                <div className="mt-2 text-[10px] font-mono-sci text-text-muted">Source: {q.sourceRef}</div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
