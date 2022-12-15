import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Showcase.css";

class Showcase extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: [
				{
					title: "Porter Shop",
					description: "A simple e-commerce site.",
					image: "portershop.png",
					link: "https://porter-shop.herokuapp.com/",
					stack: ["JQuery", "Node", "Express", "MongoDB"],
				},
				{
					title: "Covid Correlator",
					description: "A data visualization tool for COVID-19.",
					image: "covidcorrelator.png",
					link: "https://covid-correlator.herokuapp.com/",
					stack: ["React", "Node", "Express"],
				},
				{
					title: "Permanence Break",
					description:
						"Created in Unity in a week for the Brackeys Game Jam. ranked #73 overall out of 1.6k entries.",
					image: "permanencebreak.png",
					link: "https://itch.io/jam/brackeys-7/rate/1418613",
					stack: ["C#", "Unity", "Blender"],
				},
				{
					title: "Permanence Break",
					description:
						"Created in Unity in a week for the Brackeys Game Jam. ranked #73 overall out of 1.6k entries.",
					image: "permanencebreak.png",
					link: "https://itch.io/jam/brackeys-7/rate/1418613",
				},
			],
		};
	}

	render() {
		return (
			<div className="projects">
				<h1>My Projects</h1>
				<div className="showcase">
					{this.state.projects.map((project, index) => {
						return (
							<div
								className="showcaseItem"
								key={index}
								style={{
									background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(images/${project.image})`,
									backgroundPosition: "center",
									backgroundSize: "cover",
								}}>
								<h3>{project.title}</h3>
								<div className="showcaseItemText">
									<p>{project.description}</p>
									<Link to={project.link}>View</Link>
								</div>
								{/* tech stack icons */}
								<span className="showcaseItemstack">

								</span>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Showcase;
