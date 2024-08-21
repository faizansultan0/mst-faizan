import UserRoute from "../../routes/userRoute";
import AppLayout from "../../layouts/appLayout";
import { Card, Container, Button, Form } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context";
import { toast } from "react-toastify";
import axios from "axios";
import "./editNote.css";

const EditNote = () => {
    const [note, setNote] = useState({
        title: "",
        description: "",
    });
    const [state] = useContext(UserContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const submitHandle = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put(
                `${process.env.REACT_APP_SERVER_URL}/note/edit`,
                note
            );

            if (data.error) {
                toast.error(data.error);
            } else {
                toast.success(data.message);
                setNote(data.note);
                navigate(`/note/${id}`);
            }
        } catch (err) {
            console.log("Updating note ERR: ", err);
            toast.error("Could not update note");
        }
    };

    const changeHandle = (e) => {
        e.preventDefault();
        setNote({
            ...note,
            [e.target.name]: e.target.value,
        });
    };

        useEffect(() => {
            const getNote = async () => {
                try {
                    const { data } = await axios.get(
                        `${process.env.REACT_APP_SERVER_URL}/note/${id}`
                    );
                    if (data.error) {
                        toast.error(data.error);
                    } else {
                        setNote(data.note);
                    }
                } catch (err) {
                    console.log("An error occured: ", err);
                    toast.error("An error occured while loading");
                }
            };

            if (state && state.token && id) getNote();
        }, [state, state.token, id]);

    return (
        <UserRoute>
            <AppLayout>
                <div className="add-note-page">
                    <Container>
                        <div className="add-note-page-parent pt-3">
                            <Card className="bg-dark p-3">
                                <Card.Title className="text-light">
                                    Edit Note
                                </Card.Title>
                                <Form onSubmit={(e) => submitHandle(e)}>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicTitle"
                                    >
                                        <Form.Control
                                            name="title"
                                            required
                                            type="text"
                                            value={note.title}
                                            placeholder="Enter title"
                                            max={200}
                                            onChange={changeHandle}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlTextarea1"
                                    >
                                        <Form.Control
                                            name="description"
                                            required
                                            as="textarea"
                                            rows={3}
                                            value={note.description}
                                            placeholder="Description"
                                            max={10000}
                                            onChange={changeHandle}
                                        />
                                    </Form.Group>
                                    <Button type="submit">Update</Button>
                                </Form>
                            </Card>
                        </div>
                    </Container>
                </div>
            </AppLayout>
        </UserRoute>
    );
};

export default EditNote;
