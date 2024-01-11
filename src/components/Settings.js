import {
  Container,
  Button,
  Form
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
import avatar from "../assets/avatar.png"

const Settings = () => {
    return (
        <div className="App">
            <Header></Header>
            <Container fluid className="w-75 text-secondary">
      <h2 className="text-capitalize w-100">account</h2>
      <hr />

      <Container fluid className="w-100 d-flex">
        <Container className="w-25 text-secondary d-inline-block">
          <h3 className="text-uppercase">membership & billing</h3>
          <Button className="btn btn-light px-3 text-uppercase">cancel membership</Button>
        </Container>

        <Container className="w-75 text-secondary">
          <fieldset className="d-inline-block w-100">
            <Form.Control type="email" placeholder="Your.Email@example.com" className="fw-bold border-0 settingsInput" />
            <Button className="btn bg-transparent border-0 text-info float-end">Change account email</Button>
          </fieldset>

          <fieldset className="d-inline-block w-100">
            <p className="d-inline-block">Password: </p>
            <Form.Control type="password" placeholder="Your password" className="fw-bold border-0 settingsInput" />
            <Button className="btn bg-transparent border-0 text-info float-end">Change password</Button>
          </fieldset>

          <fieldset className="d-inline-block w-100">
            <p className="d-inline-block">Phone: </p>
            <Form.Control type="tel" placeholder="Your phone number" className="fw-bold border-0 settingsInput" />
            <Button className="btn bg-transparent border-0 text-info float-end">Change phone number</Button>
          </fieldset>

          <hr />

          <fieldset className="d-inline-block w-100">
            <i className="bi bi-paypal d-inline-block"></i>
            <Form.Control type="email" placeholder="Your.paypal.Email@example.com" className="fw-bold border-0 settingsInput" />
            <Button className="btn bg-transparent border-0 text-info float-end">Update payment info</Button>
            <a href="#" className="d-inline-block w-100"><Button className="btn bg-transparent border-0 text-info float-end">Billing details</Button></a>
          </fieldset>

          <hr />

          <a href="#" className="d-inline-block w-100"><Button className="btn bg-transparent border-0 text-info float-end">Redeem gift card or promo code</Button></a>
          <a href="#" className="d-inline-block w-100"><Button className="btn bg-transparent border-0 text-info float-end">Where to buy gift cards</Button></a>
        </Container>
      </Container>

      <hr />

      <Container fluid className="w-100">
        <Container className="d-flex w-100">
          <h3 className="text-uppercase w-25">plan details</h3>
          <Container className="w-75 d-flex">
            <p className="fw-bold d-inline-block w-100">Premium <i className="bi bi-badge-4k d-inline-block"></i></p>
            <a href="#" className="d-inline-block w-100"><Button className="btn bg-transparent border-0 text-info float-end">Change account email</Button></a>
          </Container>
        </Container>
        <hr />

        <Container className="d-flex w-100">
          <h3 className="text-uppercase w-25">settings</h3>
          <Container className="w-75 d-block">
            <a href="#" className="d-inline-block w-100"><Button className="btn bg-transparent border-0 text-info">Parental controls</Button></a>
            <a href="#" className="d-inline-block w-100"><Button className="btn bg-transparent border-0 text-info">Test participation</Button></a>
            <a href="#" className="d-inline-block w-100"><Button className="btn bg-transparent border-0 text-info">Menage download devices</Button></a>
            <a href="#" className="d-inline-block w-100"><Button className="btn bg-transparent border-0 text-info">Activate device</Button></a>
            <a href="#" className="d-inline-block w-100"><Button className="btn bg-transparent border-0 text-info">Recent device streaming activity</Button></a>
            <a href="#" className="d-inline-block w-100"><Button className="btn bg-transparent border-0 text-info">Sign out of all devices</Button></a>
          </Container>
        </Container>
        <hr />

        <Container className="w-100 d-flex flex-wrap">
          <h3 className="text-uppercase w-25">my profile</h3>
          <Container className="w-75 d-inline-block">
            <Container className="d-flex w-50 float-start">
              <img src={avatar} width="45" alt="Profile Avatar" />
              <p className="fw-bold px-3 mt-2"> NomeUtente </p>
            </Container>
          </Container>
          <Container className="d-flex w-75 me-5 justify-content-evenly">
            <ul className="list-unstyled">
              <li><a href="#" className="float-start "><Button className="btn bg-transparent border-0 text-info float-end">Language</Button></a></li>
              <li><a href="#" className="float-start "><Button className="btn bg-transparent border-0 text-info float-end">Playback settings</Button></a></li>
              <li><a href="#" className="float-start "><Button className="btn bg-transparent border-0 text-info float-end">Subtitle appearance</Button></a></li>
            </ul>
            <ul className="list-unstyled">
              <li><a href="#" className="float-start "><Button className="btn bg-transparent border-0 text-info float-end">Viewing activity</Button></a></li>
              <li><a href="#" className="float-start "><Button className="btn bg-transparent border-0 text-info float-end">Ratings</Button></a></li>
            </ul>
            <ul className="list-unstyled">
                <li><a href="#" className="d-inline-block w-100"><Button className="btn bg-transparent border-0 text-info float-end">Manage profiles</Button></a></li>
                <li><a href="#" className="d-inline-block w-100"><Button className="btn bg-transparent border-0 text-info float-end p-0 m-0">Add profile email</Button></a></li>
            </ul>
          </Container>
        </Container>
      </Container>

      <hr />
    </Container>
            <Footer></Footer>
        </div>
    );
  };
  
  export default Settings;