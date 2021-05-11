import { faFacebook, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import SmallHeading from '../../UI/SmallHeading';
const Resume = () => {
  return (
    <section id="resume" className="py-5 text-center">
      <div className=" container">
        <SmallHeading text="Resume"></SmallHeading>
        <div className="row mt-4">
          <div className="col-md-6">
            <h5 className="bg-danger text-light p-2 mb-5 rounded">Programming Skills</h5>
            <div>
              <h6 className="bg-warning text-dark d-inline-block font-weight-bold rounded p-2 mb-4 ">Expertise</h6>
              <div className="d-flex">
                <p className="bg-dark text-light rounded px-2">ReactJS</p>
                <p className="bg-dark text-light ml-2 rounded px-2">HTML5</p>
                <p className="bg-dark text-light ml-2 rounded px-2">CSS3</p>
                <p className="bg-dark text-light ml-2 rounded px-2">Bootstrap5</p>
                <p className="bg-dark text-light ml-2 rounded px-2">SASS</p>
                <p className="bg-dark text-light ml-2 rounded px-2">MaterialUI</p>
              </div>
            </div>
            <div>
              <h6 className="bg-warning text-dark rounded p-2 my-4 d-inline-block font-weight-bold">Comfortable</h6>
              <div className="d-flex">
                <p className="bg-dark text-light rounded px-2">NodeJS</p>
                <p className="bg-dark text-light ml-2 rounded px-2">EXpressJS</p>
                <p className="bg-dark text-light ml-2 rounded px-2">MongoDB</p>
              </div>
            </div>
            <div>
              <h6 className="bg-warning text-dark rounded p-2 my-4 d-inline-block font-weight-bold">Familiar With</h6>
              <div className="d-flex">
                <p className="bg-dark text-light rounded px-2">Redux</p>
                <p className="bg-dark text-light ml-2 rounded px-2">NextJS</p>
                <p className="bg-dark text-light ml-2 rounded px-2">React Native</p>
                <p className="bg-dark text-light ml-2 rounded px-2">jQuery</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h5 className="bg-success text-light p-2 mb-5 rounded">Know About Me</h5>
            <div className="bg-dark text-light p-3 rounded">
              <p className="text-left mb-1"><span className="bold-500">BirthDay:</span> 1 oct 1998</p>
              <p className="text-left mb-1"><span className="bold-500">Age:</span> 23</p>
              <p className="text-left mb-1"><span className="bold-500">Hometown:</span> Tangail, Bangladesh</p>
              <p className="text-left"><span className="bold-500">Phone:</span> +88019575372754</p>
            </div>
            <div className="bg-dark text-light rounded  p-3 mt-3">
              <p className="text-left mb-1"><span className="bold-500">Education:</span> B.A in History</p>
              <p className="text-left mb-1"><span className="bold-500">University:</span> University Of Chittagong</p>
              <p className="text-left mb-1"><span className="bold-500">Email:</span> taieb.hossain006@gmail.com</p>
              <p className="text-left"><span className="bold-500">Hobbies:</span> Travelling, Reading Books etc</p>
            </div>
          </div>
          <div className="mt-5 mx-auto">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/hossain909"
                >
                  <FontAwesomeIcon className="font-30 text-light" icon={faGithub} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/taieb.hossain.12/"
                >
                  <FontAwesomeIcon style={{ color: "#1876f0" }} className="font-30" icon={faFacebook} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/taieb-hossain-a050a0211/"
                >
                  <FontAwesomeIcon className="font-30 text-info" icon={faLinkedinIn} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Resume;