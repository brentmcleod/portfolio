import React, { useState } from "react";
import { projects } from "../../projects";
import ProjectCard from "../ProjectCard";
import ProjectBoard from "../ProjectBoard";

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    document.body.classList.toggle("modal-open");
    setModalOpen(!modalOpen);
  };

  return (
    <section id="portfolio">
      <h2>Take a look at some of my work</h2>
      <div className="showcase">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} openModal={toggleModal} />
        ))}
      </div>
      {modalOpen && <ProjectBoard closeModal={toggleModal} />}
    </section>
  );
};

export default Portfolio;
