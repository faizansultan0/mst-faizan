import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Lottie from "react-lottie-player";
import RocketPlayer from "../../../assets/json/Rocket.json";
import Arrows from "../../../assets/arrows.png";
import BannerImage from "../../../assets/banner-img.png";
import "./banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <Container>
        <div className="banner-parent">
          <Row>
            <Col lg={6}>
              <div className="left-part">
                <div className="text-content">
                  <h1 className="h-1">OVER 25,000 ACTIVE</h1>
                  <h2 className="h-2">ACCOUNTS.</h2>
                  <p className="para">
                    Manage up to 250 Assets for FREE*.
                    <br />
                    Guaranteed best prices for cloud based asset management !
                  </p>
                  <div className="last-part">
                    <div className="stars">
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                    </div>
                    <p className="sm-para">Rated 5-Star by Independent Users</p>
                  </div>
                </div>
                <div className="arrows-div">
                  <img src={Arrows} alt="Arrows" className="arrows" />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="right-part">
                <div className="banner-img-div">
                  <img
                    src={BannerImage}
                    alt="Banner Img"
                    className="banner-img"
                  />
                </div>
                <Lottie
                    animationData={RocketPlayer}
                    play
                    // style={{width: 497, height: 746}}
                    className="rocket-player"
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
