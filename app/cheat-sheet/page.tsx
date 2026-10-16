import { BookOpen, FileText, Layers3 } from 'lucide-react';
import { curriculum } from '@/data/curriculum';
import MobileBottomNav from '@/components/layout/MobileBottomNav';
import TopHeader from '@/components/layout/TopHeader';

const comparisonTables = curriculum.flatMap((chapter) =>
  chapter.subchapters
    .filter((subchapter) => subchapter.tableHeaders && subchapter.tableData)
    .map((subchapter) => ({ chapter, subchapter })),
);

const concepts = curriculum.flatMap((chapter) =>
  chapter.subchapters.map((subchapter) => ({ chapter, subchapter })),
);

const factCount = curriculum.reduce((count, chapter) => count + chapter.cheatSheetHighlights.length, 0);
const toPlainText = (text: string) => text.replace(/\*\*|\*|`/g, '');

export default function CheatSheetPage() {
  return (
    <div className="min-h-screen bg-canvas-base pb-20 text-text-body lg:pb-0">
      <TopHeader courseCode="SAR 1211" progress={14} />
      <main className="mx-auto max-w-6xl px-4 py-7 sm:px-8 sm:py-10">
        <header className="mb-7 border-b border-white/10 pb-6">
          <p className="font-mono-sci text-xs uppercase tracking-widest text-accent-mint">SAR 1211 · Referensi UTS</p>
          <h1 className="mt-2 text-3xl font-bold text-text-primary sm:text-4xl">Cheat Sheet Klimatologi</h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text-secondary sm:text-base">Ringkasan angka kunci, perbandingan, dan istilah penting dari tujuh bab materi.</p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs font-mono-sci text-text-secondary">
            <span className="rounded-md border border-white/10 bg-card-base px-3 py-2">{curriculum.length} BAB</span>
            <span className="rounded-md border border-white/10 bg-card-base px-3 py-2">{factCount} POIN KUNCI</span>
            <span className="rounded-md border border-white/10 bg-card-base px-3 py-2">{comparisonTables.length} TABEL</span>
          </div>
        </header>

        <div className="grid gap-4 lg:grid-cols-2">
          <section className="rounded-xl border border-white/10 bg-card-base p-5 sm:p-6">
            <h2 className="mb-5 flex items-center gap-2 text-base font-bold text-text-primary">
              <FileText className="h-4 w-4 text-accent-amber" /> Angka Wajib Dihafal
            </h2>
            <div className="space-y-5">
              {curriculum.map((chapter) => (
                <div key={chapter.id}>
                  <h3 className="mb-2 text-xs font-mono-sci uppercase text-accent-mint">Bab {chapter.id} · {chapter.title}</h3>
                  <ul className="space-y-2">
                    {chapter.cheatSheetHighlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2 text-sm leading-relaxed text-text-body">
                        <span className="mt-0.5 text-accent-primary">•</span><span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-card-base p-5 sm:p-6">
            <h2 className="mb-5 flex items-center gap-2 text-base font-bold text-text-primary">
              <Layers3 className="h-4 w-4 text-accent-mint" /> Konsep yang Sering Dibandingkan
            </h2>
            <div className="space-y-3">
              {comparisonTables.map(({ chapter, subchapter }) => (
                <details key={`${chapter.id}-${subchapter.id}`} className="group rounded-lg border border-white/10 bg-canvas-base">
                  <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-text-body marker:hidden">
                    <span className="mr-2 font-mono-sci text-xs text-accent-mint">{subchapter.num}</span>
                    {subchapter.title}
                  </summary>
                  <div className="overflow-x-auto border-t border-white/10">
                    <table className="w-full min-w-[420px] text-left text-xs">
                      <thead className="text-text-secondary">
                        <tr>
                          {subchapter.tableHeaders?.filter(Boolean).map((header) => <th key={header} className="px-3 py-2 font-semibold">{header}</th>)}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {subchapter.tableData?.map((row) => {
                          const values = [row.parameter, row.col1, row.col2, row.col3];
                          return (
                            <tr key={`${row.parameter}-${row.col1}`}>
                              {subchapter.tableHeaders?.filter(Boolean).map((_, index) => (
                                <td key={index} className="px-3 py-2.5 align-top text-text-body">{values[index]}</td>
                              ))}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </details>
              ))}
              {comparisonTables.length === 0 && <p className="text-sm text-text-secondary">Belum ada tabel perbandingan.</p>}
            </div>
          </section>
        </div>

        <section className="mt-4 rounded-xl border border-white/10 bg-card-base p-5 sm:p-6">
          <h2 className="mb-5 flex items-center gap-2 text-base font-bold text-text-primary">
            <BookOpen className="h-4 w-4 text-accent-cyan" /> Glosarium Istilah Teknis
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[540px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs font-mono-sci uppercase text-text-secondary">
                  <th className="px-3 py-3">Istilah</th>
                  <th className="px-3 py-3">Makna Singkat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {concepts.map(({ chapter, subchapter }) => (
                  <tr key={`${chapter.id}-${subchapter.id}`}>
                    <th scope="row" className="w-1/3 px-3 py-3 align-top font-semibold text-text-primary">{subchapter.title}</th>
                    <td className="px-3 py-3 align-top leading-relaxed text-text-secondary">{toPlainText(subchapter.contentMarkdown)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <MobileBottomNav />
    </div>
  );
}