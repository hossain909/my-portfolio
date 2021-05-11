import React, { useEffect, useState } from 'react';
import {
  featured, frontEnd, fullStack
} from "../../../ProjectData/ProjectData";
import MediumHeading from '../../../UI/MediumHeading';
import SmallHeading from '../../../UI/SmallHeading';
import PortfolioList from '../PortfolioList/PortfolioList';
import "./Portfolio.css";
const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "featured"
    },
    {
      id: "frontend",
      title: "frontend"
    },
    {
      id: "fullstack",
      title: "fullstack"
    }
  ]

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featured)
        break;
      case "frontend":
        setData(frontEnd)
        break;
      case "fullstack":
        setData(fullStack)
        break;
      default:
        setData(featured)
    }

  }, [selected])
  return (
    <section className="portfolio py-5 my-5" id="portfolio">
      <SmallHeading text="My Projects"></SmallHeading>
      <MediumHeading text="Have a look some of my latest works"></MediumHeading>
      <ul className="my-5">
        {list.map(item => <PortfolioList
          title={item.title}
          active={selected === item.id}
          setSelected={setSelected}
          id={item.id}
        ></PortfolioList>)}
      </ul>
      <div className="row d-flex justify-content-center pb-5">
        {
          data.map(d => (
            <>
              <div className="item my-4">
                <img className="image" src={d.image} alt="" />
                <h6 className="text-center mt-2">{d.title}</h6>
              </div>
            </>
          ))
        }
      </div>
    </section>
  );
};

export default Portfolio;
