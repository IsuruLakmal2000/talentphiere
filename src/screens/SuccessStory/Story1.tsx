// src/pages/TrueClassicStory.tsx
import React from "react";
import SuccessStoryTemplate from "./SuccessStoryTemplate";
import trueClassicLogo from "../../assets/SuccessStories/Story1/trueclassic-logo.jpg";
import trueClassicMain from "../../assets/SuccessStories/Story1/trueclassic-main.jpg";
import globalTeamImg from "../../assets/SuccessStories/Story1/success.jpg";
import growthImg from "../../assets/SuccessStories/Story1/business-growth.jpg";

const TrueClassicStory: React.FC = () => {
  return (
    <SuccessStoryTemplate
      title="How True Classic Runs a $250M Business with Global Talent"
      authorName="Adam Fenech"
      authorTitle="SVP Commercial, True Classic"
      companyLogo={trueClassicLogo}
      mainImage={trueClassicMain}
      intro="True Classic partnered with Oceans to scale globally and unlock the power of offshore talent. Today, one-third of their team operates remotely across the globe—driving growth, optimizing costs, and maintaining brand consistency."
      sections={[
        {
          heading: "A Belief That Great Talent Is Global",
          content:
            "One mission has always defined True Classic: build a successful clothing brand powered by great people, wherever they are. As their $250M business expanded into multiple continents, Adam and his team needed localized expertise for marketing, pricing, and promotions in each region.",
          quote:
            "We needed someone to run that process of localization across functions. Oceans made that possible with specialized global experts.",
          image: globalTeamImg,
        },
        {
          heading: "Scaling with Flexibility and Speed",
          content:
            "Oceans helped True Classic quickly onboard offshore talent, covering marketing operations, analytics, and e-commerce management. This allowed the in-house team to focus on creative growth while maintaining operational excellence.",
        },
        {
          heading: "The Result: A Third of the Team Offshore",
          content:
            "Within a year, True Classic built a strong offshore structure. One-third of its 200+ team members now work remotely, creating agility across time zones and reducing costs by nearly 40%.",
          quote:
            "We’ve built a team that’s not just cost-effective — it’s empowered, agile, and aligned with our brand’s mission.",
          image: growthImg,
        },
      ]}
      conclusion="True Classic’s collaboration with Oceans demonstrates how combining world-class onshore leadership with high-performing offshore experts leads to sustainable, scalable growth."
    />
  );
};

export default TrueClassicStory;
