import React from "react";
import "./stat.css";

interface Stat {
  color: string;
  number: string;
  title: string;
  description: string;
}

const stats: Stat[] = [
  {
    color: "#FF6B00",
    number: "1500",
    title: "Applicants Monthly",
    description:
      "We're known as a great place to work, so we get our pick of top talent.",
  },
  {
    color: "#F78BDA",
    number: "86%",
    title: "First Match Success",
    description:
      "“I’m blown away by her experience,” is a common statement that we hear.",
  },
  {
    color: "#5B9EFF",
    number: "4.7/5",
    title: "Average Rating",
    description:
      "We ask every client about execution, consistency, communication, and more.",
  },
];

const StatsSection: React.FC = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div
              className="stat-dot"
              style={{ backgroundColor: stat.color }}
            ></div>
            <h2 className="stat-number">{stat.number}</h2>
            <h3 className="stat-title">{stat.title}</h3>
            <p className="stat-description">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
