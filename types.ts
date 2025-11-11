
export enum GamePhase {
  Intro,
  Phase1,
  Phase2,
  Phase3,
  End,
}

export interface Option {
  text: string;
  isCorrect: boolean;
  letter: 'A' | 'B' | 'C';
}

export interface PhaseData {
  title: string;
  narrative: string;
  question: string;
  options: Option[];
  incorrectFeedback: string;
}
