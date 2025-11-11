import React from 'react';
import { RoleTemplate } from '../../components/RoleTemplate';
import womanImage from '../../assets/images/woman.jpg';

const BrandStrategy: React.FC = () => {
  const heroTitle = "Brand & Strategy Professionals Who Shape Your Story";
  
  const heroDescription = 
    "Access strategic thinkers and creative minds who build memorable brands and develop winning strategies. From brand identity to market positioning, our talent helps you stand out and connect with your audience authentically.";

  const profilesSectionTitle = "Best-in-class Brand & Strategy Profiles";
  
  const profilesSectionDescription = 
    "Our brand and strategy experts go beyond aesthetics and tactics — they craft compelling narratives, define market positioning, and build brand equity. Each professional is carefully vetted for strategic thinking, creative excellence, and ability to drive brand impact.";

  const categories = [
    {
      title: "Brand Strategy",
      description: "Strategic brand consultants who develop brand positioning, messaging frameworks, brand architecture, and go-to-market strategies that resonate with target audiences."
    },
    {
      title: "Brand Identity & Design",
      description: "Creative directors and brand designers who craft visual identities, design systems, logos, and brand guidelines that bring your brand to life across all touchpoints."
    },
    {
      title: "Content Strategy",
      description: "Content strategists who develop editorial calendars, content frameworks, brand voice guidelines, and storytelling strategies that engage and convert audiences."
    },
    {
      title: "Communications & PR",
      description: "PR specialists and communications experts who manage media relations, develop PR strategies, handle crisis communications, and build brand reputation."
    },
    {
      title: "Market Research & Insights",
      description: "Research analysts who conduct competitive analysis, customer research, market segmentation, and provide strategic insights to inform brand and business decisions."
    },
    {
      title: "And More...",
      description: "These are our most popular specializations. We also have experts in employer branding, brand partnerships, experiential marketing, creative copywriting, and other specialized areas."
    }
  ];

  const profileData = {
    name: "Meera",
    subtitle: "NIFT Delhi, 12+ years exp",
    image: womanImage
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

export default BrandStrategy;
