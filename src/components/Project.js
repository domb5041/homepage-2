import React from "react";

const Project = props => (
	<a href={props.link} class="button">
		<div className="project">
			<div
				className="project-background"
				style={{
					backgroundImage: "url(" + props.background + ")"
				}}
			/>
			<div className="info">{props.children}</div>
		</div>
	</a>
);

export default Project;
