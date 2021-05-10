import React, { useState } from 'react';
// import project4 from "../../../assets/projectImages/amazonia.png";
// import project2 from "../../../assets/projectImages/juventus.png";
// import project3 from "../../../assets/projectImages/paradise-travels.png";
import project1 from "../../../assets/projectImages/tech-world.png";
import PortfolioList from '../PortfolioList/PortfolioList';
import "./Portfolio.css";
const Portfolio = () => {
  const [selected, setSelected] = useState("featured")
  const list = [
    {
      id: "featured",
      title: "featured"
    },
    {
      id: "Javascript",
      title: "javascript"
    },
    {
      id: "web app",
      title: "web app"
    },
    {
      id: "HTML/CSS",
      title: "Html/css"
    }
  ]
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map(item => <PortfolioList
          title={item.title}
          active={selected === item.id}
          setSelected={setSelected}
          id={item.id}
        ></PortfolioList>)}
      </ul>
      <div className="d-flex wrap justify-content-center">
        <div className="item">
          <img src={project1} alt="" />
          <h5>Tech World</h5>
        </div>
        <div className="item">
          <img src={project1} alt="" />
          <h5>Tech World</h5>
        </div>
        <div className="item">
          <img src={project1} alt="" />
          <h5>Tech World</h5>
        </div>
        <div className="item">
          <img src={project1} alt="" />
          <h5>Tech World</h5>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
