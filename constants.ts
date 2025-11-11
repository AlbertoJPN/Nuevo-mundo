import { type PhaseData, GamePhase } from './types';

export const GAME_CONTENT: Record<GamePhase, PhaseData | null> = {
  [GamePhase.Intro]: null,
  [GamePhase.Phase1]: {
    title: "Phase 1 : La Quête de Soutien",
    narrative: "Nous sommes en 1492. Christophe Colomb, un navigateur courageux, a un plan audacieux : atteindre les riches terres des Indes en naviguant vers l'ouest. Mais il a besoin de navires ! Sa mission est de convaincre la reine Isabelle d'Espagne de financer son expédition.",
    question: "Quel argument pensez-vous que Colomb a utilisé pour convaincre la Reine ?",
    options: [
      { text: "Il a promis de trouver un nouveau continent inconnu pour que l'Espagne soit plus grande.", isCorrect: false, letter: 'A' },
      { text: "Il lui a assuré qu'il trouverait une route maritime plus courte et plus sûre vers les Indes pour commercer des épices précieuses.", isCorrect: true, letter: 'B' },
      { text: "Il voulait prouver que la Terre était ronde, ce que personne ne croyait à l'époque.", isCorrect: false, letter: 'C' },
    ],
    incorrectFeedback: "Presque ! Ce n'était pas l'argument principal. Rappelez-vous que tout le monde voulait atteindre les Indes. Essayez encore !",
  },
  [GamePhase.Phase2]: {
    title: "Phase 2 : La Traversée Difficile",
    narrative: "Vous avez réussi ! La reine Isabelle a fait confiance à Colomb et maintenant trois caravelles, la Pinta, la Niña et la Santa María, naviguent sur l'immense océan Atlantique. Plusieurs semaines ont passé et l'équipage est nerveux et effrayé. Ils ne voient que de l'eau et craignent de ne jamais rentrer chez eux.",
    question: "En tant que capitaine, que feriez-vous pour calmer votre équipage et maintenir l'espoir ?",
    options: [
      { text: "Je leur promettrais de grandes récompenses et leur rappellerais la gloire et les richesses qui les attendent en arrivant aux Indes.", isCorrect: true, letter: 'A' },
      { text: "Je leur dirais qu'il est perdu et que le mieux est de retourner en Espagne.", isCorrect: false, letter: 'B' },
      { text: "Il se mettrait très en colère et menacerait de punir quiconque se plaint.", isCorrect: false, letter: 'C' },
    ],
    incorrectFeedback: "Hum ! Cette décision aurait pu provoquer une mutinerie. Un bon leader doit inspirer. Pensez à une autre option !",
  },
  [GamePhase.Phase3]: {
    title: "Phase 3 : Terre en vue !",
    narrative: "Votre leadership a fonctionné ! L'équipage a retrouvé confiance. Et un matin, le 12 octobre 1492, le veilleur Rodrigo de Triana a crié du haut du mât : 'Terre ! Terre en vue !'. L'émotion est indescriptible ! Ils sont arrivés sur une nouvelle terre.",
    question: "Quel nom les autochtones donnaient-ils à cette première île qu'ils ont aperçue ?",
    options: [
      { text: "Cuba", isCorrect: false, letter: 'A' },
      { text: "Hispaniola", isCorrect: false, letter: 'B' },
      { text: "Guanahaní", isCorrect: true, letter: 'C' },
    ],
    incorrectFeedback: "Vous étiez proche, ces îles ont été découvertes plus tard. Vous souvenez-vous du premier nom ? Réessayez !",
  },
  [GamePhase.End]: null,
};