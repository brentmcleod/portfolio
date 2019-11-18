import React from "react";

const ProjectLinks = ({ demoUrl }) => {
  return (
    <>
      <h3>Links</h3>
      <div className="project-links-wrapper">
        {demoUrl && (
          <a
            id="demo-link"
            className="project-link"
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        )}
        <a
          id="github-link"
          className="project-link"
          href="https://github.com/brentmcleod"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </>
  );
};

export default ProjectLinks;
