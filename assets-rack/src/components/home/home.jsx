import Header from "../header/header";
import About from "./about/about";
import Banner from "./banner/banner";
import Benefits from "./benefits/benefits";
import Endorse from "./endorse/endorse";

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <Endorse />
                <About />
                <Benefits />
            </main>
        </>
    )
}

export default Home;