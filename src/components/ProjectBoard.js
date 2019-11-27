import React from "react";
import Carousel from "./Carousel";
import ProjectLinks from "./ProjectLinks";
import ProjectTags from "./ProjectTags";

const ProjectBoard = ({ project, closeModal }) => {
  return (
    <div className="board-background" onClick={closeModal}>
      <div className="project-board" onClick={e => e.stopPropagation()}>
        <div className="board-header">
          <span className="project-title">Project Title</span>
          <button className="close-button" type="button" onClick={closeModal}>
            <span className="close-inner"></span>
          </button>
        </div>
        <Carousel
          slides={["temp_01.png", "temp_01.png", "temp_01.png"]}
          indicators={true}
          arrows={true}
        />
        <div className="project-detail-wrapper">
          <div className="project-description">
            <p>
              Sadipscing justo sed sit vero dolor rebum voluptua, est eirmod
              elitr vero at ipsum ut amet magna erat, diam sanctus clita dolor
              ipsum dolore et. Sit sanctus ea vero magna et, tempor labore
              voluptua lorem eirmod dolores sit ipsum clita takimata, at et
              invidunt vero ipsum no, sit aliquyam voluptua et nonumy tempor
              justo kasd. Diam amet ipsum takimata ut eirmod erat, est duo
              sadipscing eirmod magna rebum amet ea.
            </p>
            <p>
              Et vero justo dolor dolor aliquyam sea sed. Lorem sadipscing diam
              stet sanctus dolor at. Dolore eirmod et est aliquyam diam sea.
              Dolor no lorem nonumy erat sadipscing labore stet eirmod et.
            </p>
            <p>
              Magna justo et sed invidunt, amet lorem at lorem dolor aliquyam.
              Sanctus labore et magna sed sed kasd accusam ipsum, lorem voluptua
              clita sadipscing stet, lorem lorem et vero sadipscing aliquyam sed
              amet stet gubergren. Justo aliquyam duo.
            </p>
          </div>
          <div className="project-links-tags">
            <ProjectLinks demoUrl={"/demo.html"} />
            <ProjectTags
              tags={["html", "css", "javascript", "react", "other"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBoard;
