import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "./signin.css";
import { UserContext } from "../../context";

const SignIn = () => {
    const [errMsg, setErrMsg] = useState("");
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [state, setState] = useContext(UserContext);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const submitHandle = async (e) => {
        e.preventDefault();
        setErrMsg("");
        try {
            const { data } = await axios.post(
                `${process.env.REACT_APP_SERVER_URL}/user/signin`,
                {
                    user,
                }
            );

            if (data.error) {
                setErrMsg(data.error);
                console.log(data.error);
            } else {
                console.log('Received Data: ', data)
                setState(data);
                window.localStorage.setItem("auth", JSON.stringify(data));
                toast(data.message);
                setUser({ email: "", password: "" });
                navigate("/");
            }
        } catch (err) {
            console.log("Error while sigin in: ", err);
        }
    };

    useEffect(() => {
        if (state && state.token) {
            // console.log(state);
            navigate("/");
        }
    }, [state]);

    return (
        <div className="signup">
            <ToastContainer />
            <Container>
                <div className="card-parent">
                    <Card>
                        <h1 className="sign-h mb-4">
                            Welcome back! Sign in here
                        </h1>
                        <Form onSubmit={submitHandle}>
                            <Row>
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
                                            value={user.email}
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
                                            value={user.password}
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
                                <Col xs={12}>
                                    <Button type="submit" className="w-100 btn">
                                        Sign in
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

export default SignIn;
