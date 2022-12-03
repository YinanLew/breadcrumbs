import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      Home Page
      <div>
        <Link to="/myname">My Name</Link>
      </div>
    </div>
  );
}

export default Home;
