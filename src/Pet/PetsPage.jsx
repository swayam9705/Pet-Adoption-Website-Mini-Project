import { useState, useRef, useEffect } from "react"

// Context API
import { useStateValue } from "../ContextManager"
import PetProfile from "./PetProfile"

function PetsPage() {

    const option = useRef("all")

    const [ { pets }, _ ] = useStateValue()

    const [ displayPets, setDisplayPets ] = useState(pets)

    const handleChange = e => {
        option.current = e.target.value
    }

    const handleDisplay = () => {
        switch (option.current) {
            case "all":
                setDisplayPets(pets)
                break
            case "cat":
                setDisplayPets(pets.filter(pet => pet.type === "Cat"))
                break
            case "dog":
                setDisplayPets(pets.filter(pet => pet.type === "Dog"))
                break
        }
    }

    return (
        <div className="PetsPage">
            <div className="PetsPage__search">
                <select
                    className="search__input" name="type"
                    onChange={handleChange}
                >
                    <option value="all">All</option>
                    <option value="cat">Cat</option>
                    <option value="dog">Dog</option>
                </select>
                <button
                    className="PetsPage__search-btn"
                    onClick={handleDisplay}
                >Search</button>
            </div>
            <div className="Pets__container">
                {
                    displayPets.map(({id, name, image_url, locations}) => (
                        <PetProfile
                            key={id}
                            name={name}
                            imageUrl={image_url}
                            locations={locations}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default PetsPage