import { Container, Row, Col, Nav, Image } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <Row
        as="footer"
        className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top"
      >
        <Col md={4} className="d-flex align-items-center">
          <p className="mb-0 text-body-secondary">
            © {new Date().getFullYear()} MovieShelf
          </p>
        </Col>
        <Col
          md={4}
          className="d-flex align-items-center justify-content-center mb-3 mb-md-0"
        >
          <Nav.Link
            as={NavLink}
            to="/"
            className="link-body-emphasis text-decoration-none p-0"
          >
            <Image src={logo} alt="MovieShelf Logo" width="40" height="32" />
          </Nav.Link>
        </Col>
        <Col md={4}>
          <Nav className="justify-content-end">
            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/movies"
                className="px-2 text-body-secondary"
              >
                Movies
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/tv-shows"
                className="px-2 text-body-secondary"
              >
                TV Shows
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/lists"
                className="px-2 text-body-secondary"
              >
                Lists
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/profile"
                className="px-2 text-body-secondary"
              >
                Profile
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
