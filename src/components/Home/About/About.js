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
        <div className="d-flex justify-content-between rounded ">
          <div className="col-md-6">
            <img className="img-fluid" style={{ height: "450px" }} src={hossain} alt="" />
          </div>
          <div className="col-md-6 align-self-center text-light bg-dark p-4 rounded">
            <div>
              <p>I'm a Frontend Web Developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript. I build websites that delight and inform. I do it well. I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction. I do my best to stay on top of changes in the state of the art so that I can meet challenges with tools well suited to the job at hand. The list of projects I follow on GitHub will give you a good idea of the types of tools I’d prefer to be using, and my Instapaper “Starred” list will give you a glimpse into the reading material I find interesting enough to share</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;