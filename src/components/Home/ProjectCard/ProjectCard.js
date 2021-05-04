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
    border: "none"
  }
  return (
    <div className="col-md-4 m-auto">
      <div className="card text-dark bg-light rounded my-3" style={{ cardStyle }}>
        <img className="img-fluid w-100" src={project.img} alt={project.name} style={{ height: "200px" }} />
        <div className="card-body">
          <h4 className="card-title primaryColor">{name}</h4>
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