import useAuth from "../../hooks/useAuth";
import { Container, Row, Card, Col } from "react-bootstrap";
import ProfileHeader from "../../components/layout/ProfileHeader";
import ProfileSidebar from "../../components/layout/ProfileSidebar";
import { Outlet } from "react-router-dom";

const Profile = () => {
  const { user } = useAuth();

  return (
    <Container>
      <ProfileHeader user={user} />
      <Row>
        <Card>
          <Card.Body>
            <Container fluid>
              <Row>
                <ProfileSidebar />
                <Col className="p-3">
                  <Outlet context={{ user }} />
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default Profile;
