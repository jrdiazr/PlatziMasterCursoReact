import React from "react";
import "./styles/NotFound.css";
import astronauta from "../images/astronauta.png";

const NotFound = () => {
	return (
		<div className="container">
			<h1>Not Found</h1>
			<img src={astronauta} alt="astronauta" className="astronauta"></img>
		</div>
	);
};

export default NotFound;
