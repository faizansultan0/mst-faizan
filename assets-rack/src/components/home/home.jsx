import Header from "../header/header";
import About from "./about/about";
import Banner from "./banner/banner";
import Benefits from "./benefits/benefits";
import BlueSection from "./blueSection/blueSection";
import Endorse from "./endorse/endorse";
import Features from "./features/features";
import Reviews from "./reviews/reviews";

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <Endorse />
                <About />
                <Benefits />
                <Reviews />
                <Features />
                <BlueSection />
            </main>
        </>
    )
}

export default Home;