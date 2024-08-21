import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/logo.png";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header-wrapper">
          <strong className="logo">
            <Link to={"/"} className="logo-a">
              <img src={logo} alt="Assets Rack" className="logo-img" />
            </Link>
          </strong>

          <div className="right-part">
            <Navbar expand="lg" className="navbar-dark">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Link to="/" className="nav-link"><span className="nav-link-txt">Home</span></Link>
                    <Link to="/" className="nav-link"><span className="nav-link-txt">Review</span></Link>
                    <Link to="/" className="nav-link"><span className="nav-link-txt">Features</span></Link>
                    <Link to="/" className="nav-link"><span className="nav-link-txt">Benefits</span></Link>
                    <Link to="/" className="nav-link"><span className="nav-link-txt">Pricing</span></Link>
                    <Link to="/" className="nav-link"><span className="nav-link-txt">Faqs</span></Link>
                    <Link to="/" className="nav-link"><span className="nav-link-txt">Contact</span></Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <div className="buttons">
            <button className="button">Create an Account</button>
            <button className="button">Sign In</button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
