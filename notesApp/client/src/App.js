import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import SignUp from "./components/signup/signup";
import SignIn from "./components/signin/signin";
import VerifyMail from "./components/verifyMail/verifyMail";
import Profile from "./components/profile/profile";
import { UserProvider } from "./context";
import Note from "./components/note/note";
import AddNote from "./components/addNote/addNote";
import EditNote from "./components/editNote/editNote";
import { ToastContainer } from "react-toastify";
import "./App.css";

function App() {
    return (
        <UserProvider>
            <ToastContainer />
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route
                        path="/users/:id/verify/:token"
                        element={<VerifyMail />}
                    />
                    <Route path="/profile/" element={<Profile />} />
                    <Route path="/note/:id" element={<Note />} />
                    <Route path="/note/edit/:id" element={<EditNote />} />
                    <Route path="/add-note" element={<AddNote />} />
                </Routes>
            </div>
        </UserProvider>
    );
}

export default App;
