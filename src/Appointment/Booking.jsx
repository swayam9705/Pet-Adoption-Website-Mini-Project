import { useState } from "react"
import "./Booking.css"

import { v4 } from "uuid"

// firebase imports
import { doc, setDoc } from "firebase/firestore"
import { db } from "../config/firebase_config"

function Booking() {

    const [ confirmed, setConfirmed ] = useState(false)
    const [ application, setApplication ] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            contactNo: "",
            address: "",
            date: "",
            time: ""
        }
    )

    const handleChange = e => {
        setApplication(prevApplication => {
            return {...prevApplication, [e.target.name]: e.target.value}
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const now = new Date()
        
        await setDoc(doc(db, "appointments", v4()), {
            ...application,
                uploadTime: `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} - ${now.getHours()}:${now.getMinutes()}`,
                approved: false
        })
        setApplication({
            firstName: "",
            lastName: "",
            email: "",
            contactNo: "",
            address: "",
            date: "",
            time: ""
        })
        console.log("Appointment booked.")
        
        setConfirmed(true)
    }

    return (
        
        <div className="Booking">
            <h2 className="Booking__title">
                {
                    confirmed ? "Your appointment is confirmed" : "Book a Visit"
                }
            </h2>
            { !confirmed && 
                <form className="Booking__form">
                <div className="form__element form__name">
                    <span className="form__field name">Name</span>
                    <input
                        name="firstName"
                        onChange={handleChange}
                        required
                        type="text"
                        className="firstname"
                    />
                    <span className="form__label">firstname</span>
                    <input
                        name="lastName"
                        onChange={handleChange}
                        required
                        type="text"
                        className="lastname"
                    />
                    <span className="form__label">lastname</span>
                </div>
                <div className="form__element form__email">
                    <span className="form__field email">Email</span>
                    <input
                        name="email"
                        onChange={handleChange}
                        required
                        type="email"
                        className="email"
                    />
                    <span className="form__label">example@xyz.com</span>
                </div>
                <div className="form__element form__contact">
                    <span className="form__field contact">Contact No.</span>
                    <input
                        name="contactNo"
                        onChange={handleChange}
                        required
                        type="tel"
                        className="contact"
                    />
                    <span className="form__label">+91-00000-00000</span>
                </div>
                <div className="form__element form__address">
                    <span className="form__field address">Address</span>
                    <input
                        name="address"
                        onChange={handleChange}
                        required
                        className="address"
                    />
                </div>
                <div className="form__element form__datetime">
                    <span className="form__field datetime">Select Date & Time</span>
                    <input
                        name="date"
                        onChange={handleChange}
                        required
                        type="date"
                        className="datetime"
                    />
                    <input
                        name="time"
                        required
                        onChange={handleChange}
                        type="time"
                        className="datetime"
                    />
                </div>
                <button onClick={handleSubmit} className="Booking__submit" type="submit">Send Request</button>
            </form>   
            }
            
        </div>
    )
}

export default Booking