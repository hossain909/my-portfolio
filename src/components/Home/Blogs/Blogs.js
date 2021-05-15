import React from 'react';
import html from "../../../assets/blog-images/html.png";
import javascript from "../../../assets/blog-images/javascript.png";
import react from "../../../assets/blog-images/react.png";
import Buttons from '../../../UI/Buttons';
import MediumHeading from '../../../UI/MediumHeading';
import SmallHeading from '../../../UI/SmallHeading';
import './Blogs.css';
const Blogs = () => {
  return (
    <section id="blogs" class="blogs-area py-md-5 py-sm-4 py-3">
      <div class="container">
        <div class="section-title green-highlight text-center">
          <SmallHeading text="My Blogs"></SmallHeading>
          <MediumHeading text="Some of my blogs"></MediumHeading>
        </div>
        <div class="row text-white py-md-5 py-sm-4 py-3">
          <div class="card-deck">
            <div class="col-md-4 col-sm-6 my-3">
              <div class="card blog-card">
                <img style={{ height: "180px" }} class="card-img-top" src={html} alt="blog" />
                <div class="card-body">
                  <h5 class="card-title text-dark">20 Must Learn Interview Questions From HTML </h5>
                  <p class="card-text text-dark font-14">Discussed very basic topics of HTML & HTML5 that is needed to start a interview.</p>
                </div>
                <div class="text-center py-4">
                  <Buttons link="#" label="Comming soon..."></Buttons>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 my-3">
              <div class="card blog-card">
                <img style={{ height: "180px" }} class="card-img-top" src={react} alt="blog" />
                <div class="card-body">
                  <h5 class="card-title  text-dark">React Fundamental Core Concept</h5>
                  <p class="card-text font-14 text-dark">Discussed about fundamental core concepts of React.</p>
                </div>
                <div className="text-center py-4">
                  <Buttons link="#" label="Comming soon..."></Buttons>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 my-3">
              <div class="card blog-card">
                <img style={{ height: "180px" }} class="card-img-top" src={javascript} alt="blog" />
                <div class="card-body">
                  <h5 class="card-title text-dark">JavaScript Tricky Concept!</h5>
                  <p class="card-text font-14 text-dark">Discussed some of tricky topics of JavaScript for a beginner friendly blog.</p>
                </div>
                <div className="text-center py-4">
                  <Buttons link="#" label="Comming soon..."></Buttons>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
