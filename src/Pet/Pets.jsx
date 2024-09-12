import { useState, useEffect } from "react"

import PetProfile from "./PetProfile"
import "./Pets.css"

// firebase import
import { collection, getDocs } from "firebase/firestore"
import { db } from "../config/firebase_config"

// DUMMY DATA START
 
const PETS = [
    { 
        name: "Cupcake",
        imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSzHgJ7uCoFTiBkc2XhK2-mD-EGSSmL0opOXbAoCc0q08j0OWvx9eoxj96HmF76",
        locations: ["Mumbai", "Navi Mumbai"]
    },
    {
        name: "Lucy",
        imageUrl: "https://images.dog.ceo/breeds/retriever-golden/n02099601_5857.jpg",
        locations: ["Thane"]
    },
    {
        name: "Shaggy",
        imageUrl: "https://media-be.chewy.com/wp-content/uploads/2019/07/24115655/spotted-cat-breed-bengal.jpg",
        locations: ["Navi Mumbai"]
    },
    {
        name: "Oscar",
        imageUrl: "https://images.dog.ceo/breeds/pug/n02110958_16447.jpg",
        locations: ["Mumbai", "Thane"]
    },
    {
        name: "Cake",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplKdFWRTd-kcl-6ZoRcMvVGrDH3zWEBcWnQ&s",
        locations: ["Mumbai"]
    }
]


// DUMMY DATA END

function Pets() {

    const [pets, setPets] = useState([])

    useEffect(() => {
        getDocs(collection(db, "pet_info"))
            .then(snapshot => {
                snapshot.forEach(item => {
                    setPets(pets => {
                        return [...pets, {
                            id: item.id,
                            name: item.data().name,
                            imageUrl: item.data().image_url,
                            locations: item.data().locations
                        }]
                    })
                })    
            })
            .catch(error => {
                console.log("Error fetching data.")
            })
    }, [])

    console.log(pets)

    return (
        <div className="Pets">
            <h2 className="Pets__title">Pets</h2>
            <div className="Pets__container">
            {
                pets.map(({id, name, imageUrl, locations}) => <PetProfile key={id} name={name} imageUrl={imageUrl} locations={locations} />)
            }
            </div>
        </div>
    )
}

export default Pets