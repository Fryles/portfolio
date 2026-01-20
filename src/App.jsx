import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./Main.css";

function App() {
	const currentTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : null;
	if (currentTheme) {
		document.documentElement.setAttribute("data-theme", currentTheme);
	} else {
		localStorage.setItem("theme", "dark");
		document.documentElement.setAttribute("data-theme", "dark");
	}
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="about" element={<About />} /> */}
				<Route path="contact" element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
