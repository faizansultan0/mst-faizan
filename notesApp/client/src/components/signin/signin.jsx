import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./signin.css";
import { UserContext } from "../../context";

const SignIn = () => {
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
        try {
            const { data } = await axios.post(
                `${process.env.REACT_APP_SERVER_URL}/user/signin`,
                {
                    user,
                }
            );

            if (data.error) {
                toast.error(data.error);
                console.log(data.error);
            } else {
                toast.success("Successful login");
                // console.log("Received Data: ", data);
                setState(data);
                window.localStorage.setItem("auth", JSON.stringify(data));
                setUser({ email: "", password: "" });
                navigate("/");
            }
        } catch (err) {
            console.log("Error while sigin in: ", err);
            toast.error("Cannot Sign in");
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
            <Container>
                <div className="card-parent">
                    <Card>
                        <h1 className="sign-h mb-4">
                            Welcome back! Sign in here
                        </h1>
                        <Form onSubmit={submitHandle} className="mb-2">
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
                                <Col xs={12}>
                                    <Button type="submit" className="w-100 btn">
                                        Sign in
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                        <p className="para">
                            New user? <Link to="/signup">Sign up</Link>
                        </p>
                    </Card>
                </div>
            </Container>
        </div>
    );
};

export default SignIn;
