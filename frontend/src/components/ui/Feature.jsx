import { Col } from 'react-bootstrap';

const Feature = ({ icon, title, description }) => {
  return (
    <Col className="d-flex align-items-start">
      <div className="d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
        <i className={`bi ${icon}`}></i>
      </div>
      <div>
        <h3 className="fs-2 text-body-emphasis">{title}</h3>
        <p>{description}</p>
      </div>
    </Col>
  );
};

export default Feature;