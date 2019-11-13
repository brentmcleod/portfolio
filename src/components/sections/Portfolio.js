import React from "react";
import { projects } from "../../projects";
import ProjectCard from "../ProjectCard";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Take a look at some of my work.</h2>
      <div className="showcase">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
