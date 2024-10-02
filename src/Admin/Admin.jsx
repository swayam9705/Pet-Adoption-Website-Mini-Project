import { useState } from "react"

import "./Admin.css"

// componants
import Appointments from "./Appointment"
import Inquiries from "./Inquiries"

// Context
import { useStateValue } from "../ContextManager"

function Admin() {

    const [ user, setUser ] = useState({ username: "", password: "" })

    const [ state, dispatch ] = useStateValue()

    const handleChange = e => {
        setUser(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleClick = e => {
        if (user.username === "admin" && user.password === "admin123") {
            dispatch({ type: "ADMIN_LOGGED_IN" })
        }
    }

    return (
        <div className="Admin">
            {
                state.adminLoggedIn ? 
                    <div className="Admin__dashboard">
                        <Appointments
                            appointments={state.appointments} 
                        />
                        <Inquiries
                            inquiries={state.inquiries.filter(item => item.replied === false)}
                        />
                    </div>
                    :
                    <div className="Admin__form">
                        <h3 className="Admin__title">ADMIN</h3>
                        <div className="Admin__form-container">
                            <input
                                type="text"
                                name="username"
                                onChange={handleChange}
                                placeholder="Enter username"
                            />
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                placeholder="Enter password"
                            />
                            <button
                                className="Admin__submit"
                                onClick={handleClick}
                            >Submit</button>
                        </div>
                    </div> 
            }
        </div>
    )
}

export default Admin