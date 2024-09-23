import { Link } from "react-router-dom"
import "./AboutUs.css"

// images
import AdoptMeImage from "../assets/adopt_me.jpg"
import StockImage from "../assets/stock_image.jpg"

function AboutUs() {
    return (
        <section id="AboutUs" className="AboutUs">
            <h2 className="AboutUs__title">About Us</h2>
            <div className="AboutUs__text text-1">We're passionate about finding loving homes for abandoned and adoptable animals. Our mission is to create a community where every pet has a chance to experience the joy of a forever family.</div>
            <div className="AboutUs__image image-1">
                <img src={AdoptMeImage} alt="A dog with 'Adopt me' sign" />
                <div className="AboutUs__image__shadow"></div>
            </div>
            <div className="AboutUs__text text-2">We believe that every pet deserves a safe and loving home. Our team is committed to providing the best care and support to both the animals and their adoptive families. <br />
            </div>
            <div className="AboutUs__image image-2">
                <img src={StockImage} alt="A stock image" />
                <div className="AboutUs__image__shadow"></div>
            </div>
            <Link
                className="Hero__adopt-btn"
                to="#"
            >Donate</Link> 
        </section>
    )
}

export default AboutUs