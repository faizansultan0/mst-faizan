import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import EndorseImage1 from "../../../assets/endorse1.png";
import EndorseImage2 from "../../../assets/endorse2.png";
import EndorseImage3 from "../../../assets/endorse3.png";
import EndorseImage4 from "../../../assets/endorse4.png";
import EndorseImage5 from "../../../assets/endorse5.png";
import "./endorse.css";

const Endorse = () => {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1850,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 510,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <section className="endorse">
            <Container>
                <div className="endorse-parent">
                    <h2 className="heading">Who endorse our work</h2>
                    <Row>
                        <Col lg={3} md={4} sm={5} xs={6}>
                            <h3 className="lg-heading">Trusted By:</h3>
                        </Col>
                        <Col lg={9} md={8} sm={7} xs={6}>
                            <div className="slider-parent">
                                <Slider {...settings}>
                                    <div className="endorse-img-div">
                                        <img
                                            src={EndorseImage1}
                                            alt="Amazon Logistics Logo"
                                            className="endorse-img"
                                        />
                                    </div>
                                    <div className="endorse-img-div">
                                        <img
                                            src={EndorseImage2}
                                            alt="Amazon Logistics Logo"
                                            className="endorse-img"
                                        />
                                    </div>
                                    <div className="endorse-img-div">
                                        <img
                                            src={EndorseImage3}
                                            alt="Amazon Logistics Logo"
                                            className="endorse-img"
                                        />
                                    </div>
                                    <div className="endorse-img-div">
                                        <img
                                            src={EndorseImage4}
                                            alt="Amazon Logistics Logo"
                                            className="endorse-img"
                                        />
                                    </div>
                                    <div className="endorse-img-div">
                                        <img
                                            src={EndorseImage5}
                                            alt="Amazon Logistics Logo"
                                            className="endorse-img"
                                        />
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default Endorse;
