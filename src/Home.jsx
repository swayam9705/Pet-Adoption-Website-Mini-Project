import AboutUs from "./AboutUs/AboutUs";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";

function Home() {
    return (
        <>
            <Hero />
            <hr />
            <AboutUs />
            <hr />
            <Contact />
        </>
    ) 
}

export default Home