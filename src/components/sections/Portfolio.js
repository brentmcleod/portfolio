import React, { useState } from "react";
import ProjectCard from "../ProjectCard";
import ProjectBoard from "../ProjectBoard";

const Portfolio = ({ projects }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);

  const toggleModal = () => {
    document.body.classList.toggle("modal-open");
    setModalOpen(!modalOpen);
  };

  const openProject = index => {
    setCurrentProject(index);
    toggleModal();
  };

  return (
    <section id="portfolio">
      <h2>Take a look at some of my work</h2>
      <div className="project-cards-wrapper">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={{
              index,
              name: project.name,
              title: project.title,
              tags: project.tags
            }}
            openModal={openProject}
          />
        ))}
      </div>
      {modalOpen && (
        <ProjectBoard
          project={projects[currentProject]}
          closeModal={toggleModal}
        />
      )}
    </section>
  );
};

export default Portfolio;
