import { useEffect, useRef, useState } from "react"

import "./Admin.css"

// componants
import Appointments from "./Appointment"
import Inquiries from "./Inquiries"

// Context
import { useStateValue } from "../ContextManager"

// firebase import
import { collection, getDocs } from "firebase/firestore"
import { db } from "../config/firebase_config"



function Admin() {

    const [ isAdmin, setIsAdmin ] = useState(false)
    const [ user, setUser ] = useState({ username: "", password: "" })

    const [ state, dispatch ] = useStateValue()

    useEffect(() => {
    
        async function fetchInquiries() {

            // fetching inquiries
            (await getDocs(collection(db, "inquiry"))).forEach((doc) => {
                dispatch({
                    type: "FETCH_INQUIRIES",
                    inquiry: {
                        ...doc.data(),
                        id: doc.id
                    }
                })
            })
        }

        // fetching appointments
        async function fetchAppointments() {
            (await getDocs(collection(db, "appointments"))).forEach(doc => {
                dispatch({
                    type: "FETCH_APPOINTMENTS",
                    appointment: {
                        ...doc.data(),
                        id: doc.id
                    }
                })
            })
        }
         


        fetchInquiries()
        fetchAppointments()
    }, [])


    const handleChange = e => {
        setUser(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleClick = e => {
        if (user.username === "" && user.password === "") {
            setIsAdmin(true)
        }
    }

    return (
        <div className="Admin">
            {
                isAdmin ? 
                    <div className="Admin__dashboard">
                        <Appointments
                            appointments={state.appointments} 
                        />
                        <Inquiries
                            inquiries={state.inquiries}
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