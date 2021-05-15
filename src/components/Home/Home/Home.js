import React from 'react';
import Contact from '../../Shared/Contact/Contact';
import About from '../About/About';
import HeaderMain from '../HeaderMain/HeaderMain';
import Projects from '../Projects/Projects';
import Specialization from '../Specialization/Specialization';

const Home = () => {
  return (
    <section id="background">
      <div className="container">
        <HeaderMain></HeaderMain>
        <About></About>
        <Specialization></Specialization>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </section>
  );
};

export default Home;