import React from 'react';
import './Home.css';
import Header from '../../components/header';
import Review from '../../components/Review/reaview';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Review />
    </div>
  );
};

export default Home;
