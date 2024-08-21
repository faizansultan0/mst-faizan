import UserRoute from "../../routes/userRoute";
import { Container, Card } from "react-bootstrap";
import AppLayout from "../../layouts/appLayout";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context";
import { Link } from "react-router-dom";
import { useState } from "react";
import moment from "moment";
import "./profile.css";

const Profile = () => {
    const [user, setUser] = useState({}); 
    const [state] = useContext(UserContext);

    useEffect(() => {
        if (state && state.user) {
            setUser(state.user);
        }
    }, [state])

    return (
        <UserRoute>
            <AppLayout>
                <div className="profile">
                    <Container>
                        <div className="profile-parent pt-2">
                            <Card className="p-4">
                                <Card.Title className="mb-3 text-center">
                                    Profile
                                </Card.Title>
                                {user && user.image ? (
                                    <div className="img-div">
                                        <img
                                            src={
                                                process.env
                                                    .REACT_APP_SERVER_URL +
                                                state.user.image
                                            }
                                            alt={user.fname + user.lname}
                                            className="img"
                                        />
                                    </div>
                                ) : (
                                    <div className="img-div">
                                        <span className="img-txt">
                                            {(user && user.fname) && (user.fname[0])}
                                        </span>
                                    </div>
                                )}

                                <Card.Subtitle className="mb-3">
                                    {user && user.fname + " " + user.lname}
                                </Card.Subtitle>
                                <Card.Text className="mb-2">
                                    {user && user.email}
                                </Card.Text>
                                <Card.Text className="text-sm">
                                    Joined{" "}
                                    {moment(user && user.createdAt).fromNow()}
                                </Card.Text>
                                <Link className="btn" to="/profile/update">
                                    Update Profile
                                </Link>
                            </Card>
                        </div>
                    </Container>
                </div>
            </AppLayout>
        </UserRoute>
    );
};

export default Profile;
