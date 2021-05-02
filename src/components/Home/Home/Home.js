import React from 'react';
import About from '../About/About';
import HeaderMain from '../HeaderMain/HeaderMain';
import Projects from '../Projects/Projects';
import Specialization from '../Specialization/Specialization';

const Home = () => {
  return (
    <div className="container">
      <HeaderMain></HeaderMain>
      <About></About>
      <Specialization></Specialization>
      <Projects></Projects>
    </div>
  );
};

export default Home;