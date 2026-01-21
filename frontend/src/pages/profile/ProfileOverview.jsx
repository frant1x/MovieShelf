import { Link } from "react-router-dom";
import no_poster from "../../assets/images/no-poster.png";
import { Row, Col, Image, Stack } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";

const ProfileOverview = () => {
  const { user } = useOutletContext();
  const recentMovies = [1, 2, 3, 4, 5];
  const recentLists = [1, 2];
  const recentReviews = [1, 2];

  return (
    <div>
      {/* 1. Останні переглянуті фільми (max 5) */}
      <section className="mb-3">
        <div className="d-flex justify-content-between align-items-end mb-3 border-bottom border-secondary pb-2">
          <h6 className="text-uppercase fw-bold mb-0">Recently Watched</h6>
          <Link
            to="/profile/movies"
            className="small text-secondary text-decoration-none"
          >
            All movies
          </Link>
        </div>
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
      </section>

      {/* 2. Останні списки (max 3) */}
      <section className="mb-3">
        <div className="d-flex justify-content-between align-items-end mb-3 border-bottom border-secondary pb-2">
          <h6 className="text-uppercase fw-bold mb-0">Recent Lists</h6>
          <Link
            to="/profile/lists"
            className="small text-secondary text-decoration-none"
          >
            All lists
          </Link>
        </div>
        <Stack gap={3}>
          {recentLists.map((list) => (
            <Row key={list} className="align-items-start g-3 mb-2">
              <Col xs="auto">
                {/* Каскадний ефект постерів як на референсі */}
                <div className="d-flex">
                  {recentMovies.map((i) => (
                    <div
                      key={i}
                      className="border border-dark"
                      style={{
                        width: "100px",
                        marginLeft: i === 1 ? "0" : "-50px",
                        zIndex: 5 - i,
                      }}
                    >
                      <Image
                        src={no_poster}
                        className="w-100 h-100 object-fit-cover rounded"
                      />
                    </div>
                  ))}
                </div>
              </Col>
              <Col>
                <h5 className="mb-1 fw-bold">{list}</h5>
                <div className="small text-secondary mb-1">
                  57 films <span className="ms-2">❤️ 18</span>
                </div>
                <p className="small text-secondary mb-0">
                  Here are my favorite films.
                </p>
              </Col>
            </Row>
          ))}
        </Stack>
      </section>

      {/* 3. Останні рев'ю (max 3) */}
      <section>
        <div className="d-flex justify-content-between align-items-end mb-3 border-bottom border-secondary pb-2">
          <h6 className="text-uppercase fw-bold mb-0">Recent Reviews</h6>
          <Link
            to="/profile/reviews"
            className="small text-secondary text-decoration-none"
          >
            All reviews
          </Link>
        </div>
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
                  ❤️ Like review{" "}
                  <span className="ms-2 fw-normal">52 likes</span>
                </div>
              </Col>
            </Row>
          ))}
        </Stack>
      </section>
    </div>
  );
};

export default ProfileOverview;
