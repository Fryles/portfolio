import React, { Component } from "react";
import "./Showcase.css";
import ShowcaseItem from "./showcaseItem";

function shadeColor(hexColor, magnitude) {
	if (hexColor.length === 6) {
		const decimalColor = parseInt(hexColor, 16);
		let r = (decimalColor >> 16) + magnitude;
		r > 255 && (r = 255);
		r < 0 && (r = 0);
		let g = (decimalColor & 0x0000ff) + magnitude;
		g > 255 && (g = 255);
		g < 0 && (g = 0);
		let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
		b > 255 && (b = 255);
		b < 0 && (b = 0);
		return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
	} else {
		return hexColor;
	}
}

class Showcase extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: [
				{
					title: "Porter Shop",
					description:
						"A comprehensive snack selling platform for our dorm at UCSC",
					image: "portershop.png",
					link: "https://github.com/Fryles/PorterShop",
					stack: ["JQuery", "Node.js", "Express", "MongoDB"],
					color: "FF5051",
					sizeClass: "1/3",
				},
				{
					title: "Covid Correlator",
					description: "A data visualization tool for COVID-19.",
					image: "covidcorrelator.png",
					link: "https://github.com/Fryles/Covid-Correlator",
					stack: ["React", "Node.js", "Express"],
					color: "df7dff",
					sizeClass: "1/3",
				},
				{
					title: "Permanence Break",
					description:
						"An entry in the Brackeys Game Jam, created in Unity in a just a week!",
					image: "permanencebreak.png",
					link: "https://itch.io/jam/brackeys-7/rate/1418613",
					stack: ["C Sharp", "Unity", "Blender"],
					color: "909dff",
					sizeClass: "1/3",
				},
				{
					title: "Canvas To Calendar",
					description:
						"Created in Unity in a week for the Brackeys Game Jam. ranked #73 overall out of 1.6k entries.",
					image: "permanencebreak.png",
					link: "hhttps://github.com/Fryles/canvas-to-calendar",
					stack: ["Javascript", "Google Calendar", "Google Chrome"],
					color: "9e68fc",
					sizeClass: "1/2",
				},
			],
		};
	}

	render() {
		return (
			<div
				style={{
					textAlign: "center",
				}}>
				<h1>My Projects</h1>
				<div className="projects">
					{this.state.projects.map((project, index) => {
						return (
							<ShowcaseItem
								style={{
									backgroundColor: shadeColor(project.color, -100),
									padding: "0 1rem",
									width: "fit-content",
									height: "100%",
								}}
								key={index}
								onClick={() => window.open(project.link)}>
								<h3
									style={{
										color: shadeColor(project.color, 100),
										margin: "0.7rem 0",
									}}>
									{project.title}
								</h3>
								<p>{project.description}</p>
								{/* tech stack icons */}
								<div className="showcaseItemStack">
									{/* get logo color */}
									{project.stack.map((tech, index) => {
										return (
											<img
												width={"auto"}
												height={"25px"}
												key={index}
												src={`https://img.shields.io/badge/-${tech}-${shadeColor(
													project.color,
													-50
												).replace("#", "")}?style=flat&
												logo=${tech}&
												labelColor=202020&
												logoColor=white`}
												alt={tech}
											/>
										);
									})}
								</div>
							</ShowcaseItem>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Showcase;
