import { useState } from "react";
import { Nav, Button, Dropdown, Collapse, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ProfileSidebar = () => {
  const [openSection, setOpenSection] = useState(false);
  const { logout } = useAuth();

  return (
    <Col xs="auto" className="p-3 border-end fs-5" style={{ width: "240px" }}>
      <Nav className="flex-column">
        <Nav.Item className="mb-1">
          <NavLink as={NavLink} to="/profile" className="text-decoration-none">
            Overview
          </NavLink>
        </Nav.Item>

        <Nav.Item className="mb-1">
          <Dropdown.Toggle
            variant="link"
            className="text-decoration-none p-0 shadow-none fs-5"
            onClick={() => setOpenSection(!openSection)}
          >
            Lists
          </Dropdown.Toggle>
          <Collapse in={openSection}>
            <div>
              <Nav className="flex-column">
                <Nav.Link as={NavLink} to="/profile/lists" className="py-1">
                  My Lists
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/profile/shared-lists"
                  className="py-1"
                >
                  Shared Lists
                </Nav.Link>
              </Nav>
            </div>
          </Collapse>
        </Nav.Item>

        <Nav.Item className="mb-1">
          <NavLink
            as={NavLink}
            to="/profile/movies"
            className="text-decoration-none"
          >
            Movies
          </NavLink>
        </Nav.Item>

        <Nav.Item className="mb-1">
          <NavLink
            as={NavLink}
            to="/profile/reviews"
            className="text-decoration-none"
          >
            Reviews
          </NavLink>
        </Nav.Item>

        <hr className="my-2" />

        <Nav.Item className="mb-1">
          <NavLink
            as={NavLink}
            to="/profile/settings"
            className="text-decoration-none"
          >
            Settings
          </NavLink>
        </Nav.Item>
        <Nav.Item className="mb-1">
          <Button
            variant="link"
            className="text-decoration-none p-0 shadow-none fs-5"
            onClick={logout}
          >
            Sign Out
          </Button>
        </Nav.Item>
      </Nav>
    </Col>
  );
};

export default ProfileSidebar;
