import React, { Component } from "react";
import "./Showcase.css";
import ShowcaseItem from "./showcaseItem";

function shadeColor(hexColor, magnitude) {
	hexColor = hexColor.replace("#", "");
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

function hexToRgb(hex) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? [
				parseInt(result[1], 16),
				parseInt(result[2], 16),
				parseInt(result[3], 16),
		  ]
		: null;
}

function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function blendColor(color1, color2) {
	color1 = hexToRgb(color1);
	color2 = hexToRgb(color2);
	var w1 = 0.5;
	var w2 = 1 - w1;
	var rgb = [
		Math.round(color1[0] * w1 + color2[0] * w2),
		Math.round(color1[1] * w1 + color2[1] * w2),
		Math.round(color1[2] * w1 + color2[2] * w2),
	];
	rgb = rgbToHex(rgb[0], rgb[1], rgb[2]);
	return rgb;
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
					color: "DB8181",
					colorEnd: "b36d78",
				},
				{
					title: "Covid Correlator",
					description: "A data visualization tool for COVID-19.",
					image: "covidcorrelator.png",
					link: "https://github.com/Fryles/Covid-Correlator",
					stack: ["React", "Node.js", "Express"],
					color: "A04181",
					colorEnd: "C37d48",
				},
				{
					title: "Permanence Break",
					description:
						"An entry in the Brackeys Game Jam, created in Unity in a just a week!",
					image: "permanencebreak.png",
					link: "https://itch.io/jam/brackeys-7/rate/1418613",
					stack: ["C Sharp", "Unity", "Blender"],
					color: "4DA0B0",
					colorEnd: "d39d38",
				},
				{
					title: "Canvas To Calendar",
					description:
						"Created in Unity in a week for the Brackeys Game Jam. ranked #73 overall out of 1.6k entries.",
					image: "permanencebreak.png",
					link: "hhttps://github.com/Fryles/canvas-to-calendar",
					stack: ["Javascript", "Google Calendar", "Google Chrome"],
					color: "aa4b6b",
					colorEnd: "3b8d99",
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
									background:
										"linear-gradient(45deg, #" +
										project.color +
										", #" +
										project.colorEnd +
										")",
									padding: "0 1rem",
									width: "fit-content",
								}}
								key={index}
								onClick={() => window.open(project.link)}>
								<h3
									style={{
										margin: "0.7rem 0",
										color: shadeColor(
											blendColor(project.color, project.colorEnd),
											120
										),
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
													blendColor(project.color, project.colorEnd),
													-30
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
