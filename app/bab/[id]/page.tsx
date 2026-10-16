import { curriculum } from '@/data/curriculum';
import TopHeader from '@/components/layout/TopHeader';
import DesktopSidebar from '@/components/layout/DesktopSidebar';
import MobileBottomNav from '@/components/layout/MobileBottomNav';
import FigureCard from '@/components/content/FigureCard';
import MarkdownContent from '@/components/content/MarkdownContent';
import DynamicWidget from '@/components/interactive/DynamicWidget';
import FlashcardDeck from '@/components/interactive/FlashcardDeck';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return curriculum.map((chapter) => ({
    id: chapter.id.toString(),
  }));
}

export default function ChapterPage({ params }: { params: { id: string } }) {
  const chapter = curriculum.find(c => c.id === parseInt(params.id));

  if (!chapter) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-canvas-base text-text-body font-sans">
      <TopHeader
        courseCode={chapter.courseCode}
        progress={14} // Placeholder progress
        chapterId={chapter.id}
      />

      <div className="flex">
        <DesktopSidebar />

        <main className="flex-1 max-w-7xl mx-auto w-full px-4 pt-6 pb-24 sm:px-8 sm:pt-8 sm:pb-24 lg:px-12 lg:py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">

            {/* Central Stream (Col 1-8) */}
            <div className="lg:col-span-8 space-y-12">
              <section id="materi" className="scroll-mt-20 space-y-4">
                <h1 className="text-3xl font-bold text-text-primary tracking-tight sm:text-4xl">{chapter.title}</h1>
                <p className="text-base text-text-secondary leading-relaxed sm:text-xl">{chapter.subtitle}</p>
                <div className="flex items-center gap-4 text-xs font-mono-sci text-text-muted">
                  <span className="px-2 py-1 bg-canvas-base border border-white/10 rounded">Est. {chapter.durationMin} Min Read</span>
                </div>
              </section>

              <div className="space-y-16">
                {chapter.subchapters.map(sub => (
                  <section key={sub.id} className="space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono-sci text-accent-primary font-bold">{sub.num}</span>
                      <h2 className="text-2xl font-semibold text-text-primary">{sub.title}</h2>
                    </div>

                    <MarkdownContent content={sub.contentMarkdown} />

                    {sub.figureRefId && (
                      <FigureCard figure={chapter.figures.find(f => f.id === sub.figureRefId)!} />
                    )}

                  </section>
                ))}
              </div>

            </div>

            {/* Right Sidebar (Col 9-12) */}
            <div className="lg:col-span-4 space-y-8">
              <div className="space-y-8 lg:sticky lg:top-24">
                <DynamicWidget widget={chapter.widget} />
                <div id="flashcard" className="scroll-mt-20">
                  <FlashcardDeck cards={chapter.flashcards} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <MobileBottomNav chapterId={chapter.id} />
    </div>
  );
}
