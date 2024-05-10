import UserRoute from "../../routes/userRoute";
import AppLayout from "../../layouts/appLayout";
import { Container, Card, Button } from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context";
import { toast } from "react-toastify";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import "./note.css";

const Note = () => {
    const [note, setNote] = useState({
        _id: '',
        title: '',
        description: '',
    });
    const [state] = useContext(UserContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const deleteHandle = async (nId) => {
        try {
            const { data } = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/note/delete/${nId}`);
            if (data.error) {
                toast.error(data.error);
            } else {
                toast.success(data.message);
                navigate('/')
            }
        } catch (error) {
            console.log('Error Occured while deleting note: ', error);
            toast.error('Could not delete note! Try again')
        }
    };

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
                                <div className="button-div d-flex justify-content-between">
                                    <Link className="btn text-light edit-btn px-3" to={`/note/edit/${note._id}`}>Edit</Link>
                                    <Button className="delete-btn bg-danger px-3" onClick={()=>deleteHandle(note._id)}>Delete</Button>
                                </div>
                                    
                            </Card>
                        </div>
                    </Container>
                </div>
            </AppLayout>
        </UserRoute>
    );
};

export default Note;
