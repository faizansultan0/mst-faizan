import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import Logo from "../../../assets/clogo.png";
import "./blueSection.css";
import PlanCard from "./plancard/plancard";

const BlueSection = () => {
    const settings = {
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    arrows: true,
                    infinite: false,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    arrows: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                },
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <section className="blue-section">
            <Container>
                <div className="comparison">
                    <div className="top-part">
                        <h2 className="heading">Pricing Comparison</h2>
                        <p className="para">
                            AssetsRack is the first fully functional asset
                            management program, completely free for first 300
                            assets.
                        </p>
                        <p className="para">
                            The world’s biggest asset tag retailer, AssetsRack
                            means no more paying for other websites’ expensive
                            services. With AssetsRack, you’ll get quality,
                            flexibility, and security.
                        </p>
                    </div>
                    <div className="ccards">
                        <Row>
                            <Col md={4}>
                                <div className="ccard">
                                    <h4 className="name">Competitor #1</h4>
                                    <p className="para">
                                        Smartphone Compatible ($15 per device
                                        per month) in addition to yearly price
                                    </p>
                                    <div className="block">
                                        <h5 className="subs-heading">
                                            Subscription
                                        </h5>
                                        <div className="sm-blocks">
                                            <div className="sm-block">
                                                <span className="num">5</span>
                                                <span className="des">
                                                    Users
                                                </span>
                                            </div>
                                            <div className="sm-block">
                                                <span className="num">
                                                    10 GB
                                                </span>
                                                <span className="des">
                                                    Cloud Storage
                                                </span>
                                            </div>
                                        </div>
                                        <div className="bottom-part">
                                            <div className="bold-line">
                                                <span className="bold-lg">
                                                    $8,700
                                                </span>
                                                <span className="bold-sm">
                                                    / per Year
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="ccard">
                                    <div className="img-div">
                                        <img
                                            src={Logo}
                                            alt="Assets Rack"
                                            className="clogo"
                                        />
                                    </div>
                                    <p className="para">
                                        Smartphone Compatible (No Extra Charges)
                                    </p>
                                    <div className="block blue-block">
                                        <h5 className="subs-heading">
                                            Subscription
                                        </h5>
                                        <div className="sm-blocks">
                                            <div className="sm-block">
                                                <span className="num">
                                                    Unlimited
                                                </span>
                                                <span className="des">
                                                    Users
                                                </span>
                                            </div>
                                            <div className="sm-block">
                                                <span className="num">
                                                    Unlimited
                                                </span>
                                                <span className="des">
                                                    Cloud Storage
                                                </span>
                                            </div>
                                        </div>
                                        <div className="bottom-part">
                                            <div className="bold-line">
                                                <span className="bold-lg">
                                                    FREE*
                                                </span>
                                                <span className="bold-sm">
                                                    / for 50 Assets
                                                </span>
                                            </div>
                                            <p className="sm-line">
                                                * See Subscription Plans for
                                                details
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="ccard">
                                    <h4 className="name">Competitor #2</h4>
                                    <p className="para">
                                        Smartphone Compatible ($295/device) in
                                        addition to yearly price
                                    </p>
                                    <div className="block">
                                        <h5 className="subs-heading">
                                            Subscription
                                        </h5>
                                        <div className="sm-blocks">
                                            <div className="sm-block">
                                                <span className="num">5</span>
                                                <span className="des">
                                                    Users
                                                </span>
                                            </div>
                                            <div className="sm-block">
                                                <span className="num">
                                                    5 GB
                                                </span>
                                                <span className="des">
                                                    Cloud Storage
                                                </span>
                                            </div>
                                        </div>
                                        <div className="bottom-part">
                                            <div className="bold-line">
                                                <span className="bold-lg">
                                                    $8,700
                                                </span>
                                                <span className="bold-sm">
                                                    / per Year
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="subscription">
                    <div className="top-part">
                        <h2 className="heading">Subscription Plans</h2>
                        <p className="para">
                            Effective January 1, 2022. Subscription is annual,
                            fixed to the calendar year. Late Subscription will
                            be prorated within the first year.
                        </p>
                    </div>
                    <div className="scards">
                        <Slider {...settings}>
                            <div className="slider-parent">
                                <div className="sfcard">
                                    <div className="tpart">
                                        <span className="tsm-text">UPTO</span>
                                        <span className="tlg-text">300</span>
                                        <span className="tsm-text">ASSETS</span>
                                    </div>
                                    <div className="bpart">
                                        <span className="subs-text">
                                            Subscription Plan
                                        </span>
                                        <span className="ars-text">
                                            ARS-Free
                                        </span>
                                        <span className="sf-lg-text">FREE</span>
                                    </div>
                                </div>
                            </div>
                            <PlanCard
                                tlgtext={"500"}
                                arstext={"500"}
                                price1={120}
                                price2={150}
                            />
                            <PlanCard
                                tlgtext={"2500"}
                                arstext={"2500"}
                                price1={230}
                                price2={345}
                            />
                            <PlanCard
                                tlgtext={"10,000"}
                                arstext={"10K"}
                                price1={400}
                                price2={600}
                            />
                            <PlanCard
                                tlgtext={"50,000"}
                                arstext={"50K"}
                                price1={800}
                                price2={1200}
                            />
                            <PlanCard
                                tlgtext={"250,000"}
                                arstext={"250K"}
                                price1={1600}
                                price2={2400}
                            />
                        </Slider>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default BlueSection;
