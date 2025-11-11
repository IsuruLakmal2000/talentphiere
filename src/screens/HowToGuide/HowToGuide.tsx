import React from "react";
import "./HowToGuide.css";
import Header from "../../components/header";
import FooterSection from "../../components/Footer/footer";
import { Link } from "react-router-dom";

import guide1 from "../../assets/guides/guide1.png";
import guide2 from "../../assets/guides/guide1.png";
import guide3 from "../../assets/guides/guide1.png";

const Guides: React.FC = () => {
  const guides = [
    {
      id: 1,
      title: "Nik Sharma’s Unconventional EA+ Playbook",
      description:
        "Learn how Nik Sharma’s EA+ strategy streamlines his workflow and multiplies productivity.",
      image: guide1,
    },
    {
      id: 2,
      title: "How to Automate Your Operations as a Healthcare Analyst",
      description:
        "Step-by-step automation strategies designed for analysts and medical professionals.",
      image: guide2,
    },
    {
      id: 3,
      title: "The Best Ways to Wrangle Your Email Inbox (2+ Player Mode)",
      description:
        "Battle-tested inbox strategies to cut hours of email time every week.",
      image: guide3,
    },
  ];

  return (
    <>
      <Header title="Grow Your Business with Global Talent" subtitle="Practical playbooks and resources designed to help you maximize
            communication, workflow, and success."
            buttonText="Hire with TALENTPHERE" />

      
      {/* Guides Grid */}
      <section className="guides-section">
        <div className="container">
          {guides.map((guide) => (
            <article key={guide.id} className="guide-card">
              <div
                className="guide-img"
                style={{
                  backgroundImage: `url(${guide.image})`,
                }}
              />
              <div className="guide-content">
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
                <Link to="/guides/NickStory" className="read-btn">
                  Read Guide →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      

      <FooterSection />
    </>
  );
};

export default Guides;
