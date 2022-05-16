import React from "react";
import "./NavBar.css";
import logo from "../../logo.svg";
import { Navbar } from "react-materialize";
import { NavLink, Link } from "react-router-dom";

const NavBar = (props) => {
  const categories = ["Jersey", "Stick", "Skate", "Helmet", "Gloves", "Bundle"];

  return (
    <>
      <Navbar
        alignLinks="right"
        brand={
          <Link to={"/"}>
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        }
        id="mobile-nav"
        className="custom-nav"
        centerLogo={false}
        fixed={true}>
          
        {categories.map((category, index) => 
          <NavLink key={index} to={`/categories/${category}`} className="custom-nav-item">
            {category}
          </NavLink>
        )}

        <NavLink to={`/cart`} className="custom-nav-item">
          {props.children}
        </NavLink>
      </Navbar>
    </>
  );
};

export default NavBar;