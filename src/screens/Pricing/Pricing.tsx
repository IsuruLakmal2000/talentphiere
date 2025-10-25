import React from "react";
import Header from "../../components/header";   
import TalentSection from "./TalentCategory/TalentCategory";
import WhyOceans from "./WhyOceans/WhyOceans";
import FooterSection from "../../components/Footer/footer";
import CommonQuestions from "./PricingQuestions/PricingQuestions";

const Pricing: React.FC = () => {
  return (
    <div>
        <Header
        title="Our Pricing Plans"
        subtitle="Choose the plan that best fits your needs and budget."
        buttonText="Hire with Talentphere"
        onButtonClick={() => alert("Get Started button clicked!")}   
        />
        <TalentSection />
        <WhyOceans />
        <CommonQuestions />
        <FooterSection />

    </div>
  );
};
export default Pricing;