import UserRoute from "../../routes/userRoute";
import AppLayout from '../../layouts/appLayout';
import { Container, Row, Col, Card } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./home.css";

const Home = () => {
    const [notes, setNotes] = useState([]);
    const [errMsg, setErrMsg] = useState('');
    const [state] = useContext(UserContext);

    useEffect(() => {
        const getAllNotes = async () => {
            try {
                setErrMsg('');
                const { data } = await axios.get(
                    `${process.env.REACT_APP_SERVER_URL}/note/all`
                );
                if (data.error) {
                    toast.error(data.error);
                    setErrMsg(data.message);
                } else {
                    // console.log(data);
                    setNotes(data.notes);
                }
            } catch (err) {
                console.log('An error occured while getting all notes: ', err);
                setErrMsg('An error occured while getting all notes');
            }
        }

        if(state && state.token) getAllNotes();
    }, [state,])

    return (
        <UserRoute>
            <AppLayout>
                <div className="home">
                    <Container>
                        <div className="home-parent pt-2">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <span className="text-light">Welcome {state && state.user && (state.user.fname)}!</span>
                                <Link to="/add-note" className="btn btn-dark">
                                    Add Note
                                </Link>
                            </div>
                            <Row>
                                {notes &&
                                    notes.map((note) => (
                                        <Col
                                            xl='3'
                                            lg='4'
                                            sm='6'
                                            xs='12'
                                            key={note._id}
                                        >
                                            <div className="note-parent mb-3">
                                                <Link
                                                    to={`/note/${note._id}`}
                                                    className="text-decoration-none"
                                                >
                                                    <Card className="note p-2 bg-dark text-light">
                                                        <Card.Title>
                                                            {note.title.length >
                                                            25
                                                                ? note.title.slice(
                                                                      0,
                                                                      22
                                                                  ) + "..."
                                                                : note.title}
                                                        </Card.Title>
                                                        <Card.Text>
                                                            {note.description
                                                                .length > 220
                                                                ? note.description.slice(
                                                                      0,
                                                                      220
                                                                  ) + "..."
                                                                : note.description}
                                                        </Card.Text>
                                                    </Card>
                                                </Link>
                                            </div>
                                        </Col>
                                    ))}
                            </Row>
                        </div>
                    </Container>
                </div>
            </AppLayout>
        </UserRoute>
    );
};

export default Home;
