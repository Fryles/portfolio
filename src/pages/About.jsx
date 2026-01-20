import React from "react";
import Nav from "../components/nav";
import "./standard.css";
function About() {
	return (
		<div>
			<Nav />
			<h1>Hello again!</h1>
			<div className="rowFlex">
				<img className="bigMe" src="me.png" alt="Myles (me)" />
				<p>
					Lets get to know each other a little better! I'm currently employed at Santa Cruz Biotechnology Inc.<br></br> I've completed my B.S. in Computer Science at UCSC as of June 20204<br></br> I'm open
					to contract work relating to branding, marketing, and web development.
					<br></br>
				</p>
			</div>
		</div>
	);
}

export default About;
