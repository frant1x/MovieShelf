import { Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Імпортуємо NavLink
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <Container>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <NavLink 
          to="/" 
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <img src={logo} alt="Logo" width="40" height="32" className="bi me-2" />
          <span className="fs-4">MovieShelf</span>
        </NavLink>
        <Nav variant="pills" as="ul">
          <Nav.Item as="li">
            <Nav.Link as={NavLink} to="/movies">Movies</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={NavLink} to="/tv-shows">TV Shows</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={NavLink} to="/lists">Lists</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={NavLink} to="/login">Log In</Nav.Link>
          </Nav.Item>
        </Nav>
      </header>
    </Container>
  );
};

export default Header;