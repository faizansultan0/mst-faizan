import { Container, Row, Col, Accordion, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./faqs.css";

const FAQS = () => {
    return (
        <div className="faqs">
            <Container>
                <Row>
                    <h2 className="heading">Frequently Asked Questions</h2>
                    <Col lg={8}>
                        <div className="left-part">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        Is AssetTiger really free?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim
                                        id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        Why should I track my assets?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Staying on top of your assets saves you
                                        time and money. It’s harder to lose or
                                        misplace assets when your system tracks
                                        every asset’s history and exact
                                        location. There’s a huge opportunity
                                        cost to finding your lost assets.
                                        Without a system in place, you lose
                                        productivity, too.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        What are the essential parts of a
                                        first-rate asset management program?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Staying on top of your assets saves you
                                        time and money. It’s harder to lose or
                                        misplace assets when your system tracks
                                        every asset’s history and exact
                                        location. There’s a huge opportunity
                                        cost to finding your lost assets.
                                        Without a system in place, you lose
                                        productivity, too.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                        What is the purpose of the mobile
                                        application?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Staying on top of your assets saves you
                                        time and money. It’s harder to lose or
                                        misplace assets when your system tracks
                                        every asset’s history and exact
                                        location. There’s a huge opportunity
                                        cost to finding your lost assets.
                                        Without a system in place, you lose
                                        productivity, too.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>
                                        Xolor sit amet, consect em dolor sit
                                        amet ?.
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Staying on top of your assets saves you
                                        time and money. It’s harder to lose or
                                        misplace assets when your system tracks
                                        every asset’s history and exact
                                        location. There’s a huge opportunity
                                        cost to finding your lost assets.
                                        Without a system in place, you lose
                                        productivity, too.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>
                                        Norem ipsum dolor sit amet, consect emv
                                        ?.
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Staying on top of your assets saves you
                                        time and money. It’s harder to lose or
                                        misplace assets when your system tracks
                                        every asset’s history and exact
                                        location. There’s a huge opportunity
                                        cost to finding your lost assets.
                                        Without a system in place, you lose
                                        productivity, too.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="card">
                            <h4 className="contact-heading">Contact Us</h4>
                            <Form className="contact-form">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">
                                        <FontAwesomeIcon icon={faUser} />
                                    </InputGroup.Text>
                                    <Form.Control
                                        placeholder="Your name"
                                        aria-label="name"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </InputGroup.Text>
                                    <Form.Control
                                        placeholder="Your email"
                                        aria-label="email"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                >
                                    <Form.Control as="textarea" placeholder="Your message" rows={3} />
                                </Form.Group>
                            </Form>
                            <div className="button-div">
                                <button className="button">Submit</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FAQS;
