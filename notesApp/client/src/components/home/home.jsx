import UserRoute from "../../routes/userRoute";
import Header from "../header/header";
import "./home.css";

const Home = () => {
    return (
        <UserRoute>
            <div className="home">
                <Header />
            </div>
        </UserRoute>
    );
};

export default Home;