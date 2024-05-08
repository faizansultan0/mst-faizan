import UserRoute from "../../routes/userRoute";
import { Container, Card } from "react-bootstrap";
import "./profile.css";
import AppLayout from "../../layouts/appLayout";
import { useContext } from "react";
import { UserContext } from "../../context";
import moment from 'moment'

const Profile = () => {
    const [state, setState] = useContext(UserContext);

    return (
        <UserRoute>
            <AppLayout>
                <div className="profile">
                    <Container>
                        <div className="profile-parent pt-2">
                            <Card className="p-4">
                                <Card.Title className="mb-3 text-center">Profile</Card.Title>
                                <Card.Subtitle className="mb-3">{ state && state.user && state.user.fname + ' ' + state.user.lname }</Card.Subtitle>
                                <Card.Text className="mb-2">{state && state.user && state.user.email}</Card.Text>
                                <Card.Text className="text-sm">Joined {moment(state && state.user && state.user.createdAt).fromNow()}</Card.Text>
                            </Card>
                        </div>
                    </Container>
                </div>
            </AppLayout>
        </UserRoute>
    );
};

export default Profile;
