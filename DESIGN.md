# DESIGN.md — Bio-Informatics Dark Design System Specification
## AgroLearn Hub / Dasprog Interactive Learning Engine

Dokumen ini adalah **Single Source of Truth** untuk seluruh token visual, aturan layout, tipografi, dan arsitektur komponen antarmuka. Digunakan oleh Autonomous Agents (Claude Code, Cursor Composer, Windsurf Cascade, v0, Bolt) untuk memastikan 100% kepatuhan estetika dan nihil *design slop*.

---

## 1. Brand Identity & Filosofi Visual
- **Nama Gaya:** *Bio-Informatics Dark* (Scientific & Computational Learning)
- **Karakter:** Dingin, akademis, presisi tinggi, modern, minim distraksi, minim dekorasi tak bernilai (*zero design slop*).
- **Inspirasi:** Antarmuka bio-informatika, terminal sekuensing DNA, instrumentasi satelit agro-klimatologi, serta IDE komputasi saintifik modern.

---

## 2. Color System & Semantic Palette

Semua warna menggunakan model dark-mode berjenjang (*elevation by shade*) untuk membedakan kedalaman tanpa bayangan kabur berlebih.

### 2.1. Backgrounds & Containers
| Token Name | Hex Code | Semantic Role | Tailwind Utility |
|---|---|---|---|
| `canvas-base` | `#0b0f10` | Kanvas terdalam / root layout background | `bg-[#0b0f10]` |
| `surface-panel` | `#101415` | Panel sticky header, sticky sidebar navigasi, footer | `bg-[#101415]` |
| `card-base` | `#181c1d` | Kontainer kartu konten, sub-bab, widget, quiz card | `bg-[#181c1d]` |
| `card-elevated` | `#212628` | Hover state, kartu aktif, dropdown, modal backdrop | `bg-[#212628]` |
| `card-border` | `rgba(255, 255, 255, 0.08)` | Border default seluruh kontainer (1px halus) | `border-white/10` |
| `card-border-active` | `rgba(16, 185, 129, 0.35)` | Border saat card aktif, focused, atau hover | `border-emerald-500/35` |

### 2.2. Accent & Luminescence Lights
| Token Name | Hex Code | Semantic Role | Box Shadow Effect |
|---|---|---|---|
| `accent-primary` | `#10b981` | Emerald Green (Badge aktif, tombol utama, indikator sukses, progress) | `0 0 20px -3px rgba(16, 185, 129, 0.25)` |
| `accent-mint` | `#2dd4bf` | Mint Cyan (Tag sub-kategori, kode data, border aksen kedua) | `0 0 16px -3px rgba(45, 212, 191, 0.20)` |
| `accent-cyan` | `#06b6d4` | Soft Cyan (Header kolom tabel ke-3, terminal prompt) | — |
| `accent-amber` | `#f59e0b` | Amber/Gold (Streak flame 🔥, cheat sheet alert, skor warning) | `0 0 16px -3px rgba(245, 158, 11, 0.20)` |
| `accent-danger` | `#ef4444` | Red Alert (Opsi kuis salah, peringatan kritis) | `0 0 16px -3px rgba(239, 68, 68, 0.20)` |

### 2.3. Text Hierarchy & Foreground
| Token Name | Hex Code | Penggunaan |
|---|---|---|
| `text-primary` | `#ffffff` | Judul bab (H1), judul sub-bab (H2), nilai kalkulator utama |
| `text-body` | `#e2e8f0` / `#cbd5e1` | Paragraf penjelasan materi, opsi kuis, pertanyaan flashcard |
| `text-secondary` | `#94a3b8` | Subtitle bab, deskripsi singkat, label parameter tabel |
| `text-muted` | `#64748b` | Copyright, keyboard shortcut badge (`Spasi / Ketuk`), footnote slide |
| `text-code-accent` | `#34d399` | Variabel kode, angka hasil evaluasi, pill status optimal |

---

## 3. Typography & Rhythm

### 3.1. Font Families
1. **Primary Sans (Body & Headings):**
   - Font: `Geist Sans`, `Inter`, atau `system-ui, sans-serif`
   - Headings H1: `font-bold tracking-tight text-white`
   - Headings H2: `font-semibold text-slate-100 tracking-normal`
   - Body: `font-normal text-slate-300 leading-relaxed text-sm`

2. **Monospace (Saintifik, Data & Metadata):**
   - Font: `Geist Mono`, `JetBrains Mono`, atau `Fira Code, monospace`
   - Wajib digunakan pada:
     - Nomor bab & sub-bab (`BAB 01`, `01.1`, `FIG 1.1`)
     - Tag slide rujukan (`Slide 03 · Modul Inti`)
     - Rumus matematis & cuplikan kode (`LR = ECw / (5 · ECe - ECw)`)
     - Angka pada tabel perbandingan (`20 – 30 °C`, `1.000 – 4.000 mm`)
     - Indikator skor kuis, waktu baca (`15 Menit Baca`), streak (`🔥 Streak: 3`)

---

## 4. Spacing, Borders & Radius Standards
- **Radius Card:** `rounded-xl` (12px) untuk semua card utama.
- **Radius Inner Elements:** `rounded-lg` (8px) untuk input, tombol, gambar inner, dan pre code blocks.
- **Radius Pills / Badges:** `rounded-full` atau `rounded-md` (6px) untuk tag slide monospace.
- **Border Stroke:** Wajib selalu 1px solid (`border border-white/10`). Dilarang memakai border tebal > 1px kecuali aksen garis kiri seleksi aktif (`border-l-2 border-emerald-500`).

---

## 5. Layout Architecture (Dual-Column Responsive)

```text
+-----------------------------------------------------------------------------------+
| TopHeader: Logo [LH] | Course Code [SAR 1211] | Module Title | Progress Bar (14%) |
+-----------------------------------------------------------------------------------+
| Left Sidebar (w-64)   | Central Stream (max-w-3xl)          | Right Sidebar (w-80) |
| - Persistent Module   | - Chapter Hero Banner               | - Dynamic Widget     |
|   List (Bab 1 - 7)    | - Subchapter 01.1 + FigureCard      |   (Reactive Calc)    |
| - Active Glow Pill    | - Comparison Table (Markdown/Table) | - FlashcardDeck      |
| - Completion Checks   | - Subchapter 01.2 ...               |   (Flip + Confetti)  |
|                       | - ChapterQuizSection (Interactive)  | - Exam Cheat Sheet   |
|                       | - Action Footer (Selesai / Next)    |   (Must-know stats)  |
+-----------------------------------------------------------------------------------+
```

- **Desktop (>= 1280px):** 3-kolom penuh (Navigasi Kiri + Stream Utama + Right Interactive Sidebar).
- **Laptop (1024px - 1279px):** 2-kolom (Navigasi Kiri + Stream Utama), widget interaktif diakomodasi di bawah materi.
- **Mobile (< 1024px):** Single column responsif dengan segment toggle ("Materi Teori" vs "Kuis & Flashcard") dan sticky action bar di bawah.

---

## 6. Micro-Interactions & Behavioral Rules
1. **Flashcard Flip:** 
   - Klik kartu atau tekan `Spacebar` membalik sisi depan (Pertanyaan) dan sisi belakang (Jawaban).
   - Tombol "Hafal" memicu letupan *canvas-confetti* dan menambah *streak counter*.
2. **Kuis Interaktif:**
   - Jawaban benar: tombol berubah hijau neon (`border-emerald-500 bg-emerald-500/15 text-emerald-300`), ikon centang, dan letupan confetti.
   - Jawaban salah: tombol berubah merah (`border-red-500 bg-red-500/15 text-red-300`), kunci jawaban asli disorot, dan kotak pembahasan ilmiah otomatis muncul di bawah.
3. **Kalkulator Rumus:**
   - Input reaktif seketika mengkalkulasi output tanpa tombol "Submit" (*live reactive state*).
