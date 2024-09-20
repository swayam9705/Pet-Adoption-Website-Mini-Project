import "./Hero.css"
import HeroImage from "../assets/Hero_Image.svg"

import { Link } from "react-router-dom"

function Hero() {

    return (
        <div className="Hero" id="Hero">
            <h2 className="Hero__big-text">Let's save and give them a Paw-sitive future.</h2>
            <div className="Hero__small-area">
                <button
                    className="Hero__adopt-btn"
                >
                    <Link to="/pets">Adopt a Pet</Link>
                </button>
            </div>
            <div className="Hero__image">
                <img src={HeroImage} alt="" />
            </div>
        </div>
    )
}

export default Hero