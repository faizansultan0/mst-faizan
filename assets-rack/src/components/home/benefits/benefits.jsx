import { Container, Row, Col } from "react-bootstrap";
import BCard from "./bcard/bcard";
import BCard1 from "../../../assets/benefit1.svg";
import BCard2 from "../../../assets/benefit2.svg";
import BCard3 from "../../../assets/benefit3.svg";
import BCard4 from "../../../assets/benefit4.svg";
import BCard5 from "../../../assets/benefit5.svg";
import BCard6 from "../../../assets/benefit6.svg";
import BCard7 from "../../../assets/benefit7.svg";
import BCard8 from "../../../assets/benefit8.svg";
import "./benefits.css";

const Benefits = () => {
    return (
        <section className="benefits">
            <Container>
                <div className="top-part">
                    <h2 className="heading">Benefits</h2>
                    <p className="para">
                        Yovamus eget aliquam dui. Integer eu arcu vel arcu
                        suscipit ultrices quis non mauris.
                    </p>
                </div>
                <div className="bcards-parent">
                    <Row>
                        <Col xl={3} sm={6} >
                            <BCard
                                icon={BCard1}
                                alternate={"Assets"}
                                heading={"Assets"}
                                para={
                                    "Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque enean enim."
                                }
                            />
                        </Col>
                        <Col xl={3} sm={6} >
                            <BCard
                                icon={BCard2}
                                alternate={"Contracts and Licenses"}
                                heading={"Contracts and Licenses"}
                                para={
                                    "We provide you with the perfect platform to keep your contracts and licenses in the same place"
                                }
                            />
                        </Col>
                        <Col xl={3} sm={6} >
                            <BCard
                                icon={BCard3}
                                alternate={"Reports"}
                                heading={"Reports"}
                                para={
                                    "View predefined reports which include statements about your assets to help clean up your workload."
                                }
                            />
                        </Col>
                        <Col xl={3} sm={6} >
                            <BCard
                                icon={BCard4}
                                alternate={"Security"}
                                heading={"Security"}
                                para={
                                    "SSL Encryption protects data as it transfers from your computer, tablet, or smartphone"
                                }
                            />
                        </Col>
                        <Col xl={3} sm={6} >
                            <BCard
                                icon={BCard5}
                                alternate={"Mobile"}
                                heading={"Mobile"}
                                para={
                                    "You’re constantly on the move, but that shouldn’t affect your asset management."
                                }
                            />
                        </Col>
                        <Col xl={3} sm={6} >
                            <BCard
                                icon={BCard6}
                                alternate={"Innovation"}
                                heading={"Innovation"}
                                para={
                                    "We’re continually evolving to meet and exceed customers’ expectations"
                                }
                            />
                        </Col>
                        <Col xl={3} sm={6} >
                            <BCard
                                icon={BCard7}
                                alternate={"Users"}
                                heading={"Users"}
                                para={
                                    "Set reminders and alarms for assets that require regular maintenance, assets"
                                }
                            />
                        </Col>
                        <Col xl={3} sm={6} >
                            <BCard
                                icon={BCard8}
                                alternate={"Reserve & Check Out"}
                                heading={"Reserve & Check Out"}
                                para={
                                    "Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque enean enim."
                                }
                            />
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default Benefits;
