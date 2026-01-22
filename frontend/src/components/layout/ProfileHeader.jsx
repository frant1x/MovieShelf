import { Row, Col, Image, Button } from "react-bootstrap";
import avatar from "../../assets/images/avatar.png";

const ProfileHeader = ({ user }) => {
  return (
    <Row className="position-relative h-100 d-flex align-items-end p-4 justify-content-between">
      <Col xs="auto" className="d-flex align-items-center">
        <div style={{ width: "100px", height: "100px" }}>
          <Image
            src={avatar}
            alt="Profile"
            className="w-100 h-100"
            roundedCircle
          />
        </div>
        <div className="ms-4">
          <h4 className="fw-bold mb-3">{user.username}</h4>
          <Button size="sm" variant="primary">
            Edit Profile
          </Button>
        </div>
      </Col>

      <Col xs="auto" className="d-flex gap-4 text-center mb-2">
        <div className="d-flex flex-column">
          <h4 className="fw-bold mb-0">0</h4>
          <span className="text-secondary small">Movies</span>
        </div>
        <div className="d-flex flex-column">
          <h4 className="fw-bold mb-0">0</h4>
          <span className="text-secondary small">Lists</span>
        </div>
        <div className="d-flex flex-column">
          <h4 className="fw-bold mb-0">0</h4>
          <span className="text-secondary small">Reviews</span>
        </div>
      </Col>
    </Row>
  );
};

export default ProfileHeader;
