import React from 'react';
import './Home.css';
import Header from '../../components/header';
import Review from '../../components/Review/reaview';
import WhyChoose from '../../components/WhyChoose/whychoose';
import Process from '../../components/HowDoIt/process';
import SuccessStories from '../../components/HomeReview/HomeReview';
import CEOSection from '../../components/FounderMessage/FounderMesage';
import FooterSection from '../../components/Footer/footer'; 

const Home: React.FC = () => {
  return (
    <div>
      <Header
        title="Hire proactive global talent for your team"
        subtitle="Outsourcing has a bad reputation. We're fixing it with highly experienced and motivated talent, while saving you up to 80% of a US hire."
        buttonText="Hire With Talentphere"
        buttonLink="/hire"
      />
      <Review />
      <WhyChoose />
      <Process />
      <SuccessStories />
      <CEOSection />
      <FooterSection />
    </div>
  );
};

export default Home;
