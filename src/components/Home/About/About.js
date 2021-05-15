import React from 'react';
import hossain from "../../../assets/myImage/hme2.png";
import Buttons from '../../../UI/Buttons';
import MediumHeading from "../../../UI/MediumHeading";
import SmallHeading from "../../../UI/SmallHeading";

const About = () => {
  return (
    <section id="about" className="py-md-5">
      <div className="container">
        <SmallHeading text="About Me"></SmallHeading>
        <MediumHeading text="Some Key Details About Me"></MediumHeading>
        <div className="row d-flex  justify-content-between my-5">
          <div className="col-md-5 mt-md-5">
            <img className="img-fluid px-3 mt-3" src={hossain} alt="" />
          </div>
          <div className="col-md-7 mt-3 align-self-center p-4 rounded">
            <div className=" text-light p-3 ">
              <p className="mb-3"><span className="d-block font-30 primaryColor bold-600">Hi,</span> <span className="primaryColor">I'm Taieb Hossain, </span> a Frontend Developer. My core skill is based on JavaScript and React Js and I love to do most of the things using JavaScript. I love to make the websites more open to the world. I am able to do any programming-related task by handling difficult and hard situations at any time. And have a lot of skills in JavaScript, React and Node.js And I have done many projects related to this.</p>
              <Buttons link="https://drive.google.com/file/d/1CcDw9qsrsjlw2l37Qe1-K4v3tL8-dVYb/view?usp=sharing" label="Download Resume" inverse></Buttons>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;