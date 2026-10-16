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

export interface ShortAnswerQuestion {
  id: string;
  chapterId: number;
  subchapterRef?: string;
  question: string;
  answer: string;
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
  calcId: string; // Replace calcFn with calcId for serialization
  inputs: {
    key: string;
    label: string;
    defaultValue: number;
    step?: number;
    min?: number;
    max?: number;
    unit?: string;
  }[];
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
  shortAnswerQuestions: ShortAnswerQuestion[];
  cheatSheetHighlights: string[];
}
