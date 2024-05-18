import { Card, Container, Form, Row, Col, Button } from "react-bootstrap";
import AppLayout from "../../layouts/appLayout";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfileUpdate = () => {
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        image: "",
        _id: "",
    });
    const [state, setState] = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (state && state.user) {
            setUser({
                fname: state.user.fname,
                lname: state.user.lname,
                image: state.user.image,
                _id: state.user._id,
            });
        }
    }, []);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleImage = async (e) => {
        const file = e.target.files[0];

        const formData = new FormData();
        formData.append('image', file);

        try {
            const { data } = await axios.post(
                `${process.env.REACT_APP_SERVER_URL}/user/upload-image`,
                formData
            );
            setUser({ ...user, image: data.url });
        } catch (err) {
            console.log('Image upload error', err);
            toast.error('Could not uplload image');
        }
    };

    const submitHandle = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.put(
                `${process.env.REACT_APP_SERVER_URL}/user/update`,
                {
                    user,
                }
            );

            if (data.error) {
                toast.error(data.error);
            } else {
                toast.success("Profile updated successfully");

                const authData = JSON.parse(localStorage.getItem("auth"));
                if (authData) {
                    authData.user = {
                        ...authData.user,
                        fname: data.user.fname,
                        lname: data.user.lname,
                        image: data.user.image,
                    };
                    localStorage.setItem("auth", JSON.stringify(authData));
                }

                setState((prevState) => ({
                    ...prevState,
                    user: {
                        ...prevState.user,
                        fname: data.user.fname,
                        lname: data.user.lname,
                        image: data.user.image,
                    },
                }));

                navigate("/profile");
            }
        } catch (err) {
            console.log(`UPDATE PROFILE ERR: `, err);
            toast.error("Could not update profile");
        }
    };

    return (
        <AppLayout>
            <div className="updateProfile pt-2">
                <Container>
                    <Card className="p-4">
                        <Card.Title className="text-center">
                            Profile Update
                        </Card.Title>
                        <div className="d-flex justify-content-center">
                            {state && state.user && state.user.image ? (
                                <div className="img-div">
                                    <img
                                        src={state.user.image}
                                        alt={
                                            state.user.fname + state.user.lname
                                        }
                                        className="img"
                                    />
                                </div>
                            ) : (
                                <div className="img-div">
                                    <span className="img-txt">
                                        {state.user.fname &&
                                            state.user.fname[0]}
                                    </span>
                                </div>
                            )}
                        </div>

                        <Form onSubmit={submitHandle} className="mb-2">
                            <div className="img-input-div mb-2">
                                <input
                                    onChange={handleImage}
                                    type="file"
                                    accept="images/*"
                                />
                            </div>
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
                                            value={user.fname}
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
                                            value={user.lname}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Button type="submit" className="w-100 btn">
                                        Update Data
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                </Container>
            </div>
        </AppLayout>
    );
};

export default ProfileUpdate;
