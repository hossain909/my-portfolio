import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ProjectCard = ({ project }) => {
  const { name, img, desc, githubLink, liveLink } = project

  return (
    <div className="col-md-6 m-auto">
      <div className="card rounded text-light my-3" style={{ backgroundColor: "#13a955" }}>
        <img className="img-fluid w-100" src={project.img} alt={project.name} style={{ height: "250px" }} />
        <div className="card-body">
          <h4 className="card-title text-warning">{name}</h4>
          <p className="card-text my-3">{desc}</p>
          <div className="align-self-center mt-3">
            <a href={githubLink} target="_blank" alt="github" rel="noreferrer"><FontAwesomeIcon className="font-25 text-dark m-2" icon={faGithub} /></a>
            <a href={liveLink} target="_blank" alt="livelink" rel="noreferrer"><FontAwesomeIcon className="font-25 text-dark m-2" icon={faExternalLinkAlt} /></a>
            {/* <Button link={githubLink} label="Github"></Button>
            <Button link={liveLink} label="Live Demo"></Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;