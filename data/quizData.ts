export interface Question {
  question: string;
  answers: {
    text: string;
    type: 'A' | 'B' | 'C';
  }[];
}

export const quizQuestions: Question[] = [
  {
    question: "When a new customer calls, what slows you down the most?",
    answers: [
      { text: "Taking the time to work up an estimate", type: "A" },
      { text: "Not enough new calls coming in", type: "B" },
      { text: "Both are pain points", type: "C" },
    ],
  },
  {
    question: "On a busy week, how many estimates do you prepare?",
    answers: [
      { text: "5+ and it’s eating up my evenings", type: "A" },
      { text: "1–2", type: "B" },
      { text: "Somewhere in between", type: "C" },
    ],
  },
  {
    question: "Which statement sounds more like you?",
    answers: [
      { text: "“I lose jobs because I can’t get estimates out fast enough.”", type: "A" },
      { text: "“I lose jobs because not enough people know about me.”", type: "B" },
      { text: "“Both happen too often.”", type: "C" },
    ],
  },
  {
    question: "When it comes to paperwork and pricing…",
    answers: [
      { text: "I want a tool that automates the math and gives me a professional PDF.", type: "A" },
      { text: "I’m fine with pen and paper, my bigger issue is new customers.", type: "B" },
      { text: "I’d like both to be smoother.", type: "C" },
    ],
  },
  {
    question: "When you think about Facebook ads…",
    answers: [
        { text: "I’ve never tried, or I tried boosting a post and burned cash.", type: "A" },
        { text: "I’d love to learn how to do it right.", type: "B" },
        { text: "Not my priority right now.", type: "C" },
    ],
  },
  {
    question: "Your growth goal for the next 90 days is:",
    answers: [
      { text: "Save time and impress customers with pro-looking estimates.", type: "A" },
      { text: "Generate a steady stream of affordable leads.", type: "B" },
      { text: "Do both so I can scale without stress.", type: "C" },
    ],
  },
  {
    question: "Finally — if you could wave a magic wand, what would make business easier tomorrow?",
    answers: [
      { text: "“Every estimate is done in 5 minutes flat.”", type: "A" },
      { text: "“My phone buzzes with new leads every day.”", type: "B" },
      { text: "“Both at the same time.”", type: "C" },
    ],
  },
];
