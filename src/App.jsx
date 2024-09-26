import { useEffect, useState } from "react"
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

	const [ _, dispatch ] = useStateValue()
	useEffect(() => {
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

		fetchPetData()
	}, [])

	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/aboutus" element={<AboutUs />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/auth" element={<Auth />} />
				<Route path="/appointment" element={<Booking />} />
				<Route path="/pets" element={<PetsPage />} />
				<Route path="/pet/:id" element={<PetDesc />} />
				<Route path="/admin" element={<Admin />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</div>
	)
}

export default App

