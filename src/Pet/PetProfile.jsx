import React, { useState } from "react"
import PropTypes from "prop-types"

import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import { Link } from "react-router-dom"

function PetProfile({ imageUrl, name, locations }) {

    const [like, setLike] = useState(false)

    const handleLike = () => {
        setLike(l => {
            return !l
        })
    }
    
    return (
        <div className="PetProfile">
            <div
                onClick={handleLike}
                className="PetProfile__heart">
                { like ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
            </div>
            <div className="PetProfile__image-container">
                <img className="PetProfile__image" src={imageUrl} alt="Pet_image" />
            </div>
            <div className="PetProfile__description">
                <span className="PetProfile__name">{ name }</span>
                <Link to={"/pets"}>Visit</Link>
                <ul className="PetProfile__locations">
                    {
                        locations.map(loc => <li key={loc}>{ loc }</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

PetProfile.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    locations: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default PetProfile