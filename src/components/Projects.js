import React from "react";
import Project from "./Project";
import mononote from "./images/mononote.png";
import planets from "./images/planets.png";
import colourclock from "./images/colourclock.png";
import barclock from "./images/barclock.png";
import helloworld from "./images/helloworld.png";
import checkboxchallenge from "./images/checkboxchallenge.png";
import albumtable from "./images/albumtable.png";
import avatar from "./images/avatar.png";

const Projects = props => {
	const reactTag = (
		<span style={{ color: "rgb(251, 201, 92)" }}>
			<strong>REACT</strong>
		</span>
	);
	const d3Tag = (
		<span style={{ color: "rgb(125, 209, 240)" }}>
			<strong>D3</strong>
		</span>
	);
	const bootstrapTag = (
		<span style={{ color: "rgb(107, 193, 138)" }}>
			<strong>BOOTSTRAP</strong>
		</span>
	);
	const javascriptTag = (
		<span style={{ color: "rgb(193, 94, 98)" }}>
			<strong>JAVASCRIPT</strong>
		</span>
	);
	const cssTag = (
		<span style={{ color: "rgb(210, 133, 101)" }}>
			<strong>CSS</strong>
		</span>
	);

	return (
		<div className="projects">
			<div className="section-title">
				<h1>About Me</h1>
			</div>

			<Project link="/" background={avatar} color="rgb(191, 191, 191)">
				I'm a frontend web-developer focused on user interface. Find my
				current CV here.
			</Project>

			<div className="spacer" />

			<div className="section-title">
				<h1>My Best Work</h1>
			</div>

			<Project link="https://mononote.herokuapp.com/" background={mononote}>
				MonoNote is minimalist note-pad app built with {reactTag} and{" "}
				{bootstrapTag}.
			</Project>

			<Project
				link="http://dominicbutler.uk/planetscale/"
				background={planets}
			>
				An interactive visualisation showing the scale of planets in our
				solarsystem. Built with {d3Tag}.
			</Project>

			<div className="spacer" />

			<div className="section-title">
				<h1>Everything Else</h1>
			</div>

			<Project
				link="http://dominicbutler.uk/barclock/"
				background={barclock}
			>
				Visualising progress through the year down to the second. Built with{" "}
				{d3Tag}.
			</Project>

			<Project
				link="http://dominicbutler.uk/helloworld/"
				background={helloworld}
			>
				Experimenting with animation in {javascriptTag}.
			</Project>

			<Project
				link="http://dominicbutler.uk/colourclock/"
				background={colourclock}
			>
				A {javascriptTag} clock that changes colour.
			</Project>

			<Project
				link="http://dominicbutler.uk/albumtable/"
				background={albumtable}
			>
				An album cover layout. Experimenting with {cssTag} styles.
			</Project>

			<Project
				link="http://dominicbutler.uk/checkboxchallenge/"
				background={checkboxchallenge}
			>
				A simple {javascriptTag} memory game using the checkbox element.
			</Project>

			<div className="spacer" />
		</div>
	);
};

export default Projects;
