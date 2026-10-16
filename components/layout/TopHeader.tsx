'use client';

import React from 'react';
import { ChevronDown, CloudSun } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface TopHeaderProps {
  courseCode: string;
  progress: number;
  chapterId?: number;
}

const navigation = [
  { label: 'Materi', href: (chapterId: number) => `/bab/${chapterId}`, matches: (pathname: string) => pathname.startsWith('/bab/') },
  { label: 'Kuis', href: () => '/kuis', matches: (pathname: string) => pathname.startsWith('/kuis') },
  { label: 'Cheat Sheet', href: () => '/cheat-sheet', matches: (pathname: string) => pathname.startsWith('/cheat-sheet') },
];

export default function TopHeader({ courseCode, progress, chapterId = 1 }: TopHeaderProps) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full min-h-16 bg-surface-panel border-b border-white/10 flex items-center justify-between gap-4 px-4 sm:px-6">
      <div className="flex shrink-0 items-center gap-3">
        <div className="bg-accent-primary/10 p-2 rounded-lg">
          <CloudSun className="w-5 h-5 text-accent-primary" />
        </div>
        <div className="leading-tight">
          <div className="text-sm font-bold text-text-primary uppercase">Klimatologi</div>
          <div className="mt-1 text-[10px] font-mono-sci text-accent-mint uppercase">{courseCode} · UTS 2025</div>
        </div>
      </div>

      <nav aria-label="Navigasi materi" className="hidden items-center gap-6 sm:flex">
        {navigation.map((item) => (
          <Link
            key={item.label}
            href={item.href(chapterId)}
            aria-current={item.matches(pathname) ? 'page' : undefined}
            className={`text-xs font-medium transition-colors ${item.matches(pathname) ? 'text-accent-primary' : 'text-text-secondary hover:text-text-primary'}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <details className="relative sm:hidden">
        <summary className="flex cursor-pointer list-none items-center gap-1 text-xs font-medium text-text-secondary">
          Menu <ChevronDown className="h-3.5 w-3.5" />
        </summary>
        <nav aria-label="Navigasi materi" className="absolute left-1/2 top-full z-50 mt-3 flex min-w-36 -translate-x-1/2 flex-col rounded-lg border border-white/10 bg-card-elevated p-1 shadow-xl">
          {navigation.map((item) => (
            <Link key={item.label} href={item.href(chapterId)} className="rounded-md px-3 py-2 text-xs text-text-secondary hover:bg-white/5 hover:text-text-primary">
              {item.label}
            </Link>
          ))}
        </nav>
      </details>

      <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-canvas-base px-2 py-2 sm:gap-2 sm:px-3">
        <span className="h-2 w-2 rounded-full bg-accent-primary" />
        <span className="hidden text-[10px] font-mono-sci uppercase text-text-secondary sm:inline">Progress</span>
        <span className="text-xs font-mono-sci text-text-primary">{progress}%</span>
      </div>
    </header>
  );
}
