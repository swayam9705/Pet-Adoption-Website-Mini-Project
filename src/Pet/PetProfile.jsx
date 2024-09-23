import React, { useState } from "react"
import PropTypes from "prop-types"

import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import { Link } from "react-router-dom"

function PetProfile({ pet }) {

    const [like, setLike] = useState(false)

    const handleLike = () => {
        setLike(l => {
            return !l
        })
    }

    console.log(pet)
    
    return (
        <div className="PetProfile">
            <div
                onClick={handleLike}
                className="PetProfile__heart">
                { like ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
            </div>
            <div className="PetProfile__image-container">
                <img className="PetProfile__image" src={pet.image_url} alt="Pet_image" />
            </div>
            <div className="PetProfile__description">
                <span className="PetProfile__name">{ pet.name }</span>
                <Link to={`/pet/${pet.id}`}>Visit</Link>
                <ul className="PetProfile__locations">
                    {
                        pet.locations.map(loc => <li key={loc}>{ loc }</li>)
                    }
                </ul>
            </div>
        </div>
    )
}


export default PetProfile