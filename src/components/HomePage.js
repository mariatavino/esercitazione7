import MovieCarousel from "./MovieCarousel";
import {
  Container,
  Dropdown,
  Row,
} from "react-bootstrap";
import {
  BsFillGridFill,
  BsFillGrid3X3GapFill,
} from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";


function HomePage() {
  return (
    <div className="App">
      <Header/>

      <Container fluid className="px-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4 me-4">TV Shows</h2>
            <Dropdown className="ml-4 mt-1">
              <Dropdown.Toggle
                variant="secondary"
                size="sm"
                className="rounded-0"
                style={{ backgroundColor: "#221f1f", marginTop:"5px"}}
              >
                Genres
              </Dropdown.Toggle>
              <Dropdown.Menu className="bg-dark">
                <Dropdown.Item className="text-white bg-dark" href="#">
                  Comedy
                </Dropdown.Item>
                <Dropdown.Item className="text-white bg-dark" href="#">
                  Drama
                </Dropdown.Item>
                <Dropdown.Item className="text-white bg-dark" href="#">
                  Thriller
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <BsFillGrid3X3GapFill className="icons" />
            <BsFillGridFill className="icons" />
          </div>
        </div>

        <h4 className="px-3 pb-3" style={{fontWeight:"bold"}}>Harry Potter</h4>
        <Container className="mb-4">
          <Row className="text-center">
          <MovieCarousel querySearch="Harry Potter" />
          </Row>
        </Container>

        <h4 className="px-3 pb-3" style={{fontWeight:"bold"}}>Star Wars</h4>
        <Container className="mb-4">
          <Row className="text-center">
          <MovieCarousel querySearch="Star Wars" />
          </Row>
        </Container>

        <h4 className="px-3 pb-3" style={{fontWeight:"bold"}}>Barbie</h4>
        <Container className="mb-4">
          <Row className="text-center">
          <MovieCarousel querySearch="Barbie" />
          </Row>
        </Container>

        <h4 className="px-3 pb-3" style={{fontWeight:"bold"}}>Star Trek</h4>
        <Container className="mb-4">
          <Row className="text-center">
          <MovieCarousel querySearch="star trek" />
          </Row>
        </Container>

        <h4 className="px-3 pb-3" style={{fontWeight:"bold"}}>Scream</h4>
        <Container className="mb-4">
          <Row className="text-center">
          <MovieCarousel querySearch="scream" />
          </Row>
        </Container>

        <h4 className="px-3 pb-3" style={{fontWeight:"bold"}}>The Jig-Saw Saga</h4>
        <Container className="mb-4">
          <Row className="text-center">
          <MovieCarousel querySearch="saw" />
          </Row>
        </Container>
        <Footer/>
      </Container>
    </div>
  );
}

export default HomePage;
