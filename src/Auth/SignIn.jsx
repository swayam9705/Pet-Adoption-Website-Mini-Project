import { useState } from "react"

// firebase auth
import { auth } from "../config/firebase_config"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { redirect } from "react-router-dom"

function SignIn() {

    const [ user, setUser ] = useState({ email: "", password: ""})
    const [ isInvalid, setIsInvalid ] = useState(false)

    const handleClick = async () => {
        if (user.email === "" || user.password === "") {
            setIsInvalid(true)
        } else {
            await createUserWithEmailAndPassword(auth, user.email, user.password)
                .then((result) => {
                    const signedInUser = result.user
                    console.log("user is signed in")
                    console.log(signedInUser)
                    redirect("/")
                })
                .catch((error) => {
                    console.log(error)
                    alert("Something went wrong.")
                })
        }
    }

    return (
        <div className="Auth__signin signin">
            <h2 className="Auth__title">Sign In</h2>
            <input
                type="text"
                className="Auth__input"
                required
                placeholder="Enter Email Address"
                value={user.email}
                onChange={e => {
                    setUser(u => { return {...u, email: e.target.value}})
                }}
            />
            <input
                type="password"
                className="Auth__input"
                required
                placeholder="Enter Password"
                onChange={e => {
                    setUser(u => { return { ...u, password: e.target.value}})
                }}
            />
            <button
                onClick={handleClick}
                className="Auth__btn"
            >
                Sign In
            </button>
            { isInvalid ? <span className="Auth__error-message">Email or password cannot be empty.</span> : <span>.</span>}
        </div>
    )
}

export default SignIn