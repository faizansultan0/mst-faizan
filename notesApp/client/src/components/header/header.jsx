import { useContext } from "react";
import { UserContext } from "../../context";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import "./header.css";

const Header = () => {
    const [state, setState] = useContext(UserContext);
    const navigate = useNavigate();

    const logoutHandle = () => {
        if (state) {
            setState({
                user: {},
                token: "",
            });
        }

        window.localStorage.removeItem("auth");
        toast('Logout Successful');
        navigate("/signin");
    };

    return (
        <header className="header pt-2">
            <Container>
                <Navbar bg="dark" className="rounded" data-bs-theme="dark">
                    <Container>
                        <Link to={"/"} className="text-decoration-none navbar-brand">
                            Notes
                        </Link>
                        <Nav className="ms-auto">
                            <Link className="nav-link active" to={`/profile/`}>Profile</Link>
                            <button className="btn" onClick={logoutHandle}>
                                Logout
                            </button>
                        </Nav>
                    </Container>
                </Navbar>
            </Container>
        </header>
    );
};

export default Header;
