import { Row, Col, Image } from "react-bootstrap";

const MovieGrid = ({ recentMovies, no_poster }) => {
  return (
    <Row className="g-2">
      {recentMovies.map((movie) => (
        <Col
          key={movie}
          xs={4}
          md={2}
          className="flex-grow-0"
          style={{ width: "20%" }}
        >
          <div>
            <Image
              src={no_poster}
              alt="Movie Poster"
              className="object-fit-cover ratio w-100 h-100 rounded"
            />
          </div>
          <div className="text-center mt-2">
            <p className="small mb-0 text-truncate">
              {movie || "Untitled Movie"}
            </p>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default MovieGrid;
