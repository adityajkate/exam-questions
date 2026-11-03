export interface Question {
  id: string;
  number: number;
  text: string;
  cleanText: string;
  marks: 5 | 10;
  years: string[];
  hasDiagram?: boolean;
}

export interface Unit {
  number: number;
  title: string;
  questions5: Question[];
  questions10: Question[];
  totalQuestions: number;
}

export interface Subject {
  slug: string;
  code: string;
  name: string;
  examDate: string; // e.g., "17 Nov 2026, Tuesday"
  examDateISO: string; // ISO date for accurate countdown
  order: number;
  description: string;
  units: Unit[];
  total5M: number;
  total10M: number;
  totalQuestions: number;
  status: 'available' | 'coming_soon';
}

