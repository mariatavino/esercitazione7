import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
import avatar from "../assets/avatar.png"

const Profile = () => {
    return (
        <div className='App'>
        <Header></Header>
    <Container fluid className="w-50">
      <h2 className="text-capitalize">edit profile</h2>
      <hr className="w-100" />
      <Row className="d-flex">
        <Col className="position-relative w-25">
          <Image src={avatar} className="w-75" />
          {/* <Pencil className="bi-pencil position-absolute top-0 start-0 ms-3 mt-5 pt-3" /> */}
        </Col>
        <Col className="w-75">
          <Form.Control type="text" className="form-control-plaintext border-0 rounded-0 bg-secondary text-white" placeholder="Your Username" />
          <Form.Group className="my-4">
            <Form.Label htmlFor="select">Language:</Form.Label>
            <Form.Select id="select" className="form-select text-bg-dark w-auto" aria-label="Default">
            <option value="english">English</option>
          <option value="french">French</option>
          <option value="spanish">Spanish</option>
          <option value="german">German</option>
          <option value="italian">Italian</option>
          <option value="portuguese">Portuguese</option>
          <option value="chinese">Chinese</option>
          <option value="japanese">Japanese</option>
          <option value="russian">Russian</option>
          <option value="arabic">Arabic</option>
            </Form.Select>
          </Form.Group>
          <hr />
          <Form.Group>
          <Form.Label htmlFor="ratings">Age Ratings:</Form.Label>
            <Form.Select id="ratings" className="form-select text-bg-dark w-auto" aria-label="Default">
            <option value="all">All Maturity Settings</option>
          <option value="teens">Ratings for Teens (vm18)</option>
          <option value="kid">Ratings for Kids (vm12)</option>
          </Form.Select>
      </Form.Group>
          <hr />
          <Form.Group>
            <Form.Check type="checkbox" id="checkbox1" label="Autoplay next episode in a series on all devices." />
            <Form.Check type="checkbox" id="checkbox2" label="Autoplay previews while browsing on all devices." />
          </Form.Group>
        </Col>
      </Row>
      <hr />
      <Row className="d-flex justify-content-evenly">
        <Button variant="light" className="w-auto rounded-1 text-uppercase fw-bold px-4">save</Button>
        <Button variant="outline-secondary" className="w-auto rounded-1 text-uppercase px-4">cancel</Button>
        <Button variant="outline-secondary" className="w-auto rounded-1 text-uppercase px-4">delete profile</Button>
      </Row>
    </Container>
    <Footer></Footer>
        </div>
  );
}

export default Profile;