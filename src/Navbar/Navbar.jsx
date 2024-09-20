import { Link } from "react-router-dom"
import Logo from "../assets/logo.svg"
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

// style
import "./Navbar.css"
import { useRef } from "react"

// Context
import { useStateValue } from "../ContextManager"

// firebase
import { auth } from "../config/firebase_config"
import { onAuthStateChanged, signOut } from "firebase/auth"

function Navbar() {

    const [state, dispatch ] = useStateValue()

    const sidebar = useRef(null)

    const toggleSidebar = () => {
        sidebar.current.classList.toggle("open")
    }


    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                dispatch({
                    type: "LOGGED_OUT"
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="Navbar">
            <div className="Navbar__logo">
                <img src={Logo} alt="" />
            </div>
            <ul className="Navbar__midsection">
                <li className="Navbar__link"><Link to={"/"}>Home</Link></li>
                <li className="Navbar__link"><Link to={"/pets"}>Pets</Link></li>
                <li className="Navbar__link"><Link to="aboutus">About Us</Link></li>
                <li className="Navbar__link"><Link to="contact">Contact Us</Link></li>
            </ul>
            <div className="Navbar__right">
                <Link to={"#"} className="Navbar__btn">Donate</Link>
                <div className="Navbar__dropdown">
                    <Link to={"/auth"} className="Navbar__auth Navbar__btn">{ state.isUserLoggedIn ? state.user.email : "Sign in"}
                    </Link>
                    {
                        state.isUserLoggedIn &&
                        <ul className="dropdown-box">
                            <li><button onClick={handleLogout}>Logout</button></li>
                            <li><Link to={"#"}>Profile</Link></li>
                        </ul>
                    }
                </div>
            </div>
            <div
                onClick={toggleSidebar}
                className="Navbar__menu"
            ><MenuIcon /></div>
            <ul ref={sidebar} className="Navbar__midsection Navbar__sidebar ">
                <li onClick={toggleSidebar}><CloseIcon /></li>
                <li onClick={toggleSidebar} className="Navbar__link"><Link to={"/"}>Home</Link></li>
                <li onClick={toggleSidebar} className="Navbar__link"><Link to={"/pets"}>Pets</Link></li>
                <li onClick={toggleSidebar} className="Navbar__link"><Link to={"/aboutus"}>About Us</Link></li>
                <li onClick={toggleSidebar} className="Navbar__link"><Link to={"/contact"}>Contact Us</Link></li>
                <li onClick={toggleSidebar} className="Navbar__link"><Link to={"#"}>Donate Us</Link></li>
                <li onClick={toggleSidebar} className="Navbar__link"><Link to={"/auth"}>Sign Up</Link></li>
            </ul>
        </div>
    )
}

export default Navbar