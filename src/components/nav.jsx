import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
	// function to toggle between light and dark theme
	toggleTheme() {
		if (document.documentElement.getAttribute("data-theme") === "dark") {
			document.documentElement.setAttribute("data-theme", "light");
			localStorage.setItem("theme", "light");
		} else {
			document.documentElement.setAttribute("data-theme", "dark");
			localStorage.setItem("theme", "dark");
		}
	}

	render() {
		return (
			<div className="nav">
				{/* <div className="navLogo">
					<Link to="/">
						<img src="me.png" alt="fryles.dev" />
					</Link>
				</div> */}
				<div className="navLinks">
					<Link to="/">/Home</Link>
					{/* <Link to="/About">/About</Link> */}
					<Link to="/Contact">/Contact</Link>
				</div>
				<div className="navButtons">
					<a href="https://github.com/fryles" rel="nofollow">
						<img className="navLogo logo" src="icons/github.png" alt="Github" />
					</a>
					<a href="https://linkedin.com/in/fryles" rel="nofollow">
						<img className="navLogo logo" src="icons/linkedin.png" alt="LinkedIn" />
					</a>
					<button>
						<img className="navLogo logo" src="icons/darkmode.png" alt="Dark/Light Mode" onClick={this.toggleTheme} />
					</button>
				</div>
			</div>
		);
	}
}
export default Nav;
