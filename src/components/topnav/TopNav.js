// import logo from "./logo.svg";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DATA } from "../../constants/en";
import "./TopNav.css";

const TopNav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to="/" className="nav-link">
          {DATA.navBrand}
        </Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/upload" className="nav-link">
          {DATA.navUpload}
        </Link>
        <Link to="/addpatient" className="nav-link">
          {DATA.navAddPatient}
        </Link>
      </Nav>
    </Navbar>
  );
};

export default TopNav;
