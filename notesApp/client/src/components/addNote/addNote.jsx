import UserRoute from "../../routes/userRoute";
import AppLayout from "../../layouts/appLayout";
import { Card, Container, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./addNote.css";

const AddNote = () => {
    const [note, setNote] = useState({
        title: "",
        description: "",
    });
    const navigate = useNavigate();

    const submitHandle = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                `${process.env.REACT_APP_SERVER_URL}/note/add`, {
                    note
                }
            );

            if (data.error) {
                toast.error(data.error);
            } else {
                toast.success("Note added successfully");
                navigate("/");
            }
        } catch (err) {
            console.log("Sumitting note ERR: ", err)
            toast.error("Could not add note");
        }
    };

    const changeHandle = (e) => {
        e.preventDefault();
        setNote({
            ...note,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <UserRoute>
            <AppLayout>
                <div className="add-note-page">
                    <Container>
                        <div className="add-note-page-parent pt-3">
                            <Card className="bg-dark p-3">
                                <Card.Title className="text-light">
                                    Add Note
                                </Card.Title>
                                <Form onSubmit={(e)=>submitHandle(e)}>
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
                                            value={note.description}
                                            as="textarea"
                                            rows={3}
                                            placeholder="Description"
                                            max={10000}
                                            onChange={changeHandle}
                                        />
                                    </Form.Group>
                                    <Button type="submit" >Submit</Button>
                                </Form>
                            </Card>
                        </div>
                    </Container>
                </div>
            </AppLayout>
        </UserRoute>
    );
};

export default AddNote;
