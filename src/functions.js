import { getDocs, collection } from "firebase/firestore";
import { db } from "./config/firebase_config";
import { useStateValue } from "./ContextManager";

const [ state, dispatch ] = useStateValue()

async function fetchPetData() {
    (await getDocs(collection(db, "pet_info"))).forEach(doc => {
        dispatch({
            type: "FETCH_PET_DATA",
            pet: {
                ...doc.data(),
                id: doc.id
            }
        })
    })
}

async function fetchInquiries() {
    (await getDocs(collection(db, "inquiry"))).forEach(
        doc => {
            dispatch({
                type: "FETCH_INQUIRIES",
                inquiry: {
                    ...doc.data(),
                    id: doc.id
                }
            })
        }
    )
}

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

export { fetchPetData, fetchAppointments, fetchInquiries}