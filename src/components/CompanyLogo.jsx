import React from "react";
import { Link } from "react-router-dom";
import ResumeLogo from "../images/logo.png";

const CompanyLogo = () => {
	return (
		<Link to="/" className="flex justify-center items-center gap-2">
			<div className="image w-8">
				<img src={ResumeLogo} alt="Resu.me Logo" />
			</div>
			<p className="logo--text text-xl font-bold">
				Resu.
				<span className="text-primary ">me</span>
			</p>
		</Link>
	);
};

export default CompanyLogo;
