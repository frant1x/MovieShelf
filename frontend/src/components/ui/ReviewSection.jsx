import { Row, Col, Image, Stack } from "react-bootstrap";

const ReviewSection = ({ recentReviews, no_poster }) => {
  return (
    <Stack gap={4}>
      {recentReviews.map((review) => (
        <Row key={review} className="g-3">
          <Col xs="auto">
            <div
              style={{ width: "100px" }}
              className="border border-dark overflow-hidden"
            >
              <Image
                src={no_poster}
                className="w-100 h-100 object-fit-cover rounded"
              />
            </div>
          </Col>
          <Col>
            <div className="d-flex align-items-baseline gap-2">
              <h5 className="mb-0 fw-bold">{review}</h5>
              <span className="text-secondary small">1985</span>
            </div>
            <div className="my-1 d-flex align-items-center gap-2">
              <span className="text-success">★★★★</span>
              <span
                className="text-secondary tiny"
                style={{ fontSize: "0.8rem" }}
              >
                Rewatched 18 Jan 2026
              </span>
            </div>
            <p className="small text-secondary mt-2">
              Smart, funny, poignant. A fun watch. Will continue to watch as
              much of brooks as I can.
            </p>
            <div className="small fw-bold text-secondary">
              ❤️ Like review <span className="ms-2 fw-normal">52 likes</span>
            </div>
          </Col>
        </Row>
      ))}
    </Stack>
  );
};

export default ReviewSection;
