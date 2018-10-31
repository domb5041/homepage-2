import React from "react";
import Project from "./Project";
import Title from "./Title";
import "./Projects.css";

//images
import mononote from "./images/mononote.png";
import planets from "./images/planets.png";
import colourclock from "./images/colourclock.png";
import barclock from "./images/barclock.png";
import helloworld from "./images/helloworld.png";
import checkboxchallenge from "./images/checkboxchallenge.png";
import albumtable from "./images/albumtable.png";
import avatar from "./images/avatar.png";
import notecircle from "./images/notecircle.png";
import teddy from "./images/teddy.png";

import CV from "./Dominic Butler CV.pdf";

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
			<Title title="Dominic Butler" />

			<Project link={CV} background={avatar} color="rgb(191, 191, 191)">
				I'm a frontend web-developer focused on user interface. Find my
				current CV here.
			</Project>

			<div className="spacer" />

			<Title title="Top Projects" />

			<Project link="https://mononote.herokuapp.com/" background={mononote}>
				MonoNote is minimalist note-pad app built with {reactTag} and{" "}
				{bootstrapTag}.
			</Project>

			<Project
				link="https://planet-scale.herokuapp.com"
				background={planets}
			>
				An interactive visualisation showing the scale of planets in our
				solarsystem. Built with {d3Tag}.
			</Project>

			<Project
				link="https://www.youtube.com/watch?v=JChDbIOkE58&frags=pl%2Cwn"
				background={notecircle}
			>
				Basic music theory explained with Illustrator and After Effects.
			</Project>

			<div className="spacer" />

			<Title title="The rest" />

			<Project link="https://bar-clock.herokuapp.com" background={barclock}>
				Visualising progress through the year down to the second. Built with{" "}
				{d3Tag}.
			</Project>

			<Project
				link="https://hello-world-animation.herokuapp.com"
				background={helloworld}
			>
				Experimenting with animation in {javascriptTag}.
			</Project>

			<Project
				link="https://colour-clock.herokuapp.com"
				background={colourclock}
			>
				A {javascriptTag} clock that changes colour.
			</Project>

			<Project
				link="https://album-wall.herokuapp.com"
				background={albumtable}
			>
				An album cover layout. Experimenting with {cssTag} styles.
			</Project>

			<Project
				link="https://checkbox-challenge.herokuapp.com"
				background={checkboxchallenge}
			>
				A simple {javascriptTag} memory game using the checkbox element.
			</Project>

			<Project
				link="https://www.instagram.com/dombutlerpad/"
				background={teddy}
			>
				A collection of my graphic design and illustration work.
			</Project>

			<div className="spacer" />
		</div>
	);
};

export default Projects;
