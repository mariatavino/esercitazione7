import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import {
    BsSearch,
    BsBellFill,
    BsPersonFill,
  } from "react-icons/bs";
  import {
    Navbar,
    Nav,
    Container,
    Dropdown,
  } from "react-bootstrap";

const Header = () =>{
    return(
        <Navbar expand="lg" variant="dark"> 
        <Navbar.Brand href="#">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "100px", height: "55px", marginLeft: '15px'}}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent" style={{display:"flex"}}>
          <Nav style={{flexBasis:"75%"}}>
            <Nav.Link href="#" style={{ fontWeight: "bold" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#" style={{ fontWeight: "bold" }}>
              TV Shows
            </Nav.Link>
            <Nav.Link href="#" style={{ fontWeight: "bold" }}>
              Movies
            </Nav.Link>
            <Nav.Link href="#" style={{ fontWeight: "bold" }}>
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" style={{ fontWeight: "bold" }}>
              My List
            </Nav.Link>
          </Nav>
          <Container style={{display:"flex", justifyContent:"flex-end", marginRight:"10px"}}>
          <div><BsSearch className="icons"/></div>
          <div id="kids">KIDS</div>
          <BsBellFill className="icons" />
          <Dropdown align="end" id="DRop">
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
            <BsPersonFill className="DDICON"/>
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
              <Dropdown.Item as={Link} to="/Profile">Profile</Dropdown.Item>
              <Dropdown.Item as={Link} to="/Settings">Settings</Dropdown.Item>
              <Dropdown.Item href="#">Log-Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </Container>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default Header;