import { Container, Button, Image, Row, Col } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import Feature from "../components/ui/Feature";

const Home = () => {
  const featuresData = [
    {
      icon: "bi-film",
      title: "Create Movie Lists",
      description:
        "Build and customize your own movie lists. Organize films by genre, mood, or any theme you like.",
    },
    {
      icon: "bi-star-fill",
      title: "Rate & Review Movies",
      description:
        "Give movies your own ratings and write short reviews. Remember what you thought.",
    },
    {
      icon: "bi-search",
      title: "Discover New Movies",
      description:
        "Explore new films based on your interests and lists. Find what to watch next.",
    },
  ];

  return (
    <Container>
      <div className="px-4 py-5 my-5 text-center">
        <Image
          className="d-block mx-auto mb-4"
          src={logo}
          alt=""
          width="108"
          height="86"
        />
        <div className="col-lg-6 mx-auto">
          <h1 className="mb-4">
            Movies worth remembering
            <br />
            Lists worth keeping
            <br />
            Welcome to MovieShelf
          </h1>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Button
              as={NavLink}
              to="/profile"
              variant="primary"
              size="lg"
              className="px-4 gap-3"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
      <div className="px-4 py-5">
        <h2 className="pb-2 border-bottom">MovieShelf lets you…</h2>
        <Row className="g-4 py-5" xs={1} lg={3}>
          {featuresData.map((item, index) => (
            <Feature
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Home;
