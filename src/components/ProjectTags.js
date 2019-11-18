import React from "react";
import { tagColors } from "../utils/tagColours";

const ProjectTags = ({ tags }) => {
  return (
    <>
      <h3>Tags</h3>
      <div className="project-tags-wrapper">
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
