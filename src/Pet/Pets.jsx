import PetProfile from "./PetProfile"
import "./Pets.css"


// Context
import { useStateValue } from "../ContextManager"
import { Link } from "react-router-dom"

function Pets() {

    const [ state, _ ] = useStateValue()

    return (
        <div className="Pets">
            <h2 className="Pets__title">Pets</h2>
            <div className="Pets__container">
            {
                state.pets.slice(0, 3).map(pet => <PetProfile key={pet.id} pet={pet}/>)
            }
            </div>
            <Link className="Pets__readmore btn-hover" to={"/pets"}>See More</Link>
        </div>
    )
}

export default Pets