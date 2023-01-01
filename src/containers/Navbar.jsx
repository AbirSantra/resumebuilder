import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import CompanyLogo from "../components/CompanyLogo";
import { selectCurrentToken } from "../redux/authSlice";

const Navbar = () => {
	// get access token from store
	const token = useSelector(selectCurrentToken);

	return (
		<nav className="navbar w-full h-24 flex justify-center items-center">
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
				{token ? (
					<Link to="dashboard">
						<button className="btn primary--btn">Dashboard</button>
					</Link>
				) : (
					<Link to="auth">
						<button className="btn primary--btn">Login</button>
					</Link>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
