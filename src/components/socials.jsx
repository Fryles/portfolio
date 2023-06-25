import React, { Component } from "react";
import "./Socials.css";

class Socials extends Component {
	constructor(props) {
		super(props);
		this.state = {
			socials: [
				{
					name: "Github",
					link: "https://github.com/fryles",
				},
				{
					name: "LinkedIn",
					link: "https://linkedin.com/in/fryles",
				},
				{
					name: "Instagram",
					link: "https://instagram.com/notfryles",
				},
			],
		};
	}
	render() {
		return (
			<div className="socials">
				{this.state.socials.map((social) => (
					<a href={social.link} target="_blank" rel="noopener noreferrer">
						<img
							className="socialsLogo logo"
							src={`icons/${social.name.toLowerCase()}.png`}
							alt={social.name}></img>
					</a>
				))}
			</div>
		);
	}
}
export default Socials;
