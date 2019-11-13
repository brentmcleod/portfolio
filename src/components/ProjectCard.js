import React from "react";

const ProjectCard = ({ project, openModal }) => {
  return (
    <div className="project-card" onClick={openModal}>
      <img
        className="card-image"
        src={require(`../images/projects/card_images/${project.name}.png`)}
        alt={project.title}
      />
      <div className="card-title-wrapper">
        <p className="card-title">{project.title}</p>
        <p className="card-tags">{project.tags.join(", ")}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
