import React from 'react';
import Contact from '../../Shared/Contact/Contact';
import About from '../About/About';
import HeaderMain from '../HeaderMain/HeaderMain';
import Portfolio from '../Portfolio/Portfolio';
import Specialization from '../Specialization/Specialization';
import Works from '../Works/Works';

const Home = () => {
  return (
    <div className="container">
      <HeaderMain></HeaderMain>
      <About></About>
      <Specialization></Specialization>
      <Portfolio></Portfolio>
      <Works></Works>
      {/* <Projects></Projects> */}
      <Contact></Contact>
    </div>
  );
};

export default Home;