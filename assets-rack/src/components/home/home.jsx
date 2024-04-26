import Header from "../header/header";
import About from "./about/about";
import Banner from "./banner/banner";
import Endorse from "./endorse/endorse";

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <Endorse />
                <About />
            </main>
        </>
    )
}

export default Home;