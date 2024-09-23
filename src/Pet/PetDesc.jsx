import { useParams, Link } from "react-router-dom"
import { useStateValue } from "../ContextManager"

// styles
import "./PetDesc.css"

function PetDesc() {

    const { id } = useParams()
    const [ state, _ ] = useStateValue()

    const petInfo = state.pets.find(pet => {
        return pet.id === id
    })

    console.log(petInfo)

    return (
        <div className="PetDesc">
            <div className="PetDesc__image-container">
                <img src={petInfo.image_url} alt={petInfo.type} />
                <p className="PetDesc__name">{ petInfo.name }</p>
            </div>
            <div className="PetDesc__info">
                <p>Breed: { petInfo.breed }</p>
                <p>Age: { petInfo.age }</p>
                <ul>Locations: &nbsp;
                    {
                        petInfo.locations.map(loc => <li>{ loc }</li>)
                    }
                </ul>
                <Link
                    className="PetDesc__book-link"
                    to="/appointment"
                >Book a Visit</Link>
            </div>
        </div>
    )
}

export default PetDesc