import "./AboutUs.css"

function AboutUs() {
    return (
        <section id="AboutUs" className="AboutUs">
            <h2 className="AboutUs__title">About Us</h2>
            <div className="AboutUs__text text-1">We're passionate about finding loving homes for abandoned and adoptable animals. Our mission is to create a community where every pet has a chance to experience the joy of a forever family.</div>
            <div className="AboutUs__image image-1">
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adopt-me-design-template-d8c01bd1eb7b71e0c6acfbd95a89607f_screen.jpg?ts=1637021613" alt="Woman holding a bulldog" />
                <div className="AboutUs__image__shadow"></div>
            </div>
            <div className="AboutUs__text text-2">We believe that every pet deserves a safe and loving home. Our team is committed to providing the best care and support to both the animals and their adoptive families. <br />
            </div>
            <div className="AboutUs__image image-2">
                <img src="https://media.istockphoto.com/id/1208801475/photo/mans-hands-holding-paws-of-a-young-puppy.jpg?s=612x612&w=0&k=20&c=_CRkiI2Z0GwgDOLgrf4zsBnI9sjBRCEHLUJ1uPl5hQw= " alt="Woman holding a bulldog" />
                <div className="AboutUs__image__shadow"></div>
            </div>
            <button className="Hero__adopt-btn">Donate</button> 
        </section>
    )
}

export default AboutUs