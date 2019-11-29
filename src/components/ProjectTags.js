import React from "react";
import { tagColors } from "../utils/tagColors";

const ProjectTags = ({ tags }) => {
  return (
    <>
      <div className="project-tags-wrapper">
        <img className="tag-icon" src="tag-icon-24px.svg" alt="Tag Icon" />
        {tags.map(tag => (
          <div
            key={tag}
            className="project-tag"
            style={{ backgroundColor: tagColors[tag] || tagColors["default"] }}
          >
            {tag}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectTags;
