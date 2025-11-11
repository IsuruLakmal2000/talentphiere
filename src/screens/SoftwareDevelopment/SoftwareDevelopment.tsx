import React from 'react';
import { RoleTemplate } from '../../components/RoleTemplate';
import manImage from '../../assets/images/man.jpg';

const SoftwareDevelopment: React.FC = () => {
  const heroTitle = "Development & Innovation Talent for Modern Teams";
  
  const heroDescription = 
    "Access experienced developers and innovators who combine technical excellence with strategic thinking. From building MVPs to scaling infrastructure, our talent brings the skills and mindset to drive your product forward.";

  const profilesSectionTitle = "Best-in-class Developer Profiles";
  
  const profilesSectionDescription = 
    "Our developers go beyond just writing code — they bring product thinking, architectural expertise, and a startup mindset. Each developer is carefully vetted for technical skills, communication, and cultural fit.";

  const categories = [
    {
      title: "Full-Stack Development",
      description: "Experienced engineers proficient in modern frameworks like React, Node.js, Python, and more. They can handle both frontend and backend with ease."
    },
    {
      title: "Frontend Specialists",
      description: "UI/UX-focused developers who excel at building responsive, accessible, and performant web applications using React, Vue, Angular, or Next.js."
    },
    {
      title: "Backend Engineers",
      description: "System architects and API developers skilled in Node.js, Python, Go, Java, and database design. They build scalable and secure server-side solutions."
    },
    {
      title: "Mobile Developers",
      description: "Native and cross-platform mobile developers experienced with React Native, Flutter, Swift, and Kotlin to build iOS and Android applications."
    },
    {
      title: "DevOps & Cloud",
      description: "Infrastructure experts who handle AWS, Azure, GCP, CI/CD pipelines, containerization with Docker/Kubernetes, and cloud architecture."
    },
    {
      title: "And More...",
      description: "These are our most popular specializations. We also have experts in AI/ML, blockchain, data engineering, QA automation, and other specialized areas."
    }
  ];

  const profileData = {
    name: "Rajesh",
    subtitle: "IIT Bombay, 8+ years exp",
    image: manImage
  };

  return (
    <RoleTemplate
      heroTitle={heroTitle}
      heroDescription={heroDescription}
      profilesSectionTitle={profilesSectionTitle}
      profilesSectionDescription={profilesSectionDescription}
      categories={categories}
      profileData={profileData}
    />
  );
};

export default SoftwareDevelopment;
