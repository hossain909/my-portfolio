import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ProjectCard = ({ project }) => {
  const { name, img, desc, githubLink, liveLink } = project
  const { technology } = project || []


  return (
    <div className="col-md-6 m-auto">
      <div className="card rounded my-3" style={{ backgroundColor: "#f0c400" }}>
        <img className="img-fluid w-100" src={img} alt={name} style={{ height: "250px" }} />
        <div className="card-body">
          <h4 className="card-title font-weight-bold text-primary text-center">{name}</h4>
          <p className="card-text my-3 ">{desc}</p>
          {
            technology.map(item => <li className="d-inline-block bg-dark ml-2 text-light px-1 mt-2 rounded">{item}</li>

            )
          }
          <div className="w-25 ml-auto pt-2">
            <a href={githubLink} target="_blank" alt="github" rel="noreferrer"><FontAwesomeIcon className="font-25 text-dark m-2" icon={faGithub} /></a>
            <a href={liveLink} target="_blank" alt="livelink" rel="noreferrer"><FontAwesomeIcon className="font-25 text-dark m-2" icon={faExternalLinkAlt} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;