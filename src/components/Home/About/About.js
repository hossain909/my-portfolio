import React from 'react';
import MediumHeading from "../../../UI/MediumHeading";
import SmallHeading from "../../../UI/SmallHeading";


const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <SmallHeading text="About Me"></SmallHeading>
        <MediumHeading text="Some Key Details About Me"></MediumHeading>
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="card bg-dark text-light p-3">
              <div className="card-title">
                <h2 className="text-center">Hi I'm Taieb Hossain</h2>
              </div>
              <div className="card-body">
                <p>I'm a front-end web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript. I build websites that delight and inform. I do it well. I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction. I do my best to stay on top of changes in the state of the art so that I can meet challenges with tools well suited to the job at hand. The list of projects I follow on GitHub will give you a good idea of the types of tools I’d prefer to be using, and my Instapaper “Starred” list will give you a glimpse into the reading material I find interesting enough to share</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-sb align-center mt-3">
            <div className="col-sm-12">
              <div className="bg-warning text-dark p-3 rounded">
                <p><span className="bold-500">BirthDay:</span> 1 oct 1998</p>
                <p><span className="bold-500">Age:</span> 23</p>
                <p><span className="bold-500">Hometown:</span> Tangail, Bangladesh</p>
                <p><span className="bold-500">Phone:</span> +88019575372754</p>
              </div>
              <div className="bg-info rounded text-dark p-3 mt-3">
                <p><span className="bold-500">Education:</span> B.A in History</p>
                <p><span className="bold-500">University:</span> University Of Chittagong</p>
                <p><span className="bold-500">Email:</span> taieb.hossain006@gmail.com</p>
                <p><span className="bold-500">Hobbies:</span> Travelling, Reading Books etc</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;