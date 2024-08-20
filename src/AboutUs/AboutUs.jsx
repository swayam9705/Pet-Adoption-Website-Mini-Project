import "./AboutUs.css"

function AboutUs() {
    return (
        <section id="AboutUs" className="AboutUs">
            <h2 className="AboutUs__title">About Us</h2>
            <div className="AboutUs__text text-1">Lorem ipsum dolor sit obcaecati quas, molestias est, sit doloremque suscipit odio? Ratione soluta dignissimos doloribus quaerat laborum quis, beatae neque, adipisci vel fuga mollitia fugiat, dolore ipsam r distinctio minima dolorem nemo ab veniam, ipsa cupiditate explicabo, velit numquam tempore modi.</div>
            <div className="AboutUs__image image-1">
                <img src="https://media.istockphoto.com/id/1334498420/photo/happy-woman-holding-bulldog.webp?s=2048x2048&w=is&k=20&c=YZT1xWEQPurvW_CWuXPDHtqL149tdGNvVtys9N6FC0A=" alt="Woman holding a bulldog" />
                <div className="AboutUs__image__shadow"></div>
            </div>
            <div className="AboutUs__text text-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, officiis, explicabo saepe ipsa odio amet veniam ab magni alias nuam repellat, autem maxime quis iure beatae quisquam eaque perferendis alias nostrum a exercitationem neque debitis minus, ipsum voluptatem. <br />
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