'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Circle } from 'lucide-react';
import { curriculum } from '@/data/curriculum';

export default function DesktopSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex w-64 h-[calc(100vh-64px)] bg-surface-panel border-r border-white/10 flex-col sticky top-16">
      <div className="p-6">
        <div className="text-xs font-mono-sci text-text-muted uppercase tracking-widest mb-4">Module Index</div>
        <nav className="space-y-2">
          {curriculum.map((chapter) => {
            const isActive = pathname === `/bab/${chapter.id}`;
            return (
              <Link
                key={chapter.id}
                href={`/bab/${chapter.id}`}
                className={`group flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-accent-primary/10 border-l-2 border-accent-primary text-text-primary'
                    : 'text-text-secondary hover:bg-white/5 hover:text-text-body border-l-2 border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-mono-sci ${isActive ? 'text-accent-primary' : 'text-text-muted'}`} >
                    BAB {String(chapter.id).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-medium truncate max-w-[140px]">{chapter.title}</span>
                </div>
                {/* Placeholder for completion check */}
                <Circle className={`w-4 h-4 ${isActive ? 'text-accent-primary' : 'text-text-muted opacity-50'}`} />
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-white/10">
        <div className="bg-canvas-base p-4 rounded-xl border border-white/5">
          <div className="text-xs font-mono-sci text-text-secondary mb-2">Status: Learning</div>
          <div className="flex items-center gap-2 text-accent-mint">
            <div className="w-2 h-2 bg-accent-mint rounded-full animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-tighter">Active Session</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
