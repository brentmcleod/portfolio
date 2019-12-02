import React from "react";
import Carousel from "./Carousel";
import ProjectLinks from "./ProjectLinks";
import ProjectTags from "./ProjectTags";

const ProjectBoard = ({ project, closeModal }) => {
  return (
    <div className="board-background" onClick={closeModal}>
      <div className="project-board" onClick={e => e.stopPropagation()}>
        <div className="board-header">
          <span className="project-title">{project.title}</span>
          <button className="close-button" type="button" onClick={closeModal}>
            <span className="close-inner"></span>
          </button>
        </div>
        <Carousel slides={project.images} indicators={true} arrows={true} />
        <div className="project-detail-wrapper">
          <div className="project-description">
            {project.description.split("\n").map(p => (
              <p>{p}</p>
            ))}
          </div>
          <div className="project-links-tags">
            <ProjectLinks
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
            />
            <ProjectTags tags={project.tags} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBoard;
