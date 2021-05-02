import React from 'react';
import Button from "../../../UI/Buttons";

const ProjectCard = ({ project }) => {
  const { name, img, desc, githubLink, liveLink } = project

  const cardStyle = {
    width: '25rem',
    margin: "auto",
    marginBottom: "35px",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#073b1a",
    boxShadow: "10px 10px 94px 50px rgba(0,0,0,0.54) inset"
  }
  return (
    <div className="col-md-4 m-auto">
      <div className="card my-3" style={{ cardStyle }}>
        <img className="img-fluid w-100" src={project.img} alt={project.name} style={{ height: "200px" }} />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text my-3">{desc}</p>
          <div className="d-flex justify-content-around mt-5">
            <Button link={githubLink} label="Github"></Button>
            <Button link={liveLink} label="Live Demo"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;