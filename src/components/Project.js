import React from "react";
import "./Project.css";

const Project = props => (
	<div className="project">
		<a
			target="_blank"
			rel="noopener noreferrer"
			href={props.link}
			class="button"
		>
			<div
				className="project-background"
				style={{
					backgroundImage: "url(" + props.background + ")"
				}}
			/>
			<div className="info">{props.children}</div>
		</a>
	</div>
);

export default Project;
