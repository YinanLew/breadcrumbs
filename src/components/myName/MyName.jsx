import React from "react";
import { Link } from "react-router-dom";

function MyName() {
  return (
    <div>
      <div>My Name</div>
      <Link to="/myname/filea">File A</Link>
      <Link to="/myname/fileb">File B</Link>
      <Link to="/myname/projects">Projects</Link>
    </div>
  );
}

export default MyName;
