import { Link } from "react-router-dom"

import "./Contact.css"

// material ui icons
import XIcon from '@mui/icons-material/X'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

function Contact() {
    return (
        <div className="Contact" id="Contact">
            <h2 className="Contact__title">Contact Us</h2>
            <ul className="Contact__links">
                <li>Resources</li>
                <li><Link>Blog</Link></li>
                <li><Link>Support</Link></li>
                <li><Link>Developers</Link></li>
                <li><Link>Resource Library</Link></li>
            </ul>
            <ul className="Contact__social">
                <li><Link><XIcon /></Link></li>
                <li><Link><InstagramIcon /></Link></li>
                <li><Link><YouTubeIcon /></Link></li>
                <li><Link><LinkedInIcon /></Link></li>
            </ul>
            <div className="Contact__form">
                <div className="form-element first-name">
                    <span>Name</span> <br />
                    <input
                        type="text"
                    />
                </div>
                <div className="form-element last-name">
                    <span>Last Name</span> <br />
                    <input
                        type="text"
                    />
                </div>
                <div className="form-element email">
                    <span>Email</span> <br />
                    <input
                        type="email"
                    />
                </div>
                <div className="form-element message">
                    <span>Message</span> <br />
                    <textarea />
                </div>
                <button className="Contact__submit">Submit</button>
            </div>
        </div>
    )
}

export default Contact