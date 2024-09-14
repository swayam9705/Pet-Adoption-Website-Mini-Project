import { useState, useEffect } from "react"

import PetProfile from "./PetProfile"
import "./Pets.css"

// firebase import
import { collection, getDocs } from "firebase/firestore"
import { db } from "../config/firebase_config"

// Context
import { useStateValue } from "../ContextManager"
import { Link } from "react-router-dom"

function Pets() {

    const [ state, dispatch ] = useStateValue()

    useEffect(() => {
        async function fetchPetData() {
            (await getDocs(collection(db, "pet_info"))).forEach((doc) => {
                dispatch({
                    type: "FETCH_PET_DATA",
                    pet: {
                        ...doc.data(),
                        id: doc.id
                    }
                })
            })
        }

        fetchPetData()
    }, [])

    console.log(state.pets)

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