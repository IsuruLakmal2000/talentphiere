// CommonQuestions.tsx

import React from 'react';
import './CommonQuestions.css'; // Import the CSS file

// --- Type Definitions ---
interface QuestionAnswerPair {
  question: string;
  answer: string;
}

// --- Dummy Data (Based on the provided image) ---
const questionsData: QuestionAnswerPair[] = [
  {
    question: 'What time zones can my Diver work in?',
    answer:
      'Most of our Divers overlap with their clients for 5 hours during the client’s working hours. If the client’s requested overlap is less than 5 hours that’s asynchronous — meaning they can do focused work while you’re asleep.',
  },
  {
    question: "What if I don't think my Diver is working out?",
    answer:
      'This is a rare case, but if it does happen, we’ll work with you to understand what is not working and then rematch you with another Diver, free of charge.',
  },
  {
    question: 'What kind of experience and education will my Diver have?',
    answer:
      'On average, our Divers have 5-10 years of professional experience. Many of our Divers are graduates and former employees of recognized companies (e.g., University of London UK, University of Toronto, JPMorgan, E&Y, Uber Eats, and more)',
  },
  {
    question: 'How long is the contract?',
    answer:
      'We do rolling 3-month contracts at Oceans so any onboarding (or offboarding) is done smoothly.',
  },
];

// --- QA Item Component ---
const QAItem: React.FC<QuestionAnswerPair> = ({ question, answer }) => {
  return (
    <div className="qa-item">
      <div className="qa-question">{question}</div>
      <div className="qa-answer">{answer}</div>
    </div>
  );
};

// --- Main Component ---
const CommonQuestions: React.FC = () => {
  return (
    <section className="common-questions-section">
      <div className="common-questions-container">
        <h2 className="section-title">Common questions</h2>
        <div className="qa-list">
          {questionsData.map((item, index) => (
            <QAItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommonQuestions;