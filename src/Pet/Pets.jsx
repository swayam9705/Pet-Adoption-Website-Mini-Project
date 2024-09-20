import { useState, useEffect } from "react"

import PetProfile from "./PetProfile"
import "./Pets.css"

// firebase
import { collection, getDocs } from "firebase/firestore"
import { db } from "../config/firebase_config"

// Context
import { useStateValue } from "../ContextManager"
import { Link } from "react-router-dom"

function Pets() {

    const [ state, dispatch ] = useStateValue()

    console.log(state)

    return (
        <div className="Pets">
            <h2 className="Pets__title">Pets</h2>
            <div className="Pets__container">
            {
                state.pets.slice(0, 3).map(({id, name, image_url, locations}) => <PetProfile key={id} name={name} imageUrl={image_url} locations={locations} />)
            }
            </div>
            <Link className="Pets__readmore" to={"/pets"}>See More</Link>
        </div>
    )
}

export default Pets