import { useState } from "react"
import { useParams, Link } from "react-router-dom"

// Context
import { useStateValue } from "../ContextManager"

import "./Appointments.css"
import { doc, updateDoc } from "firebase/firestore"
import { db } from "../config/firebase_config"

function AppointmentItem({ appointment }) {

    const [ approved, setApproved ] = useState("pending")

    const [ _, dispatch ] = useStateValue()

    const handleAccept = e => {
        setApproved("true")
        updateDoc(doc(db, "appointments", appointment.id), {
            approved: "true"
        })

        dispatch({
            type: "REMOVE_PET",
            id: appointment.petId
        })

    }

    const handleReject = e => {
        setApproved("false")
        updateDoc(doc(db, "appointments", appointment.id), {
            approved: "false"
        })
    }

    return (
        <div className="AppointmentItem">
            <div className="Item__name"><b>Name:</b> { appointment.firstName } { appointment.lastName }</div>
            <div className="Item__address"><b>Address</b>: { appointment.address }</div>
            <div className="Item__contact"><b>Contact:</b> { appointment.contactNo }</div>
            <div className="Item__email">
                <b>Email:</b> { appointment.email }
            </div>
            <div className="Item__meeting-datetime">
                <b>Meeting date and time:</b> { appointment.date } { appointment.time }
            </div>
            <div className="Item__pet-id">
                <b>Pet Id: <Link to={`/pet/${appointment.petId}`}>Click here for selected pet</Link></b>
            </div>
            <div className="Item__approve">
                {
                    approved === "pending" &&
                    <>
                        <button
                            className="Item__accept"
                            onClick={handleAccept}
                        >Accept</button>
                        <button
                            onClick={handleReject}
                            className="Item__reject"
                        >Reject</button>
                    </>
                }
                {
                    approved === "true" && <span className="Item__accept">Meeting Accepted</span>
                }
                {
                    approved === "false" && <span className="Item__reject">Meeting Rejected</span>
                }
            </div>
            <div className="Item__upload-time">
                { appointment.uploadTime }
            </div>
        </div>
    )
}

function Appointments( { appointments }) {

    const [ state, _ ] = useStateValue()

    const displayAppointments = appointments.filter(item => item.approved === "pending")

    return (
        <div className="Appointment">
            <h2 className="Appointment__title">Appointments</h2>
            <hr />
            <div className="Appointments__container">
                {   
                    displayAppointments.length === 0 ? 
                    <span className="dummy-text">No appointments yet</span> :
                    displayAppointments.map(item => <AppointmentItem key={item.id} appointment={item} />)
                }
            </div>
        </div>
    )
}

export default Appointments