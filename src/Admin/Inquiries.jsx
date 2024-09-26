import { useState } from "react"

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

// firebase imports
import { updateDoc, doc } from "firebase/firestore"
import { db } from "../config/firebase_config"

function InquiryItem({ inquiry }) {

    const [ replied, setReplied ] = useState(false)
    
    const [ message, setMessage ] = useState("")

    const handleSubmit = e => {
        setReplied(true)

        updateDoc(doc(db, "inquiry", inquiry.id), {
            reply: message,
            replied: true
        })
    }

    return (
        <div className="InquiryItem">
            <div className="Item__name"><b>Name:</b> { inquiry.firstName } { inquiry.lastName }</div>
            <div className="Item__email">
                <b>Email:</b> { inquiry.email }
            </div>
            <div className="Item__message">
                <b>Message:</b> { inquiry.message }
            </div>
            <div className="Inquiry__reply">
                {
                    !replied && 
                    (<>
                        <textarea
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            className="Inquiry__reply-text"
                        ></textarea>
                        <button 
                            onClick={handleSubmit}
                            className="Inquiry__reply-submit"
                        >
                        Send</button>
                    </>
                    )
                }
                {
                    replied &&
                    <span
                        className="Inquiry__replied" 
                    ><CheckCircleOutlineIcon />&nbsp; Message sent successfully.</span>

                }
            </div>
        </div>
    )
}

function Inquiries({ inquiries }) {
    return (
        <div className="Inquiries">
            <h2 className="Inquiries__title">INQUIRIES</h2>
            <hr />
            <div className="Inquiries__container">
                {
                    inquiries.filter(item => item.replied === false).map(item => (
                        <InquiryItem
                            key={item.id}
                            inquiry={item}
                        />
                    ))
                }
            </div>
            
        </div>
    )
}

export default Inquiries