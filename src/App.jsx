import { useLayoutEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./Main.css";

function App() {
	useLayoutEffect(() => {
		const systemTheme = window.matchMedia?.("(prefers-color-scheme: dark)");
		const applyTheme = () => {
			let preference;
			try {
				preference = localStorage.getItem("themePreference");
			} catch {
				// Follow the system when browser storage is unavailable.
			}
			const theme = preference === "light" || preference === "dark"
				? preference
				: systemTheme?.matches ? "dark" : "light";
			document.documentElement.setAttribute("data-theme", theme);
		};

		applyTheme();
		systemTheme?.addEventListener("change", applyTheme);
		return () => systemTheme?.removeEventListener("change", applyTheme);
	}, []);
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
