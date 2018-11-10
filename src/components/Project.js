import React from "react";
import "./Project.css";

const Project = props => {
	let gitHub;
	if (props.repo) {
		gitHub = (
			<a class="gitHub" href={props.repo}>
				Open GitHub Repo
			</a>
		);
	}
	return (
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
				<div className="info">
					{props.children} {gitHub}
				</div>
			</a>
		</div>
	);
};

export default Project;
