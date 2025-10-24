// CommonQuestions.tsx

import React from 'react';
import './PricingQuestions.css'; // Import the CSS file

// --- Type Definitions ---
interface QuestionAnswerPair {
  question: string;
  answer: string;
}

// --- Dummy Data (Based on the provided image) ---
const questionsData: QuestionAnswerPair[] = [
  {
    question: 'Is my Oceans Diver a full time employee?',
    answer:
      ' Nope, they work for Oceans — but spend all their time with you. You should treat them as if they were a full time, long-term member of your team.',},
  {
    question: "What hours does my Diver work?",
    answer:
      ' Your Diver will work during your business hours, aligning with your team’s schedule to ensure seamless collaboration and communication.',
  },
  {
    question: 'Is this month to month?',
    answer:
      ' Yes! We operate on a rolling monthly basis after the initial 3-month contract, giving you flexibility and control over your engagement with us.',
  },
  {
    question: 'How many Divers can Oceans help me hire?',
    answer:
      ' We can help you hire as many Divers as you need! Whether you require one or a whole team, we are here to support your hiring needs and help you scale effectively.',
    },
    {
    question: 'How does Oceans guarantee candidate quality?',
    answer:
      'Oceans focuses on long-term matches with top quality talent. To do so, we only hire the best. Our candidates are vetted in a 6 stage interview process, followed by a skills and personality assessment, to ensure they are a great fit with you and your team.'    },

    
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