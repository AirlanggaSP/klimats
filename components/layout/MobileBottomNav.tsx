'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Brain, ClipboardList, FileText } from 'lucide-react';

interface MobileBottomNavProps {
  chapterId?: number;
}

const links = [
  { label: 'Materi', href: (chapterId: number) => `/bab/${chapterId}`, icon: BookOpen, matches: (pathname: string) => pathname.startsWith('/bab/') },
  { label: 'Flashcard', href: (chapterId: number) => `/bab/${chapterId}#flashcard`, icon: Brain, matches: () => false },
  { label: 'Kuis', href: () => '/kuis', icon: ClipboardList, matches: (pathname: string) => pathname.startsWith('/kuis') },
  { label: 'Cheat Sheet', href: () => '/cheat-sheet', icon: FileText, matches: (pathname: string) => pathname.startsWith('/cheat-sheet') },
];

export default function MobileBottomNav({ chapterId = 1 }: MobileBottomNavProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Navigasi utama" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-4 border-t border-white/10 bg-surface-panel/95 px-2 pb-[env(safe-area-inset-bottom)] pt-2 backdrop-blur lg:hidden">
      {links.map(({ label, href, icon: Icon, matches }) => {
        const active = matches(pathname);
        return (
          <Link
            key={label}
            href={href(chapterId)}
            aria-current={active ? 'page' : undefined}
            className={`flex min-h-12 flex-col items-center justify-center gap-1 text-[10px] ${active ? 'text-accent-primary' : 'text-text-muted'}`}
          >
            <Icon className="h-4 w-4" />
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}