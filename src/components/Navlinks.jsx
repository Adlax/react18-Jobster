import { NavLink, Link } from "react-router-dom";
import links from "../utils/links";

import React from "react";

const Navlinks = ({ toggle }) => {
	return (
		<div className="nav-links">
			{links.map((link) => {
				const { id, text, path, icon } = link;
				return (
					<NavLink to={path} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} key={id} onClick={() => toggle()}>
						<span className="icon">{icon}</span>
						{text}
					</NavLink>
				);
			})}
		</div>
	);
};

export default Navlinks;
