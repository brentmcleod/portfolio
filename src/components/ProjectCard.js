import React from "react";

const ProjectCard = ({ project, openModal }) => {
  return (
    <button className="project-card" type="button" onClick={openModal}>
      <img
        className="card-image"
        src={require(`../images/projects/card_images/${project.name}.png`)}
        alt={project.title}
      />
      <div className="card-details-wrapper">
        <p className="card-title">{project.title}</p>
        <p className="card-tags">{project.tags.join(", ")}</p>
        <p className="card-instruction">view project</p>
      </div>
    </button>
  );
};

export default ProjectCard;
