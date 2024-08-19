import "./Hero.css"
import HeroImage from "../assets/Hero_Image.svg"

function Hero() {

    return (
        <div className="Hero">
            <h2 className="Hero__big-text">Let's save and give them a Pawsitive &lt;3 future.</h2>
            <div className="Hero__small-area">
                <button className="Hero__adopt-btn">Adopt a Pet</button>
            </div>
            <div className="Hero__image">
                <img src={HeroImage} alt="" />
            </div>
        </div>
    )
}

export default Hero