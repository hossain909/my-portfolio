import React from 'react';
import hossain from "../../../assets/myImage/hossain.png";
import MediumHeading from "../../../UI/MediumHeading";
import SmallHeading from "../../../UI/SmallHeading";
const About = () => {
  return (
    <section id="about" className="py-5 ">
      <div className="container">
        <SmallHeading text="About Me"></SmallHeading>
        <MediumHeading text="Some Key Details About Me"></MediumHeading>
        <div className="row d-flex justify-content-between rounded ">
          <div className="col-md-6">
            <img className="img-fluid" style={{ height: "450px" }} src={hossain} alt="" />
          </div>
          <div className="col-md-6 mt-3 align-self-center p-4 rounded">
            <div>
              <p>Hello, I'm Taieb Hossain, a Front-End Developer. My core skill is based on JavaScript and React Js and I love to do most of the things using JavaScript. I love to make the websites more open to the world. I am able to do any programming-related task by handling difficult and hard situations at any time. And have a lot of skills in JavaScript, React and Node.js And I have done many projects related to this.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;