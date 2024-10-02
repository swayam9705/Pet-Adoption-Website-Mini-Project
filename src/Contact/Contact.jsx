import { useState } from "react"
import { Link } from "react-router-dom"

import { v4 } from "uuid"

import "./Contact.css"

// firebase import
import { db } from "../config/firebase_config"
import { setDoc, doc  } from "firebase/firestore"

// material ui icons
import XIcon from '@mui/icons-material/X'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

// Context 
import { useStateValue } from "../ContextManager"

function Contact() {

    const [ state, dispatch ] = useStateValue()

    const [ message, setMessage ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    })

    const handleClick = async(e) => {
        await setDoc(doc(db, "inquiry", v4()), {
            ...message,
            replied: false,
            reply: ""
        })

        dispatch({
            type: "ADD_INQUIRY",
            inquiry: {
                ...message,
                replied: false,
                reply: ""
            }
        })

        setMessage({
            firstName: "",
            lastName: "",
            email: "",
            message: ""
        })
    }

    return (
        <div className="Contact" id="Contact">
            <h2 className="Contact__title">Contact Us</h2>
            <ul className="Contact__links">
                <li>Resources</li>
                <li><Link to={"https://bestfriendspetcare.com/pet-adoption-everything-you-need-to-know/"} target="_blank">Blog</Link></li>
                <li><Link>Developers</Link></li>
                <li><Link to={"https://react.dev/"} target="_blank">Resource Library</Link></li>
            </ul>
            <ul className="Contact__social">
                <li><Link><XIcon /></Link></li>
                <li><Link><InstagramIcon /></Link></li>
                <li><Link to={"https://www.youtube.com/watch?v=h5374FBZsz4"} target="_blank"><YouTubeIcon /></Link></li>
                <li><Link to={"https://in.linkedin.com/in/ruturaj-asgolkar-a7749b32b"} target="_blank"><LinkedInIcon /></Link></li>
            </ul>
            <div className="Contact__form">
                <div className="form-element first-name">
                    <span>Name</span> <br />
                    <input
                        type="text"
                        value={message.firstName}
                        onChange={e => {
                            setMessage(prev => {
                                return {
                                    ...prev,
                                    firstName: e.target.value
                                }
                            })
                        }}
                    />
                </div>
                <div className="form-element last-name">
                    <span>Last Name</span> <br />
                    <input
                        type="text"
                        value={message.lastName}
                        onChange={e => {
                            setMessage(prev => {
                                return {
                                    ...prev,
                                    lastName: e.target.value
                                }
                            })
                        }}
                    />
                </div>
                <div className="form-element email">
                    <span>Email</span> <br />
                    <input
                        type="email"
                        value={message.email}
                        onChange={e => {
                            setMessage(prev => {
                                return {
                                    ...prev,
                                    email: e.target.value
                                }
                            })
                        }}
                    />
                </div>
                <div className="form-element message">
                    <span>Message</span> <br />
                    <textarea
                        value={message.message}
                        onChange={e => {
                            setMessage(prev => {
                                return {
                                    ...prev,
                                    message: e.target.value
                                }
                            })
                        }}
                    />
                </div>
                <button
                    onClick={handleClick}
                    className="Contact__submit btn-hover"
                >Submit</button>
            </div>
        </div>
    )
}

export default Contact