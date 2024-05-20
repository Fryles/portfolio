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
						{/* speech bubble */}
						I'm a developer currently studying Computer Science at UCSC.
						<br /> I am interested in full-stack web development, and love
						getting creative with code.
					</div>
					<span id="socialsHook">
						Want to get in touch? <Socials />
					</span>
				</div>
				<div className="heroRight">
					<svg
						version="1.1"
						x="0px"
						y="0px"
						viewBox="140 0 1700 1080"
						id="mySvg">
						<defs>
							<linearGradient
								id="logo-gradient"
								x1="50%"
								y1="0%"
								x2="50%"
								y2="100%">
								<stop offset="0%" stopColor="#8A2387">
									<animate
										attributeName="stop-color"
										values="#8A2387; #F27121; #8A2387"
										dur="4s"
										repeatCount="indefinite"></animate>
								</stop>

								<stop offset="100%" stopColor="#F27121">
									<animate
										attributeName="stop-color"
										values="#F27121; #8A2387; #F27121"
										dur="4s"
										repeatCount="indefinite"></animate>
								</stop>
							</linearGradient>
						</defs>
						<g>
							<g>
								<path
									fill="url('#logo-gradient')"
									d="M244.94,297.93c-1.72-38.33,2.2-76.69,11.12-114c8.1-33.9,19.66-68.07,37.09-98.39c7.69-13.38,17.69-27.44,28.93-37
			c5.59-4.76,11.78-8.94,18.34-12.23c-4.21,2.11,0.37-0.03,1.46-0.47c1.78-0.73,3.59-1.33,5.39-2.02c6.88-2.64-4.38,0.75,0.12-0.03
			c1.11-0.28,2.22-0.54,3.35-0.76c3.72-0.7,2.99-0.59-2.21,0.31c0-0.04,4.88-0.51,4.51-0.45c-1.82,0.1-3.64,0.21-5.46,0.31
			c3.16,0.04,3-0.01-0.5-0.16c-7.6-0.97,1.45,0.64,1.69,0.29c-0.34,0.49-7.58-1.26-2.4-0.24c7.2,1.42-5.83-2.58,0.89,0.36
			c1.36,0.59,2.77,1.08,4.1,1.73c-5.03-2.47,1.44,1.15,1.98,1.51c1.75,1.15,3.41,2.41,5.05,3.7c3.23,2.54,1.43,1.29,0.81,0.7
			c1.46,1.41,2.84,2.91,4.15,4.45c1.97,2.31,3.78,4.75,5.45,7.28c3.58,5.44,6.62,11.41,8.85,17.54
			c10.75,29.59,9.32,63.49,9.71,94.45c0.5,39.22-0.03,78.46-1.57,117.66c-3.09,78.4-10.23,156.63-21.41,234.29
			c-12.56,87.25-30.23,173.73-52.81,258.95c-1.23,4.66,8.63,9.18,10.98,10.04c6.93,2.52,14.21,3.53,21.53,3.91
			c7.86,0.4,16.24,0.24,23.91-1.69c4.95-1.24,15.07-3.19,17.23-8.49c41.49-101.37,87.71-200.75,137.34-298.37
			c49.46-97.28,102.26-192.84,157.08-287.2c31.09-53.52,62.85-106.66,95.02-159.54c-24.11-2.52-48.21-5.03-72.32-7.55
			c-21.55,47.11-34.72,97.41-44.21,148.19c-9.86,52.75-17.05,106.06-24.33,159.21c-15.07,109.98-27.44,220.33-37.09,330.92
			c-5.43,62.21-9.99,124.49-13.72,186.82c-0.3,5.1,7.61,8.7,10.98,10.04c7.93,3.15,18.1,4.3,26.52,4.16
			c11.87-0.2,32.85-0.72,37.5-14.2c32.07-93.01,66.98-185.04,104.59-275.96c37.76-91.27,78.25-181.41,121.39-270.26
			c24.48-50.4,49.83-100.38,76-149.93c-24.55-1.26-49.11-2.52-73.66-3.78c-2.51,91.15-5.02,182.3-7.54,273.46
			c-1.22,44.25-2.92,88.51-3.5,132.77c-0.49,37.49,0.6,75.54,9.72,112.08c8.76,35.07,24.97,75.09,56.75,95.39
			c25,15.97,58.67,18.22,86.93,11.33c23.77-5.79,40.67-20.43,58.37-36.32c67.75-60.82,135.5-121.64,203.25-182.47
			c75.94-68.17,151.88-136.35,227.82-204.52c-24.55-1.26-49.11-2.52-73.66-3.78c11.37,48.98,0.94,99.05-15.2,145.71
			c-16.92,48.88-38.73,96.37-60.45,143.26c-22.01,47.52-45.23,94.47-68.64,141.31c-22.69,45.41-45.17,90.96-69.41,135.56
			c-26.81,49.33-56.03,97.43-90.18,142.06c24.11,0,48.21,0,72.32,0c-13.1-23.75-2.53-52.44,9.14-74.51
			c13.4-25.34,29.77-49.39,45.45-73.35c31.5-48.13,64.89-95.04,100.03-140.58c70.55-91.43,148.2-177.39,232.02-256.84
			c46.49-44.07,95-85.97,145.2-125.76c12.44-9.86-3.93-17.45-13.45-19.43c-9.4-1.95-19.36-2.63-28.9-1.43
			c-7.23,0.91-16.53,1.86-22.41,6.53c-92.83,73.59-180,154.41-260.2,241.6c-79.36,86.27-151.93,178.78-216.76,276.44
			c-17.99,27.11-36.59,54.4-52.1,83.02c-15.33,28.28-27.06,61.57-10.35,91.85c5.23,9.48,27.35,10.57,36.16,10.43
			c11.05-0.19,28.72-0.7,36.16-10.43c61.3-80.12,106.15-170.86,151.13-260.71c47.26-94.41,95.51-189.23,132.72-288.18
			c19.9-52.92,35.85-110.02,22.72-166.56c-2.8-12.06-22.97-13.46-32.52-13.95c-14.12-0.72-30.21,0.36-41.15,10.17
			c-129.17,115.96-258.35,231.93-387.52,347.89c-15.36,13.78-30.65,27.64-46.07,41.35c-6.47,5.76-13.12,11.41-20.58,15.88
			c-0.97,0.58-5.64,2.76-1.65,1.04c-1.41,0.61-8.71,2.54-1.48,0.75c2.98-0.74,6.53-0.95,9.51-0.99c3.42-0.08,6.81,0.19,10.17,0.81
			c4.06,1.27,4.5,1.34,1.32,0.21c-4.49-2.06-0.91-0.47-0.12,0c-1.94-1.15-3.85-2.32-5.69-3.63c-3.16-2.26-3.9-2.87-6.61-5.68
			c-6-6.2-11.02-13.24-15.47-20.61c-9.06-15.01-15.81-31.21-20.39-48.11c-9.39-34.69-11.17-70.97-11.05-106.74
			c0.14-41.11,1.92-82.25,3.05-123.35c2.69-97.66,5.38-195.33,8.07-292.99c0.14-5.08-7.43-8.75-10.98-10.04
			c-6.93-2.52-14.21-3.53-21.53-3.91c-7.86-0.4-16.24-0.24-23.91,1.69c-5.35,1.34-14.42,3.15-17.23,8.49
			c-46.57,88.18-90.51,177.74-131.68,268.57c-41.17,90.82-79.6,182.89-115.21,276.04c-20.15,52.7-39.37,105.75-57.76,159.09
			c25,0,50,0,75,0c6.56-109.82,15.75-219.48,27.62-328.86c11.79-108.58,25.2-217.3,43.42-325c9.47-55.98,21.91-111.87,45.63-163.73
			c9.17-20.03-62.12-24.31-72.32-7.55c-56.97,93.66-112.63,188.13-165.67,284.08C483.9,406.37,433.7,503.28,387.46,602.08
			c-26.22,56.01-51.13,112.63-74.56,169.86c24.55,1.26,49.11,2.52,73.66,3.78c42.56-160.6,67.53-325.76,74.17-491.78
			c1.65-41.13,2.17-82.31,1.57-123.47c-0.49-33.63-0.34-68.07-13.17-99.75c-16.11-39.74-56.59-54.9-97.07-55.86
			c-43.18-1.02-84.69,14.16-113.12,47.2c-26.95,31.32-41.71,73.72-52.89,112.86c-12.34,43.19-18.11,88.1-16.1,133
			c0.59,13.17,28.72,14.35,37.5,14.2c8.77-0.15,18.36-0.66,26.52-4.16C237.97,306.25,245.19,303.39,244.94,297.93L244.94,297.93z"
								/>
							</g>
						</g>
					</svg>
				</div>
			</div>
		);
	}
}
