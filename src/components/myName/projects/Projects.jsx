import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div>
      <div>Projects</div>
      <Link to="/myname/projects/mysupersecretproject">
        My Super Secret Project
      </Link>
    </div>
  );
}

export default Projects;
