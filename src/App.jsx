import { Routes, Route } from "react-router-dom"

// componants
import Navbar from "./Navbar/Navbar"
import Home from "./Home"

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/contact" element={ <h1>Contact Us</h1> } />
				<Route path="*" element={ <h1>404 Not Found</h1> } />
			</Routes>
		</div>
	)
}

export default App
