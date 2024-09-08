import { Routes, Route } from "react-router-dom"

// componants
import Navbar from "./Navbar/Navbar"
import Home from "./Home"
import PageNotFound from "./PageNotFound/PageNotFound"

// auth components
import Auth from "./Auth/Auth"
import AboutUs from "./AboutUs/AboutUs"
import Contact from "./Contact/Contact"
import Booking from "./Appointment/Booking"

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/aboutus" element={<AboutUs />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/auth" element={<Auth />} />
				<Route path="/appointment" element={<Booking />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</div>
	)
}

export default App
