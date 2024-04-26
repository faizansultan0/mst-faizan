import { Container, Row, Col } from "react-bootstrap";
import AboutVideo from "../../../assets/aboutVid.mp4";
import "./about.css";

const About = () => {
    return (
        <section className="about">
            <Container>
                <div className="about-parent">
                    <Row>
                        <Col xl={5} lg={6}>
                            <div className="vid-parent">
                                <video className="vid" controls>
                                    <source src={AboutVideo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </Col>
                        <Col xl={7} lg={6}>
                            <div className="right-part">
                                <h2 className="heading">Who is Assets Rack?</h2>
                                <p className="para">
                                    Phasellus mollis tincidunt semper. Curabitur
                                    pharetra tortor nisi, ut consectetur risus
                                    faucibus in. Donec ac tortor luctus,
                                    condimentum neque in, congue diam. Morbi
                                    faucibus lorem et nunc consectetur sagittis.
                                    Donec in finibus sem, ac sodales quam.
                                    Aliquam varius libero vitae dui finibus
                                    faucibus.
                                </p>
                                <p className="para">
                                    Mivamus aliquet maximus varius. Morbi in est
                                    et tortor vulputate efficitur non placerat
                                    metus. Suspendisse lacinia, lacus non
                                    vestibulum porta, nisl eros egestas lorem,
                                    eget finibus magna arcu at odio. Etiam a
                                    blandit neque.
                                </p>
                                <div className="buttons">
                                    <button className="button">
                                        Contact with Experts
                                    </button>
                                    <button className="button">Join Us Today</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default About;
