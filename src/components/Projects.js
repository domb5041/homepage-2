import React from "react";
import Project from "./Project";
import Title from "./Title";
import Tag from "./Tag";
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
import cafes from "./images/cafes.png";
import colourPalette from "./images/colourPalette.png";

import CV from "./Dominic Butler CV.pdf";

const Projects = props => {
	return (
		<div className="projects">
			<Title title="Dominic Butler" />

			<Project link={CV} background={avatar} color="rgb(191, 191, 191)">
				I'm a <Tag>frontend web-developer</Tag> focused on design. Find my
				current CV here.
			</Project>

			<div className="spacer" />

			<Title title="Top Projects" />

			<Project
				link="https://material-colour-palette.herokuapp.com"
				background={colourPalette}
				repo="https://github.com/domb5041/material-colour-palette"
			>
				A model driven colour palette built with <Tag>React</Tag>.
			</Project>

			<Project
				link="https://planet-scale.herokuapp.com"
				background={planets}
				repo="https://github.com/domb5041/planetscale"
			>
				An interactive visualisation showing the scale of planets in our
				solarsystem. Built with <Tag>D3</Tag>.
			</Project>

			<Project
				link="https://www.youtube.com/watch?v=JChDbIOkE58&list=PLrRbyFPS5q6w8wLmKAudLnPg1L7CMv1Lw"
				background={notecircle}
			>
				Guitar theory made bright and lively with <Tag>Illustrator</Tag> and{" "}
				<Tag>After Effects</Tag>.
			</Project>

			<div className="spacer" />

			<Title title="More Projects" />
			<Project
				link="https://kentico-cafes.herokuapp.com/"
				background={cafes}
				repo="https://github.com/domb5041/kentico-cafes"
			>
				Connecting to Kentico Cloud API. built with <Tag>React</Tag> and
				flexbox.
			</Project>

			<Project
				link="https://www.instagram.com/dombutlerpad/"
				background={teddy}
			>
				A collection of my <Tag>graphic design</Tag> and illustration work.
			</Project>
			<Project
				link="https://mononote.herokuapp.com/"
				background={mononote}
				repo="https://github.com/domb5041/mononote.git"
			>
				MonoNote is minimalist note-pad app built with <Tag>React</Tag> and{" "}
				<Tag>Bootstrap</Tag>.
			</Project>
			<Project
				link="https://bar-clock.herokuapp.com"
				background={barclock}
				repo="https://github.com/domb5041/bar-clock"
			>
				Visualising progress through the year down to the second. Built with{" "}
				<Tag>D3</Tag>.
			</Project>

			<Project
				link="https://hello-world-animation.herokuapp.com"
				background={helloworld}
				repo="https://github.com/domb5041/hello-world"
			>
				Experimenting with animation in <Tag>Javascript</Tag>.
			</Project>

			<Project
				link="https://colour-clock.herokuapp.com"
				background={colourclock}
			>
				A <Tag>Javascript</Tag> clock that changes colour.
			</Project>

			<Project
				link="https://album-wall.herokuapp.com"
				background={albumtable}
			>
				An album cover layout. Experimenting with <Tag>CSS</Tag> styles.
			</Project>

			<Project
				link="https://checkbox-challenge.herokuapp.com"
				background={checkboxchallenge}
			>
				A simple <Tag>Javascript</Tag> memory game using the checkbox
				element.
			</Project>

			<div className="spacer" />
		</div>
	);
};

export default Projects;
