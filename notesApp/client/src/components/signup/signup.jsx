import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import "./signup.css";

const SignUp = () => {
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [userData, setUserData] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setSuccessMsg('');
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const submitHandle = async (e) => {
        e.preventDefault();
        setErrMsg("");
        setSuccessMsg("");
        try {
            const { data } = await axios.post(
                `${process.env.REACT_APP_SERVER_URL}/user/signup`,
                {
                    userData,
                }
            );

            if (data.error) {
                setErrMsg(data.error);
                console.log(data.error);
            } else {
                setSuccessMsg(data.message);
            }
        } catch (err) {
            console.log("Error while sending signup data: ", err);
        }
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
                                            value={userData.fname}
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
                                            value={userData.lname}
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
                                            autoComplete="email"
                                            value={userData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="password"
                                    >
                                        <Form.Control
                                            type="password"
                                            placeholder="Enter password"
                                            name="password"
                                            autoComplete="current-password"
                                            value={userData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                {errMsg && (
                                    <Col xs={12}>
                                        <p className="errMsg mb-2 text-danger">
                                            {errMsg}
                                        </p>
                                    </Col>
                                )}
                                {successMsg && (
                                    <Col xs={12}>
                                        <p className="errMsg mb-2 text-success">
                                            {successMsg}
                                        </p>
                                    </Col>
                                )}
                                <Col xs={12}>
                                    <Button type="submit" className="w-100 btn" disabled={successMsg}>
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
