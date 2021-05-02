import React from 'react';
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
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident voluptatem aliquid voluptate voluptatum vero odio, sequi atque natus nam eos!",
      img: project1,
      githubLink: "https://github.com/hossain909/learn-programming",
      liveLink: "https://tech-world-bd.web.app/"
    },
    {
      name: "Tech World",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident voluptatem aliquid voluptate voluptatum vero odio, sequi atque natus nam eos!",
      img: project2
    },
    {
      name: "Tech World",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident voluptatem aliquid voluptate voluptatum vero odio, sequi atque natus nam eos!",
      img: project3
    },
    {
      name: "Tech World",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident voluptatem aliquid voluptate voluptatum vero odio, sequi atque natus nam eos!",
      img: project3
    },
    {
      name: "Tech World",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident voluptatem aliquid voluptate voluptatum vero odio, sequi atque natus nam eos!",
      img: project3
    },
  ]
  return (
    <section id="projects" className="container py-5">
      <SmallHeading text="My Projects"></SmallHeading>
      <MediumHeading text="Have a look some of my latest works"></MediumHeading>
      <div className="row d-flex mt-5">
        {
          projectData.map((project, index) => <ProjectCard project={project}></ProjectCard>)
        }
      </div>
    </section>
  );
};

export default Projects;