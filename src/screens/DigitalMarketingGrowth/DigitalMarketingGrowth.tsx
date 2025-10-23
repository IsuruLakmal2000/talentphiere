import React from 'react';
import { RoleTemplate } from '../../components/RoleTemplate';

const DigitalMarketingGrowth: React.FC = () => {
  const heroTitle = "Digital Marketing & Growth Experts Who Drive Results";
  
  const heroDescription = 
    "Access experienced marketing and growth professionals who combine data-driven strategies with creative execution. From performance marketing to brand building, our talent helps you acquire, engage, and retain customers at scale.";

  const profilesSectionTitle = "Best-in-class Marketing & Growth Profiles";
  
  const profilesSectionDescription = 
    "Our marketing and growth experts go beyond running campaigns — they develop strategies, analyze data, and optimize for ROI. Each professional is carefully vetted for strategic thinking, analytical skills, and proven track record of driving growth.";

  const categories = [
    {
      title: "Growth Marketing",
      description: "Full-funnel growth strategists who drive user acquisition, activation, and retention through data-driven experiments and multi-channel campaigns."
    },
    {
      title: "Performance Marketing",
      description: "PPC and paid media experts specializing in Google Ads, Facebook Ads, LinkedIn Ads, and programmatic advertising to maximize ROI and scale campaigns."
    },
    {
      title: "SEO & Content Marketing",
      description: "Organic growth specialists who develop SEO strategies, create high-converting content, and build authority through content marketing and link building."
    },
    {
      title: "Email & Marketing Automation",
      description: "Email marketing experts and automation specialists who design nurture sequences, lifecycle campaigns, and personalized marketing flows using tools like HubSpot, Mailchimp, and ActiveCampaign."
    },
    {
      title: "Analytics & Marketing Ops",
      description: "Data analysts and marketing operations professionals who set up tracking, build dashboards, analyze performance, and optimize the marketing tech stack."
    },
    {
      title: "And More...",
      description: "These are our most popular specializations. We also have experts in social media marketing, influencer marketing, conversion rate optimization, product marketing, and other specialized areas."
    }
  ];

  const profileData = {
    name: "Anjali",
    subtitle: "IIM Bangalore, 9+ years exp"
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

export default DigitalMarketingGrowth;
