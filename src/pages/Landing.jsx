import React from "react";
import main from "../assets/images/undraw.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<Logo />
			</nav>
			<div className="container page">
				<div className="info">
					<h1>
						Job <span>Tracking</span> App
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos porro officia, impedit ut tenetur veniam repellendus maxime id
						dignissimos eaque.
					</p>
					<Link to="/register" className="btn btn-hero">
						Login/Register
					</Link>
				</div>
				<img src={main} alt="job-hunt" className="img main-img" />
			</div>
		</Wrapper>
	);
};

export default Landing;
