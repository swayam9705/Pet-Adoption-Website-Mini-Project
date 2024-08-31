import { redirect } from "react-router-dom"
import GoogleLogo from "../assets/google_logo.svg"

// firebase sign in with google
import { auth } from "../config/firebase_config"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"

function SignInWithGoogle() {

    const handleClick = async () => {
        const provider = new GoogleAuthProvider
        await signInWithPopup(auth, provider)
            .then((userCredential) => {
                const user = userCredential.user
                console.log("User is signed in with google.")
                console.log(user)
                redirect("/")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="Auth__signInWithGoogle">
            <button onClick={handleClick}>Sign In with Google <img src={GoogleLogo} alt="" /> </button>
        </div>
    )
}

export default SignInWithGoogle