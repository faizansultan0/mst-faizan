import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faGoogle,
    faLinkedinIn,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <div className="footer-parent">
                    <div className="img-div">
                        <Link to={'/'}>
                            <img
                                src={Logo}
                                alt="Assets Rack Logo"
                                className="img"
                            />
                        </Link>
                    </div>
                    <p className="cr-para">
                        &copy; 2023 All Rights Reserved AssetRack
                    </p>
                    <div className="icons-div">
                        <Link to="/" className="icon-span">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </Link>{" "}
                        <Link to="/" className="icon-span">
                            <FontAwesomeIcon icon={faTwitter} />
                        </Link>{" "}
                        <Link to="/" className="icon-span">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </Link>{" "}
                        <Link to="/" className="icon-span">
                            <FontAwesomeIcon icon={faGoogle} />
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
