import ReviewCard from "./reviewCard/reviewCard";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import Review1 from "../../../assets/review1.png";
import Review2 from "../../../assets/review2.png";
import Review3 from "../../../assets/review3.png";
import "./reviews.css";

const Reviews = () => {
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            }, 
            {
                breakpoint: 537,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section className="reviews">
            <Container>
                <div className="reviews-parent">
                    <h2 className="heading">Reviews</h2>
                    <div className="top-part">
                        <Row className="justify-content-between">
                            <Col md={4}>
                                <div className="headings-div">
                                    <h3 className="heading-1 m-0">
                                        Clients Words
                                    </h3>
                                    <h4 className="heading-2 m-0">About us</h4>
                                </div>
                            </Col>
                            <Col md={7}>
                                <p className="para m-0">
                                    Phasellus mollis tincidunt semper. Curabitur
                                    pharetra tortor nisi, ut consectetur risus
                                    faucibus in. Donec ac tortor luctus,
                                    condimentum neque.
                                </p>
                            </Col>
                        </Row>
                    </div>
                    <div className="bottom-part">
                        <Row>
                            <Col lg={2} md={3} >
                                <div className="left-part">
                                    <button className="button">
                                        Check All Reviews
                                    </button>
                                </div>
                            </Col>
                            <Col lg={10} md={9} >
                                <div className="review-cards">
                                    <Slider {...settings}>
                                        <ReviewCard
                                            name="Gabrielle"
                                            date="Written on Mar. 25, 2019"
                                            image={Review1}
                                            review="Donec varius lorem risus, a mattis magna aliquet nec. Aliquam in tincidunts Integer ut vestibulum leo, a hendr nec varius lorem risus, a mattis magna aliquet erit nibis magna aliquh…"
                                        />
                                        <ReviewCard
                                            name="Gabrielle"
                                            date="Written on Mar. 25, 2019"
                                            image={Review2}
                                            review="Donec varius lorem risus, a mattis magna aliquet nec. Aliquam in tincidunts Integer ut vestibulum leo, a hendr nec varius lorem risus, a mattis magna aliquet erit nibis magna aliquh…"
                                        />
                                        <ReviewCard
                                            name="Albert-Roi"
                                            date="Written on Mar. 25, 2019"
                                            image={Review3}
                                            review="Donec varius lorem risus, a mattis magna aliquet nec. Aliquam in tincidunts Integer ut vestibulum leo, a hendr nec varius lorem risus, a mattis magna aliquet erit nibis magna aliquh…"
                                        />
                                        <ReviewCard
                                            name="Gabrielle"
                                            date="Written on Mar. 25, 2019"
                                            image={Review2}
                                            review="Donec varius lorem risus, a mattis magna aliquet nec. Aliquam in tincidunts Integer ut vestibulum leo, a hendr nec varius lorem risus, a mattis magna aliquet erit nibis magna aliquh…"
                                        />
                                    </Slider>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Reviews;
