import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import {
  Link as RouterLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./breadcrumbs.css";

const breadcrumbNameMap = {
  "/myname": "My Name",
  "/myname/filea": "File A",
  "/myname/fileb": "File B",
  "/myname/projects": "Projects",
  "/myname/projects/mysupersecretproject": "My SuperSecret Project",
  "/myname/projects/mysupersecretproject/mysupersecretfile":
    "My Super Secret File",
};

function LinkRouter(props) {
  return <Link {...props} component={RouterLink} />;
}

function Page() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb" separator=">">
      <LinkRouter underline="hover" color="inherit" to="/">
        Home
      </LinkRouter>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography color="text.primary" key={to}>
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="inherit" to={to} key={to}>
            {breadcrumbNameMap[to]}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
}

function BreadcrumbsBar() {
  return (
    <div className="breadcrumbs-container">
      <Routes>
        <Route path="*" element={<Page />} />
      </Routes>
    </div>
  );
}

export default BreadcrumbsBar;
