import { Row, Col, Image, Stack } from "react-bootstrap";

const ListSection = ({ recentLists, recentMovies, no_poster }) => {
  return (
    <Stack gap={3}>
      {recentLists.map((list) => (
        <Row key={list} className="align-items-start g-3 mb-2">
          <Col xs="auto">
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
  );
};

export default ListSection;
