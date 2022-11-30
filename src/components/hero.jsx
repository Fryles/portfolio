import React, { Component } from "react";
import "./Hero.css";

export default class Hero extends Component {
	render() {
		return (
			<div className="hero">
				<div className="heroLeft">
					<img className="bigMe" src="me.png" alt="" />
					<div className="heroDesc">
						<h1>I'm Myles</h1>
						<p>
							I'm a learning developer currently studying Computer Science at UC
							Santa Cruz.
						</p>
					</div>
				</div>
				<div className="heroRight">
					{/* TODO: add interactive star wars references */}
					<h1>Hello there!</h1>
					<p>I'm Myles; a student, developer, and artist.</p>
					<h3>I turn coffee into code, and code into art.</h3>
				</div>
			</div>
		);
	}
}
