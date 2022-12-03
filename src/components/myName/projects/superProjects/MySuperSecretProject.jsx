import React from "react";
import { Link } from "react-router-dom";

function MySuperSecretProject() {
  return (
    <div>
      MySuperSecretProject
      <div>
        <Link to="/myname/projects/mysupersecretproject/mysupersecretfile">
          My Super Secret File
        </Link>
      </div>
    </div>
  );
}

export default MySuperSecretProject;
