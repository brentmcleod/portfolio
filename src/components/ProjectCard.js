import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img
        className="project-thumbnail"
        src={require(`../images/projects/thumbnails/${project.name}.png`)}
        alt={project.title}
      />
      <div className="project-title-wrapper">
        <p className="project-title">{project.title}</p>
        <p className="project-tags">{project.tags.join(", ")}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
