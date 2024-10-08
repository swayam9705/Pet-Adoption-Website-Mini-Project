import AboutUs from "./AboutUs/AboutUs";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Pets from "./Pet/Pets";

import { useStateValue } from "./ContextManager";
import Auth from "./Auth/Auth";

function Home() {

    const [ state, dispatch ] = useStateValue()

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