import Header from "../header/header";
import Banner from "./banner/banner";
import Endorse from "./endorse/endorse";

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <Endorse />
            </main>
        </>
    )
}

export default Home;