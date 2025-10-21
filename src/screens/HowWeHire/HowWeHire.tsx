import React from "react";
import StatsSection from "./stat/stat";
import Header from "../../components/header";
import ProcessCards from "./Process/HireProcess";
import CommonQuestions from "./CommonQuestions/CommonQuestions";
import FooterSection from "../../components/Footer/footer";

const HowWeHire: React.FC = () => {
  return (
    <div>
      <Header
        title="Our Hiring Process"
        subtitle="Discover how we identify and onboard top-tier global talent to ensure your team's success."
        buttonText="Learn More"
        onButtonClick={() => alert("Learn More button clicked!")}   
        />
        <StatsSection />
        <ProcessCards />
        <CommonQuestions />
        <FooterSection />
    </div>
  );
};

export default HowWeHire;
        
    
