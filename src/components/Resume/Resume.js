import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Buttons from "../../UI/Buttons";

const Resume = () => {
  return (
    <section id="resume" className="py-5 text-center">
      <div className="container py-5">
        <h2>Taieb Hossain</h2>
        <p className="mb-0">Junior Front-End Developer</p>
        <p className="mb-0">Tangail, Dhaka, Bangladesh</p>
        <p className="mb-0">+8801957372754</p>
        <p className="mb-0">taieb.hossain006@gmail.com</p>
        <li className="social-icons font-30">
          <a href="https://github.com/hossain909">
            <FontAwesomeIcon icon={faGithub} /></a>
        </li>
        <li className="social-icons font-30">
          <a href="https://www.linkedin.com/in/taieb-hossain-a050a0211/">
            <FontAwesomeIcon icon={faLinkedinIn} /></a>
        </li>
        <div>
          <Buttons link="https://drive.google.com/file/d/1CcDw9qsrsjlw2l37Qe1-K4v3tL8-dVYb/view?usp=sharing" label="Download Resume" inverse></Buttons>
        </div>
      </div>
    </section>
  );
};

export default Resume;