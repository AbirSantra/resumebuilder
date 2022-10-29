import React from "react";
import { NavLink } from "react-router-dom";
import CompanyLogo from "../components/CompanyLogo";

const Navbar = () => {
	return (
		<nav className="navbar w-full h-24 bg-primary-lighter flex justify-center items-center">
			<div className="section navbar--container w-full flex justify-between items-center">
				<div className="navbar--logo flex justify-center items-center">
					<CompanyLogo />
				</div>
				<div className="navbar--links flex justify-center items-center gap-4">
					<NavLink
						to="/about"
						className={({ isActive }) =>
							isActive ? "navbar--link navbar--link--active" : "navbar--link"
						}
					>
						About
					</NavLink>
					<NavLink
						to="/examples"
						className={({ isActive }) =>
							isActive ? "navbar--link navbar--link--active" : "navbar--link"
						}
					>
						Examples
					</NavLink>
					<NavLink
						to="/reviews"
						className={({ isActive }) =>
							isActive ? "navbar--link navbar--link--active" : "navbar--link"
						}
					>
						Reviews
					</NavLink>
				</div>
				<button className="btn secondary--btn">Login</button>
			</div>
		</nav>
	);
};

export default Navbar;
