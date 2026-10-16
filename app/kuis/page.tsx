import MobileBottomNav from '@/components/layout/MobileBottomNav';
import TopHeader from '@/components/layout/TopHeader';
import QuizExperience from '@/components/interactive/QuizExperience';

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-canvas-base pb-20 text-text-body lg:pb-0">
      <TopHeader courseCode="SAR 1211" progress={14} />
      <main className="px-4 py-7 sm:px-8 sm:py-10">
        <QuizExperience />
      </main>
      <MobileBottomNav />
    </div>
  );
}