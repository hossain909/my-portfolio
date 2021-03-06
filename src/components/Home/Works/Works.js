import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft, faChevronRight, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import allData from "../../../SliderData/SliderData";
import "./Works.css";
const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const handleClick = (way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
      setCurrentSlide(currentSlide < allData.length - 1 ? currentSlide + 1 : 0)
  }
  return (
    <section style={{ margin: "100px 0" }} className="works" id="works">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {allData.map(d => (
          <div className="s-container">
            <div className="s-item d-md-flex">
              <div className="left d-md-flex">
                <div className="left-container">
                  <div>
                    <h3>{d.title}</h3>
                    <p className="font-14">{d.desc}</p>
                  </div>
                  <div className="link-container mt-md-3">
                    <a href={d.github} target="_blank" alt="github" rel="noreferrer"><FontAwesomeIcon className="font-25 text-light m-2" icon={faGithub} /></a>
                    <a href={d.live} target="_blank" alt="livelink" rel="noreferrer"><FontAwesomeIcon className="font-25 text-light m-2" icon={faExternalLinkAlt} /></a>
                  </div>
                </div>
              </div>
              <div className="right">
                <img className="img-fluid slider-img" src={d.image} alt="" />
              </div>
            </div>
          </div>))}
      </div>
      <p onClick={() => handleClick("left")} className="d-lg-block d-none arrow arrow-left"><FontAwesomeIcon className="text-light" icon={faChevronLeft} /></p>
      <p onClick={() => handleClick("right")} className="d-lg-block d-none arrow arrow-right"><FontAwesomeIcon className="text-light" icon={faChevronRight} /></p>
    </section>
  );
};

export default Works;