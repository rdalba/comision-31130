import React from "react";
import '../styles/NavBar.css'
import logo from "../logo.svg";
import {Icon, Navbar, NavItem} from "react-materialize";

const NavBar = (props) => {
    return (
        <>
            <Navbar
                alignLinks="right"
                brand={<img src={logo} className="App-logo" alt="logo"/>}
                id="mobile-nav"
                className="custom-nav"
                centerLogo={false}
                fixed={true}
                menuIcon={<Icon>menu</Icon>}
            >
                <NavItem className="custom-nav-item" href="https://shop.nhl.com/san-jose-sharks/t-36480811+z-9302064-3930396032?_ref=m-TOPNAV">
                    San Jose Sharks Official Shop
                </NavItem>
                <NavItem className="custom-nav-item" href="https://shop.nhl.com/florida-panthers/t-31080624+z-9592359-526191922?_ref=m-TOPNAV">
                    Phanthers Official Shop
                </NavItem>
                <NavItem className="custom-nav-item" href="https://shop.nhl.com/new-york-rangers/t-36373004+z-9999451-2213146187?_ref=m-TOPNAV">
                    New York Ranger Official Shop
                </NavItem>
                <NavItem className="custom-nav-item">
                    {props.children}
                </NavItem>
            </Navbar>
        </>
    );

}

export default NavBar;