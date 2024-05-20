import React from "react";
import Nav from "../components/nav";
import "./standard.css";
function About() {
	return (
		<div>
			<Nav />
			<h1>Hello again!</h1>
			<div class="rowFlex">
				<img className="bigMe" src="me.png" alt="Myles (me)" />
				<p>
					Lets get to know each other a little better! I'm a 22 year old student
					at UC Santa Cruz, studying Computer Science (Go Slugs!).<br></br> I'm
					currently looking for oppurtunities in the software industry, so if
					you're interested in hiring, please reach out!<br></br> I'm also open
					to contract work relating to branding, marketing, and web development.
					<br></br>
				</p>
			</div>
		</div>
	);
}

export default About;
