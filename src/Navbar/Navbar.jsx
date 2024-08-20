import { Link } from "react-router-dom"
import Logo from "../assets/logo.svg"
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

// style
import "./Navbar.css"
import { useRef } from "react"

function Navbar() {

    const sidebar = useRef(null)

    const toggleSidebar = () => {
        sidebar.current.classList.toggle("open")
    }

    return (
        <div className="Navbar">
            <div className="Navbar__logo">
                <img src={Logo} alt="" />
            </div>
            <ul className="Navbar__midsection">
                <li className="Navbar__link"><Link to={"#"}>Home</Link></li>
                <li className="Navbar__link"><Link to={"#"}>Pets</Link></li>
                <li className="Navbar__link"><a href="#AboutUs">About Us</a></li>
                <li className="Navbar__link"><Link to={"#"}>Contact Us</Link></li>
            </ul>
            <div className="Navbar__right">
                <Link to={"#"} className="Navbar__btn">Donate Us</Link>
                <Link to={"#"} className="Navbar__auth Navbar__btn">Sign Up</Link>
            </div>
            <div
                onClick={toggleSidebar}
                className="Navbar__menu"
            ><MenuIcon /></div>
            <ul ref={sidebar} className="Navbar__midsection Navbar__sidebar ">
                <li onClick={toggleSidebar}><CloseIcon /></li>
                <li className="Navbar__link"><Link to={"#"}>Home</Link></li>
                <li className="Navbar__link"><Link to={"#"}>Pets</Link></li>
                <li className="Navbar__link"><Link to={"#"}>About Us</Link></li>
                <li className="Navbar__link"><Link to={"#"}>Contact Us</Link></li>
                <li className="Navbar__link"><Link to={"#"}>Donate Us</Link></li>
                <li className="Navbar__link"><Link to={"#"}>Sign Up</Link></li>
                <li className="Navbar__link"><Link to={"#"}>Login</Link></li>
            </ul>
        </div>
    )
}

export default Navbar