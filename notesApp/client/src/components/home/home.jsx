import UserRoute from "../../routes/userRoute";
import AppLayout from "../../layouts/appLayout";
import { Container, Row, Col, Card, Pagination, Form, } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./home.css";

const Home = () => {
    const [notes, setNotes] = useState([]);
    const [totalNotes, setTotalNotes] = useState(0);
    const [active, setActive] = useState(1);
    const [state] = useContext(UserContext);

    // Search Notes
    const [searchQuery, setSearchQuery] = useState('');

    const items = [];
    for (let number = 1; number <= Math.ceil(totalNotes / 8); number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={() => setActive(number)}>
                {number}
            </Pagination.Item>
        );
    }

    useEffect(() => {
        const getAllNotes = async () => {
            try {
                const { data } = await axios.get(
                    `${process.env.REACT_APP_SERVER_URL}/note/all?page=${active}`
                );
                if (data.error) {
                    toast.error(data.error);
                } else {
                    // console.log(data);
                    setNotes(data.notes);
                }
            } catch (err) {
                console.log("An error occured while getting all notes: ", err);
                toast.error("An error occured while getting all notes");
            }
        };

        if (state && state.token && !searchQuery) getAllNotes();
    }, [state, active, searchQuery]);

    useEffect(() => {
        const getTotalNotes = async () => {
            try {
                const { data } = await axios.get(
                    `${process.env.REACT_APP_SERVER_URL}/note/total`
                );
                if (data.error) {
                    toast.error(data.error);
                } else {
                    // console.log(data);
                    setTotalNotes(data.totalNotes);
                    // console.log('Total Notes: ', data.totalNotes);
                }
            } catch (err) {
                console.log(
                    "An error occured while getting total notes: ",
                    err
                );
                toast.error("An error occured while getting total notes");
            }
        };

        if (state && state.token && !searchQuery) getTotalNotes();
    }, [state, searchQuery]);

    const getSearchedNotes = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/note/search/${searchQuery}/${active}`);
            if (data.error) {
                toast.error(data.error);
            } else {
                setNotes(data.notes);
                setTotalNotes(data.total);
            }

        } catch (err) {
            console.log(`Search Query ERR: `, err);
        }
    }

    useEffect(() => {
        if (state && state.token && searchQuery) {
            setActive(1);
            getSearchedNotes()
        };
    }, [state, searchQuery])

    useEffect(() => {
        if(searchQuery)getSearchedNotes();
    }, [active]);

    const searchHandle = (e) => {
        setSearchQuery(e.target.value);
    }

    return (
        <UserRoute>
            <AppLayout>
                <div className="home">
                    <Container>
                        <div className="home-parent pt-2">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <span className="text-light">
                                    Welcome{" "}
                                    <b>
                                        {state &&
                                            state.user &&
                                            state.user.fname}
                                    </b>
                                    !
                                </span>
                                <Form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                    }}
                                >
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search notes"
                                            onChange={searchHandle}
                                            value={searchQuery}
                                        />
                                    </Form.Group>
                                </Form>
                                <Link to="/add-note" className="btn btn-dark">
                                    Add Note
                                </Link>
                            </div>
                            <Row>
                                {notes &&
                                    notes.map((note) => (
                                        <Col
                                            xl="3"
                                            lg="4"
                                            sm="6"
                                            xs="12"
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
                            <div className="pagination-div d-flex justify-content-center">
                                <Pagination className="m-0 pb-5 " size="sm">
                                    {items}
                                </Pagination>
                            </div>
                        </div>
                    </Container>
                </div>
            </AppLayout>
        </UserRoute>
    );
};

export default Home;
