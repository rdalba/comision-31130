import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'


const NavBar = (props) => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Tienda de Hockey</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">


            <NavDropdown title="Novedades" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/1.1">Remeras</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.2">Buzos</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.3">Pantalones</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/1.4">Ofertas</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Remera" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/2.1">Manga Larga</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.2">Manga Corta</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/2.3">Ofertas link</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Jersey" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Local</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Visitante</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Alternativa</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Ofertas link</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Varios" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Gorras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Bolsos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Puck</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Ofertas link</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#features">Reglas</Nav.Link>
            <Nav.Link href="#pricing">Envios</Nav.Link></Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>

            <Nav.Link >
              {props.children}
            </Nav.Link>

          </Nav>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;