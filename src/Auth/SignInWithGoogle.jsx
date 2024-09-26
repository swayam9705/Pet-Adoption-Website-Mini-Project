import { useNavigate } from "react-router-dom"
import GoogleLogo from "../assets/google_logo.svg"

import GoogleIcon from '@mui/icons-material/Google';

// firebase sign in with google
import { auth } from "../config/firebase_config"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"

// Context
import { useStateValue } from "../ContextManager"

function SignInWithGoogle() {

    const [ _, dispatch ] = useStateValue()
    const navigate = useNavigate()

    const handleClick = async () => {
        const provider = new GoogleAuthProvider
        await signInWithPopup(auth, provider)
            .then((userCredential) => {
                const user = userCredential.user
                dispatch({
                    type: "LOGGED_IN",
                    user: {
                        email: user.email
                    }
                })
                navigate("/")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="Auth__signInWithGoogle">
            <button onClick={handleClick}>Sign In with Google&nbsp;&nbsp;<GoogleIcon /> </button>
        </div>
    )
}

export default SignInWithGoogle