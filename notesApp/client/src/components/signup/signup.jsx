import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import "./signup.css";

const SignUp = () => {
    const [data, setData] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitHandle = (e) => {
        e.preventDefault();
    };

    return (
        <div className="signup">
            <Container>
                <div className="card-parent">
                    <Card>
                        <h1 className="sign-h mb-4">
                            Welcome to Notes! Sign up here
                        </h1>
                        <Form onSubmit={submitHandle}>
                            <Row>
                                <Col md={6}>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="fname"
                                    >
                                        <Form.Control
                                            type="text"
                                            placeholder="First name"
                                            name="fname"
                                            value={data.fname}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="lname"
                                    >
                                        <Form.Control
                                            type="text"
                                            placeholder="Last name"
                                            name="lname"
                                            value={data.lname}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col sm={12}>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="email"
                                    >
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            name="email"
                                            value={data.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col sm={12}>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="password"
                                    >
                                        <Form.Control
                                            type="password"
                                            placeholder="Enter password"
                                            name="password"
                                            value={data.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Button type="submit" className="w-100 btn">
                                        Create Account
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                </div>
            </Container>
        </div>
    );
};

export default SignUp;
