import React from "react";

const ProjectBoard = ({ project, closeModal }) => {
  return (
    <div className="board-background" onClick={closeModal}>
      <div className="project-board">
        <div className="board-header">
          <span className="project-title">Project Title</span>
          <button className="close-button" type="button" onClick={closeModal}>
            <span className="close-inner"></span>
          </button>
        </div>
        <img
          className="hero-image"
          src={require(`../images/projects/hero_images/temp_image.png`)}
          alt="Project Title"
        />
        <p className="project-description">Project description goes here...</p>
        <div className="project-links-tags">Links and tags go here...</div>
      </div>
    </div>
  );
};

export default ProjectBoard;
