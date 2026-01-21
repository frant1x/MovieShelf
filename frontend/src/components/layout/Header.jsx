import { Container, Nav, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import useAuth from "../../hooks/useAuth";
import useModal from "../../hooks/useModal";

const Header = () => {
  const { user } = useAuth();
  const { openLogin } = useModal();

  return (
    <Container>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <NavLink
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <Image
            className="me-2"
            src={logo}
            alt="Logo"
            width="40"
            height="32"
          />
          <span className="fs-4">MovieShelf</span>
        </NavLink>
        <Nav variant="pills" as="ul">
          <Nav.Item as="li">
            <Nav.Link as={NavLink} to="/movies">
              Movies
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={NavLink} to="/tv-shows">
              TV Shows
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={NavLink} to="/lists">
              Lists
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            {user ? (
              <Nav.Link as={NavLink} to="/profile">
                Profile
              </Nav.Link>
            ) : (
              <Nav.Link onClick={openLogin}>Sign In</Nav.Link>
            )}
          </Nav.Item>
        </Nav>
      </header>
    </Container>
  );
};

export default Header;
