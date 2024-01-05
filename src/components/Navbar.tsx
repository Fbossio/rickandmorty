import { Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/Rick_and_Morty.svg';

function NavbarComponent() {
    const statusOptions = ['Alive', 'Dead', 'Unknown'];
    const genderOptions = ['Female', 'Male', 'Genderless', 'Unknown'];
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="Logo"
            src={logo}
            width="200"
            height="50"
            className="d-inline-block align-top"
          />            
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" /> {/* Añadir esto */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">            
          <NavDropdown title="Status" id="collapsible-nav-dropdown">
              {statusOptions.map((status) => (
                <NavDropdown.Item key={status} eventKey={status}>
                  {status}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown title="Gender" id="collapsible-nav-dropdown">
            {genderOptions.map((gender) => (
                <NavDropdown.Item key={gender} eventKey={gender}>
                  {gender}
                </NavDropdown.Item>
              ))}                    
            </NavDropdown>
          </Nav>          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
