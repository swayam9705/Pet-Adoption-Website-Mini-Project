import "./AboutUs.css"

function AboutUs() {
    return (
        <section id="AboutUs" className="AboutUs">
            <h2 className="AboutUs__title">About Us</h2>
            <div className="AboutUs__text text-1">We're passionate about finding loving homes for abandoned and adoptable animals. Our mission is to create a community where every pet has a chance to experience the joy of a forever family.</div>
            <div className="AboutUs__image image-1">
                <img src="https://media.istockphoto.com/id/1334498420/photo/happy-woman-holding-bulldog.webp?s=2048x2048&w=is&k=20&c=YZT1xWEQPurvW_CWuXPDHtqL149tdGNvVtys9N6FC0A=" alt="Woman holding a bulldog" />
                <div className="AboutUs__image__shadow"></div>
            </div>
            <div className="AboutUs__text text-2">We believe that every pet deserves a safe and loving home. Our team is committed to providing the best care and support to both the animals and their adoptive families. We work tirelessly to match pets with their perfect human companions.<br />
            <button className="Hero__adopt-btn">Donate</button> 
            </div>
            <div className="AboutUs__image image-2">
                <img src="https://media.istockphoto.com/id/1208801475/photo/mans-hands-holding-paws-of-a-young-puppy.jpg?s=612x612&w=0&k=20&c=_CRkiI2Z0GwgDOLgrf4zsBnI9sjBRCEHLUJ1uPl5hQw=" alt="Woman holding a bulldog" />
                <div className="AboutUs__image__shadow"></div>
            </div>
        </section>
    )
}

export default AboutUs