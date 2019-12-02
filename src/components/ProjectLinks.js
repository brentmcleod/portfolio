import React from "react";

const ProjectLinks = ({ demoUrl, githubUrl }) => {
  return (
    <>
      {(demoUrl || githubUrl) && (
        <div className="project-links-wrapper">
          {demoUrl && (
            <a
              id="demo-link"
              className="project-link"
              href={"/projects/" + demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          )}
          {githubUrl && (
            <a
              id="github-link"
              className="project-link"
              href={"https://github.com/brentmcleod/" + githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
        </div>
      )}
    </>
  );
};

export default ProjectLinks;
