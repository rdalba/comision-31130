import React from "react";
import "./NavBar.css";
import logo from "../../logo.svg";
import { Icon, Navbar, NavItem, Dropdown, Divider } from "react-materialize";

const NavBar = (props) => {
  return (
    <>
      <Navbar
        alignLinks="right"
        brand={<img src={logo} className="App-logo" alt="logo" />}
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
      >
        <NavItem href="#">Novedades</NavItem>

        <Dropdown
          id="jersey"
          options={{
            alignment: "left",
            autoTrigger: true,
            closeOnClick: true,
            constrainWidth: true,
            container: null,
            coverTrigger: true,
            hover: false,
            inDuration: 150,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 250,
          }}
          trigger={
            <a href="#!">
              Jersey <Icon right>arrow_drop_down</Icon>
            </a>
          }
        >
          <a href="#">Local</a>
          <a href="#">Visitante</a>
          <Divider />
          <a href="#">Alternativa</a>
        </Dropdown>

        <Dropdown
          id="remera"
          options={{
            alignment: "left",
            autoTrigger: true,
            closeOnClick: true,
            constrainWidth: true,
            container: null,
            coverTrigger: true,
            hover: false,
            inDuration: 150,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 250,
          }}
          trigger={
            <a href="#!">
              Remera <Icon right>arrow_drop_down</Icon>
            </a>
          }
        >
          <a href="#">Manga Corta</a>
          <a href="#">Manga Larga</a>
          <Divider />
          <a href="#">Ofertas</a>
        </Dropdown>

        <Dropdown
          id="buzo"
          options={{
            alignment: "left",
            autoTrigger: true,
            closeOnClick: true,
            constrainWidth: true,
            container: null,
            coverTrigger: true,
            hover: false,
            inDuration: 150,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 250,
          }}
          trigger={
            <a href="#!">
              Buzos <Icon right>arrow_drop_down</Icon>
            </a>
          }
        >
          <a href="#">Buzo Hombre</a>
          <a href="#">Buzo Mujer</a>
          <a href="#">Buzo Niños</a>
          <Divider />
          <a href="#">Ofertas</a>
        </Dropdown>

        <Dropdown
          id="varios"
          options={{
            alignment: "left",
            autoTrigger: true,
            closeOnClick: true,
            constrainWidth: true,
            container: null,
            coverTrigger: true,
            hover: false,
            inDuration: 150,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 250,
          }}
          trigger={
            <a href="#!">
              Varios <Icon right>arrow_drop_down</Icon>
            </a>
          }
        >
          <a href="#">Gorras</a>
          <a href="#">Bolsos</a>
          <a href="#">Puck</a>
          <a href="#">Recuerdos</a>
          <Divider />
          <a href="#">Ofertas</a>
        </Dropdown>

        <NavItem href="#">Reglas</NavItem>

        <Dropdown
          id="redes"
          options={{
            alignment: "left",
            autoTrigger: true,
            closeOnClick: true,
            constrainWidth: true,
            container: null,
            coverTrigger: true,
            hover: false,
            inDuration: 150,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 250,
          }}
          trigger={
            <a href="#!">
              Redes Sociales <Icon right>arrow_drop_down</Icon>
            </a>
          }
        >
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
         
        </Dropdown>

        <NavItem className="custom-nav-item">{props.children}</NavItem>
      </Navbar>
    </>
  );
};

export default NavBar;
