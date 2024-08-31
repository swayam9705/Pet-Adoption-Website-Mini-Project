import { useState } from "react"

// firebase auth
import { auth } from "../config/firebase_config"
import { signInWithEmailAndPassword } from "firebase/auth"
import { redirect } from "react-router-dom"

function Login() {

    const [ user, setUser ] = useState({ email: "", password: ""})
    const [ isInvalid, setIsInvalid ] = useState(false)

    const handleClick = async () => {
        if (user.email === "" || user.password === "") {
            setIsInvalid(true)
        } else {
            await signInWithEmailAndPassword(auth, user.email, user.password)
                .then((userCredential) => {
                    const user = userCredential.user
                    console.log("user is logged in.")
                    console.log(user)
                    redirect("/")
                })
                .catch((error) => {
                    console.log(error)
                    alert("Something went wrong.")
                })
        }
    }

    return (
        <div className="Auth__signin login">
            <h2 className="Auth__title">Login</h2>
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
                value={user.password}
                onChange={e => {
                    setUser(u => { return { ...u, password: e.target.value}})
                }}
            />
            <button
                className="Auth__btn"
                onClick={handleClick}
            >Log In</button>
            { isInvalid ? <span className="Auth__error-message">Email or password cannot be empty.</span> : <span>.</span>}
        </div>
    )
}

export default Login