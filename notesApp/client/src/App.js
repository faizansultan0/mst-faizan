import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import SignUp from "./components/signup/signup";
import SignIn from "./components/signin/signin";
import VerifyMail from "./components/verifyMail/verifyMail";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/users/:id/verify/:token" element={<VerifyMail />} />
            </Routes>
        </div>
    );
}

export default App;
