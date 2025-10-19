import React from 'react';
import './Home.css';
import Header from '../../components/header';
import Review from '../../components/Review/reaview';
import WhyChoose from '../../components/WhyChoose/whychoose';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Review />
      <WhyChoose />
    </div>
  );
};

export default Home;
