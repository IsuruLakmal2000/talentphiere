import React from 'react';
import './Home.css';
import Header from '../../components/header';
import Review from '../../components/Review/reaview';
import WhyChoose from '../../components/WhyChoose/whychoose';
import Process from '../../components/HowDoIt/process';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Review />
      <WhyChoose />
      <Process />
    </div>
  );
};

export default Home;
