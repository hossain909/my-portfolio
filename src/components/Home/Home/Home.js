import React from 'react';
import Contact from '../../Shared/Contact/Contact';
import About from '../About/About';
import HeaderMain from '../HeaderMain/HeaderMain';
import Portfolio from '../Portfolio/Portfolio';
import Specialization from '../Specialization/Specialization';

const Home = () => {
  return (
    <section id="background">
      <div className="container">
        <HeaderMain></HeaderMain>
        <About></About>
        <Specialization></Specialization>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </div>
    </section>
  );
};

export default Home;