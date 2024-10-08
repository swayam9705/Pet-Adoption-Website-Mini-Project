import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"

// firebase
import { collection, getDocs } from "firebase/firestore"
import { db } from "./config/firebase_config"

// componants
import Navbar from "./Navbar/Navbar"
import Home from "./Home"
import PageNotFound from "./PageNotFound/PageNotFound"
import AboutUs from "./AboutUs/AboutUs"
import Contact from "./Contact/Contact"
import Booking from "./Appointment/Booking"
import PetsPage from "./Pet/PetsPage"
import PetDesc from "./Pet/PetDesc"
import Admin from "./Admin/Admin"

// auth components
import Auth from "./Auth/Auth"


// Context
import { useStateValue } from "./ContextManager"

function App() {

	const [ { isUserLoggedIn }, dispatch ] = useStateValue()

	useEffect(() => {

		// fetching pet data
		async function fetchPetData() {
			(await getDocs(collection(db, "pet_info"))).forEach((doc) => {
				dispatch({
					type: "FETCH_PET_DATA",
					pet: {
						...doc.data(),
						id: doc.id
					}
				})
			})
		}

		// fetching Inquiries
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

		fetchPetData()
		fetchInquiries()
		fetchAppointments()
	}, [])

	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route exact path="/" element={ isUserLoggedIn ? <Home /> : <Auth />} />
				<Route path="/aboutus" element={ isUserLoggedIn ? <AboutUs /> : <Auth />} />
				<Route path="/contact" element={ isUserLoggedIn ? <Contact /> : <Auth />} />
				<Route path="/auth" element={<Auth />} />
				<Route path="/appointment/:id" element={ isUserLoggedIn ? <Booking /> : <Auth />} />
				<Route path="/pets" element={ isUserLoggedIn ? <PetsPage /> : <Auth />} />
				<Route path="/pet/:id" element={ isUserLoggedIn ? <PetDesc /> : <Auth />} />
				<Route path="/admin" element={<Admin />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</div>
	)
}

export default App

