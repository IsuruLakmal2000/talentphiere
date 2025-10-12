import React from 'react';
import { RoleTemplate } from '../../components/RoleTemplate';

const OurRoles: React.FC = () => {
  const heroTitle = "Hire an EA that's designed for Founders";
  
  const heroDescription = 
    "Before you need a chief of staff, you need an EA+. Your right hand for staying organized as you grow, freeing you up to tackle the work that only you can do.";

  const profilesSectionTitle = "Best-in-class Profiles";
  
  const profilesSectionDescription = 
    "Our EAs+ go beyond basic administration, they bring a wealth of experience and backgrounds — all with high levels of attention to detail. This is why each client and EA+ match is quintessentially unique.";

  const categories = [
    {
      title: "Operations",
      description: "Former project managers and operational specialists who bring a high level of systems design."
    },
    {
      title: "Marketing & PR",
      description: "Former in-house and agency marketers who bring a high level of creativity and communication skills."
    },
    {
      title: "Finance",
      description: "Former accountants and analysts who bring a high level of rigor, analysis, and reporting."
    },
    {
      title: "Research & Law",
      description: "Former academics and legal professionals who bring a high level of detail orientation and specificity."
    },
    {
      title: "And More...",
      description: "These are some of our most popular backgrounds for EAs+. We also have highly specialized backgrounds that we serve on a case by case basis."
    }
  ];

  const profileData = {
    name: "Nihara",
    subtitle: "University of Essex"
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

export default OurRoles;

