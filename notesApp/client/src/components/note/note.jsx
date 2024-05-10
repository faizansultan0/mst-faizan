import UserRoute from "../../routes/userRoute";
import AppLayout from "../../layouts/appLayout";
import { Container, Card } from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./note.css";

const Note = () => {
    const [note, setNote] = useState({
        title: '',
        description: '',
    });
    const [state] = useContext(UserContext);
    const {id} = useParams();

    useEffect(() => {
        const getNote = async () => {
            try {
                const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/note/${id}`);
                if (data.error) {
                    toast.error(data.error);
                } else {
                    setNote(data.note);
                }
                
            } catch (err) {
                console.log('An error occured: ', err);
                toast.error('An error occured');
            }
        }

        if (state && state.token && id) getNote();
    }, [state, state.token, id])

    return (
        <UserRoute>
            <AppLayout>
                <div className="note-page">
                    <Container>
                        <div className="note-page-parent pt-3">
                            <Card className="p-3">
                                <Card.Title className="mb-2"><span className="title-word">Title: </span>{note.title}</Card.Title>
                                <span className="description-word">Description:</span>
                                <Card.Text>{note.description}</Card.Text>
                            </Card>
                        </div>
                    </Container>
                </div>
            </AppLayout>
        </UserRoute>
    );
};

export default Note;
