import React from 'react';
import project4 from "../../../assets/projectImages/amazonia.png";
import project2 from "../../../assets/projectImages/juventus.png";
import project3 from "../../../assets/projectImages/paradise-travels.png";
import project1 from "../../../assets/projectImages/tech-world.png";
import MediumHeading from "../../../UI/MediumHeading";
import SmallHeading from "../../../UI/SmallHeading";
import ProjectCard from "../../Home/ProjectCard/ProjectCard";
const Projects = () => {
  const projectData = [
    {
      name: "Tech World",
      desc: "This is a MERN Stack Project. A single page web application with ReactJS in the frontend and NodeJS and MongoDB are used in the backend",
      img: project1,
      githubLink: "https://github.com/hossain909/tech-world",
      liveLink: "https://tech-world-bd.web.app/"
    },
    {
      name: "Ema-John",
      desc: "A Full-stack E-commerce application with react and nodeJS. Implimented firebase authentication system. People can buy products with stripe payment system.",
      img: project4,
      githubLink: "https://simple-shoop.web.app/",
      liveLink: "https://github.com/hossain909/react-e-commerce"
    },
    {
      name: "Learn Programming",
      desc: "A single page web app for E-commerce business and Manage order with stripe payment gateway and Authentication with firebase ",
      img: project2,
      githubLink: "https://github.com/hossain909/book-shop",
      liveLink: "https://online-book-shoop.web.app/"
    },
    {
      name: "Paradise Travels",
      desc: "A singe page Travel application with Google login system. Use have to login and the can buy a ride. User also see their desired location in the google map.",
      img: project3,
      githubLink: "https://github.com/hossain909/paradise-travels",
      liveLink: "https://paradise-travels-bd.web.app/"
    },
  ]
  return (
    <section id="projects" className="container py-5">
      <SmallHeading text="My Projects"></SmallHeading>
      <MediumHeading text="Have a look some of my latest works"></MediumHeading>
      <div className="row d-flex mt-5">
        {
          projectData.map((project, index) => <ProjectCard key={index} project={project}></ProjectCard>)
        }
      </div>
    </section>
  );
};

export default Projects;