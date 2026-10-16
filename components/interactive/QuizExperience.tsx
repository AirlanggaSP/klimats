'use client';

import { useEffect, useState } from 'react';
import { Check, Circle, Clock3, Diamond, RotateCcw, Square, Triangle, Trophy, X } from 'lucide-react';
import { curriculum } from '@/data/curriculum';
import type { QuizQuestion, ShortAnswerQuestion } from '@/types/content';

type QuizMode = 'multiple-choice' | 'short-answer';
type SessionQuestion =
  | { kind: 'multiple-choice'; question: QuizQuestion }
  | { kind: 'short-answer'; question: ShortAnswerQuestion };

const answers = [
  { Icon: Triangle, color: 'bg-rose-600' },
  { Icon: Diamond, color: 'bg-sky-600' },
  { Icon: Circle, color: 'bg-amber-400 text-[#171717]' },
  { Icon: Square, color: 'bg-emerald-600' },
];

function shuffleQuestions(questions: SessionQuestion[]) {
  const shuffled = [...questions];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[target]] = [shuffled[target], shuffled[index]];
  }
  return shuffled;
}

export default function QuizExperience() {
  const [quizMode, setQuizMode] = useState<QuizMode>('multiple-choice');
  const [chapterSelection, setChapterSelection] = useState('all');
  const [questionCount, setQuestionCount] = useState('all');
  const [secondsPerQuestion, setSecondsPerQuestion] = useState(20);
  const [sessionQuestions, setSessionQuestions] = useState<SessionQuestion[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [shortAnswerText, setShortAnswerText] = useState('');
  const [showShortAnswer, setShowShortAnswer] = useState(false);
  const [shortAnswerAssessment, setShortAnswerAssessment] = useState<boolean | null>(null);
  const [timeLeft, setTimeLeft] = useState(20);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const availableQuestions = curriculum
    .filter((chapter) => chapterSelection === 'all' || chapter.id === Number(chapterSelection))
    .flatMap((chapter): SessionQuestion[] => quizMode === 'multiple-choice'
      ? chapter.quizQuestions.map((question) => ({ kind: 'multiple-choice', question }))
      : chapter.shortAnswerQuestions.map((question) => ({ kind: 'short-answer', question })));
  const currentItem = sessionQuestions[questionIndex];
  const questionLimit = questionCount === 'all' ? availableQuestions.length : Number(questionCount);
  const isStarted = sessionQuestions.length > 0;
  const isLocked = currentItem?.kind === 'short-answer'
    ? showShortAnswer || timeLeft === 0
    : selectedOptionId !== null || timeLeft === 0;

  useEffect(() => {
    if (!isStarted || isFinished || isLocked) return;

    const timer = window.setInterval(() => {
      setTimeLeft((remaining) => Math.max(remaining - 1, 0));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [isStarted, isFinished, isLocked]);

  const startQuiz = () => {
    const questions = shuffleQuestions(availableQuestions).slice(0, questionLimit);
    if (questions.length === 0) return;
    setSessionQuestions(questions);
    setQuestionIndex(0);
    setSelectedOptionId(null);
    setShortAnswerText('');
    setShowShortAnswer(false);
    setShortAnswerAssessment(null);
    setTimeLeft(secondsPerQuestion);
    setScore(0);
    setCorrectCount(0);
    setStreak(0);
    setIsFinished(false);
  };

  const selectAnswer = (optionId: string) => {
    if (currentItem?.kind !== 'multiple-choice' || isLocked) return;
    setSelectedOptionId(optionId);

    if (optionId === currentItem.question.correctOptionId) {
      setScore((currentScore) => currentScore + 1000 + timeLeft * 50 + streak * 100);
      setCorrectCount((count) => count + 1);
      setStreak((currentStreak) => currentStreak + 1);
    } else {
      setStreak(0);
    }
  };

  const revealShortAnswer = () => {
    if (shortAnswerText.trim()) setShowShortAnswer(true);
  };

  const assessShortAnswer = (mastered: boolean) => {
    if (shortAnswerAssessment !== null) return;
    setShortAnswerAssessment(mastered);
    if (mastered) {
      setScore((currentScore) => currentScore + 1000 + timeLeft * 50 + streak * 100);
      setCorrectCount((count) => count + 1);
      setStreak((currentStreak) => currentStreak + 1);
    } else {
      setStreak(0);
    }
  };

  const nextQuestion = () => {
    if (questionIndex + 1 >= sessionQuestions.length) {
      setIsFinished(true);
      return;
    }
    setQuestionIndex((index) => index + 1);
    setSelectedOptionId(null);
    setShortAnswerText('');
    setShowShortAnswer(false);
    setShortAnswerAssessment(null);
    setTimeLeft(secondsPerQuestion);
  };

  if (isFinished) {
    return (
      <section className="mx-auto max-w-3xl rounded-xl border border-white/10 bg-card-base p-6 text-center sm:p-10">
        <Trophy className="mx-auto mb-4 h-10 w-10 text-accent-amber" />
        <p className="font-mono-sci text-xs uppercase text-accent-mint">Kuis Selesai</p>
        <h1 className="mt-2 text-3xl font-bold text-text-primary">{score.toLocaleString('id-ID')} poin</h1>
        <p className="mt-2 text-sm text-text-secondary">{correctCount} benar dari {sessionQuestions.length} soal</p>
        <div className="mx-auto mt-6 h-2 max-w-sm overflow-hidden rounded-full bg-canvas-base">
          <div className="h-full bg-accent-primary" style={{ width: `${(correctCount / sessionQuestions.length) * 100}%` }} />
        </div>
        <button onClick={startQuiz} className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent-primary px-5 py-3 text-sm font-bold text-canvas-base hover:bg-accent-mint">
          <RotateCcw className="h-4 w-4" /> Main Lagi
        </button>
      </section>
    );
  }

  if (isStarted && currentItem) {
    const question = currentItem.question;
    const chapter = curriculum.find((item) => item.id === question.chapterId);
    const isMultipleChoice = currentItem.kind === 'multiple-choice';
    const options = currentItem.kind === 'multiple-choice' ? currentItem.question.options : [];
    const correctOptionId = currentItem.kind === 'multiple-choice' ? currentItem.question.correctOptionId : null;
    const isCorrectAnswer = correctOptionId !== null && selectedOptionId === correctOptionId;
    const answerExplanation = currentItem.kind === 'short-answer' ? currentItem.question.answer : currentItem.question.explanation;
    const shortAnswerReadyForNext = currentItem.kind === 'short-answer'
      && (shortAnswerAssessment !== null || timeLeft === 0);

    return (
      <section className="mx-auto max-w-5xl">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-white/10 bg-card-base px-4 py-3">
          <div className="flex items-center gap-3 text-xs font-mono-sci text-text-secondary">
            <span>SOAL {questionIndex + 1}/{sessionQuestions.length}</span>
            <span className="text-accent-mint">{chapter?.title}</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono-sci">
            <span className="text-accent-amber">Streak {streak}</span>
            <span className="text-text-primary">{score.toLocaleString('id-ID')} poin</span>
            <span className={`flex items-center gap-1 ${timeLeft <= 5 ? 'text-accent-danger' : 'text-accent-mint'}`}>
              <Clock3 className="h-3.5 w-3.5" /> {timeLeft}s
            </span>
          </div>
        </div>

        <div className="mb-5 h-1.5 overflow-hidden rounded-full bg-card-base">
          <div className={`h-full transition-all duration-1000 ${timeLeft <= 5 ? 'bg-accent-danger' : 'bg-accent-primary'}`} style={{ width: `${(timeLeft / secondsPerQuestion) * 100}%` }} />
        </div>

        <div className="rounded-xl border border-white/10 bg-card-base px-5 py-8 text-center sm:px-10 sm:py-12">
          <p className="text-xs font-mono-sci uppercase tracking-wider text-text-muted">{question.subchapterRef ? `Subbab ${question.subchapterRef}` : 'Klimatologi'}</p>
          <h1 className="mx-auto mt-4 max-w-3xl text-xl font-bold leading-relaxed text-text-primary sm:text-3xl">{question.question}</h1>
        </div>

        {isMultipleChoice ? (
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {options.map((option, index) => {
            const { Icon, color } = answers[index];
            const isSelected = selectedOptionId === option.id;
              const isCorrect = option.id === correctOptionId;
            const resultColor = isLocked
              ? isCorrect ? 'bg-emerald-600' : isSelected ? 'bg-rose-700' : 'bg-card-elevated opacity-50'
              : color;

            return (
              <button
                key={option.id}
                onClick={() => selectAnswer(option.id)}
                disabled={isLocked}
                aria-pressed={isSelected}
                className={`flex min-h-24 items-center gap-4 rounded-xl px-5 py-4 text-left text-sm font-bold text-white transition-transform disabled:cursor-default sm:min-h-28 sm:px-7 sm:text-base ${resultColor} ${!isLocked ? 'hover:-translate-y-0.5 hover:brightness-110' : ''}`}
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span>{option.text}</span>
                {isLocked && isCorrect && <Check className="ml-auto h-5 w-5 shrink-0" />}
                {isSelected && !isCorrect && <X className="ml-auto h-5 w-5 shrink-0" />}
              </button>
            );
          })}
          </div>
        ) : (
          <div className="mt-4 rounded-xl border border-white/10 bg-card-base p-4 sm:p-6">
            <label htmlFor="short-answer" className="mb-3 block text-sm font-semibold text-text-primary">Tulis jawabanmu</label>
            <textarea
              id="short-answer"
              value={shortAnswerText}
              onChange={(event) => setShortAnswerText(event.target.value)}
              disabled={showShortAnswer || timeLeft === 0}
              rows={4}
              placeholder="Susun jawaban singkat dan sertakan satuan bila diperlukan..."
              className="w-full resize-y rounded-lg border border-white/10 bg-canvas-base p-3 text-sm leading-relaxed text-text-primary placeholder:text-text-muted focus:border-accent-primary focus:outline-none"
            />
            {!showShortAnswer && timeLeft > 0 && (
              <button onClick={revealShortAnswer} disabled={!shortAnswerText.trim()} className="mt-3 rounded-lg bg-accent-primary px-5 py-3 text-sm font-bold text-canvas-base hover:bg-accent-mint disabled:cursor-not-allowed disabled:opacity-50">
                Tampilkan Kunci
              </button>
            )}
            {isLocked && (
              <div className="mt-4 border-t border-white/10 pt-4">
                <p className="text-xs font-mono-sci uppercase text-accent-mint">Kunci Jawaban</p>
                <p className="mt-2 text-sm leading-relaxed text-text-body">{answerExplanation}</p>
                {timeLeft > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button onClick={() => assessShortAnswer(true)} disabled={shortAnswerAssessment !== null} className="rounded-lg border border-accent-primary/40 px-4 py-2.5 text-sm font-semibold text-accent-mint hover:bg-accent-primary/10 disabled:opacity-50">Saya menguasai</button>
                    <button onClick={() => assessShortAnswer(false)} disabled={shortAnswerAssessment !== null} className="rounded-lg border border-accent-danger/40 px-4 py-2.5 text-sm font-semibold text-red-300 hover:bg-accent-danger/10 disabled:opacity-50">Perlu diulang</button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {isLocked && isMultipleChoice && (
          <div className="mt-4 flex flex-col gap-4 rounded-xl border border-white/10 bg-card-base p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
            <div>
              <p className={`text-sm font-bold ${timeLeft === 0 && selectedOptionId === null ? 'text-accent-amber' : isCorrectAnswer ? 'text-accent-primary' : 'text-accent-danger'}`}>
                {timeLeft === 0 && selectedOptionId === null ? 'Waktu habis' : isCorrectAnswer ? 'Tepat!' : 'Belum tepat'}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-text-secondary">{answerExplanation}</p>
            </div>
            <button onClick={nextQuestion} className="shrink-0 rounded-lg bg-accent-primary px-5 py-3 text-sm font-bold text-canvas-base hover:bg-accent-mint">
              {questionIndex + 1 === sessionQuestions.length ? 'Lihat Hasil' : 'Soal Berikutnya'}
            </button>
          </div>
        )}
        {shortAnswerReadyForNext && (
          <div className="mt-4 flex flex-col gap-3 rounded-xl border border-white/10 bg-card-base p-4 sm:flex-row sm:items-center sm:justify-between">
            <p className={`text-sm font-bold ${timeLeft === 0 ? 'text-accent-amber' : shortAnswerAssessment ? 'text-accent-primary' : 'text-accent-danger'}`}>
              {timeLeft === 0 ? 'Waktu habis' : shortAnswerAssessment ? 'Ditandai sudah dikuasai' : 'Ditandai untuk diulang'}
            </p>
            <button onClick={nextQuestion} className="rounded-lg bg-accent-primary px-5 py-3 text-sm font-bold text-canvas-base hover:bg-accent-mint">
              {questionIndex + 1 === sessionQuestions.length ? 'Lihat Hasil' : 'Soal Berikutnya'}
            </button>
          </div>
        )}
      </section>
    );
  }

  const availablePresets = [5, 10, 20, 30].filter((count) => count < availableQuestions.length);

  return (
    <section className="mx-auto max-w-4xl">
      <header className="mb-7">
        <p className="font-mono-sci text-xs uppercase tracking-widest text-accent-mint">Latihan Interaktif · SAR 1211</p>
        <h1 className="mt-2 text-3xl font-bold text-text-primary sm:text-4xl">Kuis Klimatologi</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">Jawab sebelum waktu habis. Kecepatan dan streak jawaban benar menambah poin.</p>
      </header>

      <div className="space-y-6 rounded-xl border border-white/10 bg-card-base p-5 sm:p-7">
        <fieldset>
          <legend className="mb-3 text-sm font-bold text-text-primary">Tipe Soal</legend>
          <div className="grid grid-cols-2 gap-2 rounded-lg bg-canvas-base p-1 sm:max-w-sm">
            {([
              ['multiple-choice', 'Pilihan Ganda'],
              ['short-answer', 'Isian Singkat'],
            ] as const).map(([mode, label]) => (
              <button
                key={mode}
                onClick={() => { setQuizMode(mode); setQuestionCount('all'); setSecondsPerQuestion(mode === 'short-answer' ? 60 : 20); }}
                aria-pressed={quizMode === mode}
                className={`rounded-md px-3 py-2.5 text-sm font-semibold transition-colors ${quizMode === mode ? 'bg-accent-primary text-canvas-base' : 'text-text-secondary hover:text-text-primary'}`}
              >
                {label}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-3 text-sm font-bold text-text-primary">Pilih Bab</legend>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => { setChapterSelection('all'); setQuestionCount('all'); }} className={`rounded-lg border px-4 py-2.5 text-sm font-semibold ${chapterSelection === 'all' ? 'border-accent-primary bg-accent-primary/10 text-accent-mint' : 'border-white/10 text-text-secondary hover:bg-white/5'}`}>
              Semua bab
            </button>
            {curriculum.map((chapter) => (
              <button key={chapter.id} onClick={() => { setChapterSelection(String(chapter.id)); setQuestionCount('all'); }} className={`rounded-lg border px-4 py-2.5 text-sm font-semibold ${chapterSelection === String(chapter.id) ? 'border-accent-primary bg-accent-primary/10 text-accent-mint' : 'border-white/10 text-text-secondary hover:bg-white/5'}`}>
                Bab {chapter.id}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-3 text-sm font-bold text-text-primary">Jumlah Soal</legend>
          <div className="flex flex-wrap gap-2">
            {availablePresets.map((count) => (
              <button key={count} onClick={() => setQuestionCount(String(count))} className={`rounded-lg border px-4 py-2.5 text-sm font-semibold ${questionCount === String(count) ? 'border-accent-primary bg-accent-primary/10 text-accent-mint' : 'border-white/10 text-text-secondary hover:bg-white/5'}`}>
                {count} soal
              </button>
            ))}
            <button onClick={() => setQuestionCount('all')} className={`rounded-lg border px-4 py-2.5 text-sm font-semibold ${questionCount === 'all' ? 'border-accent-primary bg-accent-primary/10 text-accent-mint' : 'border-white/10 text-text-secondary hover:bg-white/5'}`}>
              Semua soal ({availableQuestions.length})
            </button>
          </div>
          <p className="mt-2 text-xs text-text-muted">Tersedia {availableQuestions.length} soal untuk pilihan bab ini.</p>
        </fieldset>

        <fieldset>
          <legend className="mb-3 text-sm font-bold text-text-primary">Waktu per Soal</legend>
          <div className="flex flex-wrap gap-2">
            {(quizMode === 'short-answer' ? [30, 60, 90] : [15, 20, 30]).map((seconds) => (
              <button key={seconds} onClick={() => setSecondsPerQuestion(seconds)} className={`rounded-lg border px-4 py-2.5 text-sm font-semibold ${secondsPerQuestion === seconds ? 'border-accent-primary bg-accent-primary/10 text-accent-mint' : 'border-white/10 text-text-secondary hover:bg-white/5'}`}>
                {seconds} detik {seconds === (quizMode === 'short-answer' ? 60 : 20) ? '(standar)' : ''}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center">
          <button onClick={startQuiz} disabled={availableQuestions.length === 0} className="rounded-lg bg-accent-primary px-6 py-3.5 text-sm font-bold text-canvas-base hover:bg-accent-mint disabled:cursor-not-allowed disabled:opacity-50">
            Mulai Kuis
          </button>
          <span className="text-xs text-text-secondary">{availableQuestions.length} soal siap dimainkan</span>
        </div>
      </div>
    </section>
  );
}