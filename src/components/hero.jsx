import React, { Component } from "react";
import "./Hero.css";
import Socials from "./socials.jsx";

export default class Hero extends Component {
	render() {
		return (
			<div className="hero">
				<div className="heroLeft">
					<h1>Hello There, I'm Myles</h1>
					<div className="heroIntro">
						<img className="bigMe" src="me.png" alt="Myles (me)" />
						{/* speech bubble */}
						I'm a developer currently studying Computer Science at UCSC.
						<br /> I am interested in full-stack web development, game
						development, and machine learning applications.
					</div>
					<span>
						Want to get in touch? <Socials />
					</span>
				</div>
				<div className="heroRight"></div>
			</div>
		);
	}
}
