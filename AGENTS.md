# AGENTS.md — Autonomous AI Agent Operational Protocol
## For Claude Code, Cursor Composer, Windsurf Cascade, Bolt, & Codex

Dokumen ini adalah **instruksi eksekusi mutlak** bagi Autonomous Agents yang bekerja pada repositori ini. Setiap agent yang menginisialisasi atau memodifikasi kode **wajib** mengikuti protokol dan batasan di bawah ini.

---

## 1. Role & Identity
Anda adalah **Lead Frontend Architect & Autonomous Bio-Informatics Systems Engineer**. Misi Anda adalah memproduksi kode Next.js 14 App Router yang bersih, bebas bug, bertipe ketat (strict TypeScript), berkinerja tinggi, dan identik 100% dengan standar estetika `DESIGN.md`.

---

## 2. Hard Constraints & Negative Rules (Inviolable)
1. **NO DESIGN SLOP:**
   - Dilarang keras menghasilkan komponen dengan warna latar putih terang, border abu-abu pucat tipis tanpa kontras, atau gradient generik AI.
   - Seluruh elemen harus patuh pada `DESIGN.md`: Canvas `#0b0f10`, Panel `#101415`, Card `#181c1d`, Aksen `#10b981`.
2. **NO TYPESCRIPT `any`:**
   - Seluruh data wajib mengacu pada interface di `@/types/content.ts`. Dilarang menggunakan tipe `any`, cast implisit, atau mengabaikan `@ts-ignore`.
3. **NO BROKEN ASSETS / 404 IMAGES:**
   - Jika file gambar lokal (`.webp`/`.png`) belum tersedia, gunakan inline SVG vector component berlatar pekat (`#0b0f10`) dengan garis neon emerald/cyan dan label teks tajam sehingga seluruh kartu `FigureCard` dapat ter-render 100% tanpa placeholder rusak.
4. **NO HYDRATION ERRORS:**
   - Komponen dengan `useState`, `useEffect`, `window`, atau event listener (seperti `DynamicWidget`, `FlashcardDeck`, `ChapterQuizSection`) **wajib** memiliki direktif `'use client';` di baris pertama file.
5. **SINGLE SOURCE OF TRUTH:**
   - Seluruh isi materi 7 bab, kuis, rumus, dan flashcard wajib berada di `data/curriculum.ts`. Dilarang melakukan *hardcode* teks materi langsung di dalam file `app/bab/[id]/page.tsx`.

---

## 3. Directory Layout & File Contracts

Agent harus memastikan struktur file tersusun persis seperti ini:

```text
.
├── DESIGN.md                        # Master token & visual language
├── AGENTS.md                        # Agent execution protocol (file ini)
├── .cursorrules                     # Cursor/Windsurf agent guardian
├── types/
│   └── content.ts                   # Strict interfaces (QuizQuestion, FigureItem, ChapterModule)
├── data/
│   └── curriculum.ts                # Master 7-chapter database
├── components/
│   ├── layout/
│   │   ├── TopHeader.tsx            # Header bar with live course progress
│   │   └── DesktopSidebar.tsx       # 7-chapter navigation list with active indicators
│   ├── content/
│   │   └── FigureCard.tsx           # 16:9 scientific diagram card with slide source badge
│   └── interactive/
│       ├── DynamicWidget.tsx        # Reactive formula calculator with Python code preview
│       ├── FlashcardDeck.tsx        # Flip flashcard with spacebar listener & streak
│       └── ChapterQuizSection.tsx   # MCQ with instant emerald/red feedback & explanations
├── app/
│   ├── layout.tsx                   # Root layout, dark base background, fonts
│   ├── globals.css                  # Custom minimalist scrollbar & Tailwind setup
│   ├── page.tsx                     # Redirect to /bab/1
│   └── bab/
│       └── [id]/
│           └── page.tsx             # SSG renderer using generateStaticParams()
├── tailwind.config.ts
└── tsconfig.json
```

---

## 4. Autonomous Verification & Self-Correction Protocol

Sebelum menyelesaikan sesi, agent harus menjalankan prosedur validasi berikut di terminal secara mandiri:

1. **Type Check & Build Validation:**
   ```bash
   npm run build
   ```
   Jika ditemukan error tipe TypeScript atau Next.js page generation error, baca error trace dan perbaiki file terkait seketika.
2. **SSG Route Verification:**
   Pastikan `generateStaticParams()` di `app/bab/[id]/page.tsx` menghasilkan seluruh parameter ID bab (contoh: `[{ id: '1' }, { id: '2' }, ... { id: '7' }]`).
3. **Interactive Component Reactivity:**
   Pastikan interaksi berikut tidak melempar runtime exception:
   - Klik opsi kuis -> feedback visual warna + pembukaan pembahasan ilmiah.
   - Ketuk / Spasi flashcard -> transisi flip 180° / perubahan sisi Pertanyaan -> Jawaban.
   - Ubah input kalkulator numerik -> nilai kalkulasi langsung terevaluasi secara reaktif.
4. **Git Safety:**
   Agent dapat melakukan commit dengan format commit konvensional:
   `git commit -m "feat(core): scaffold bio-informatics interactive learning hub"`

---

## 5. Content Schema Contract (`types/content.ts`)

```typescript
export interface QuizOption {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface QuizQuestion {
  id: string;
  chapterId: number;
  subchapterRef?: string;
  question: string;
  options: QuizOption[];
  correctOptionId: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  sourceRef?: string;
}

export interface FigureItem {
  id: string;
  figureNumber: string; // e.g. "FIG 1.1"
  sourceRef: string;    // e.g. "Slide 03 · Modul Inti"
  title: string;
  imageSrc: string;     // URL path or inline SVG data-uri
  altText: string;
}

export interface ComparisonTableRow {
  parameter: string;
  col1: string;
  col2: string;
  col3?: string;
}

export interface InteractiveWidget {
  type: 'calculator' | 'simulation';
  title: string;
  subtitle: string;
  formula: string;
  codeSnippet: string;
  inputs: {
    key: string;
    label: string;
    defaultValue: number;
    step?: number;
    min?: number;
    max?: number;
    unit?: string;
  }[];
  calcFn: (inputs: Record<string, number>) => {
    value: number | string;
    unit: string;
    status: string;
    isGood?: boolean;
  };
}

export interface FlashcardItem {
  id: string;
  chapterId: number;
  question: string;
  answer: string;
}

export interface SubchapterItem {
  id: string;
  num: string;           // e.g. "01.1"
  title: string;
  contentMarkdown: string;
  figureRefId?: string;
  tableHeaders?: [string, string, string, string?];
  tableData?: ComparisonTableRow[];
}

export interface ChapterModule {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  durationMin: number;
  courseCode: string;
  instructorText: string;
  figures: FigureItem[];
  subchapters: SubchapterItem[];
  widget: InteractiveWidget;
  flashcards: FlashcardItem[];
  quizQuestions: QuizQuestion[];
  cheatSheetHighlights: string[];
}