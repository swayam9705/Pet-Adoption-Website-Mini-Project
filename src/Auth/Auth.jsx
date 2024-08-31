import { useState, useEffect } from "react"

import "./Auth.css"
import SignIn from "./SignIn"
import Login from "./Login"
import SignInWithGoogle from "./SignInWithGoogle"

function Auth() {

    const [ authOption, setAuthOption ] = useState("signin")

    const setSignIn = () => {
        setAuthOption("signin")
    }

    const setLogin = () => {
        setAuthOption("login")
    }
    
    return (
        <div className="Auth">
            <div className="Auth__option">
                <div
                    style={authOption === "signin" ? { left: "0"} : { left: "50%" }}
                    className="bg"></div>
                <button
                    onClick={setSignIn} 
                >Sign In</button>
                <button
                    onClick={setLogin} 
                >Login</button>
            </div>
            { authOption === "signin" ? <SignIn /> : <Login /> }
            <SignInWithGoogle />
        </div>
    )
}

export default Auth