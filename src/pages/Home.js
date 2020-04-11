import React from "react";
import "./styles/Home.css";
import { Link } from "react-router-dom";
import logoConf from "../images/platziconf-logo.svg";
import logo from "../images/astronauts.svg";

const Home = () => {
	return (
		<div className="Home">
			<div className="Home__welcome">
				<img src={logoConf} className="conf-logo" alt="Logo conf" />
				<h3>PRINT YOUR BADGES</h3>
				<p>The easiest way to manage your conference</p>
				<Link to="/badges" className="btn btn-primary">
					Start now
				</Link>
			</div>
			<img src={logo} className="Home__logo" alt="Logo platzi" />
		</div>
	);
};

export default Home;
