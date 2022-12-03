import React from "react";
import Header from "./components/layout/Header";
import BreadcrumbsBar from "./components/ui/Breadcrumbs";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MyName from "./components/myName/MyName.jsx";
import Projects from "./components/myName/projects/Projects";
import FileA from "./components/myName/files/FileA";
import FileB from "./components/myName/files/FileB";
import MySuperSecretProject from "./components/myName/projects/superProjects/MySuperSecretProject";
import MySuperSecretFile from "./components/myName/projects/superProjects/MySuperSecretFile/MySuperSecretFile";

function App() {
  return (
    <div className="App">
      <Header />
      <BreadcrumbsBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/myname" element={<MyName />}></Route>
        <Route path="/myname/projects" element={<Projects />}></Route>
        <Route path="/myname/filea" element={<FileA />}></Route>
        <Route path="/myname/fileb" element={<FileB />}></Route>
        <Route
          path="/myname/projects/mysupersecretproject"
          element={<MySuperSecretProject />}
        ></Route>
        <Route
          path="/myname/projects/mysupersecretproject/mysupersecretfile"
          element={<MySuperSecretFile />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
