import AboutUs from "./AboutUs/AboutUs";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Pets from "./Pet/Pets";

function Home() {
    return (
        <>
            <Hero />
            <hr />
            <AboutUs />
            <hr />
            <Pets />
            <hr />
            <Contact />
        </>
    ) 
}

export default Home