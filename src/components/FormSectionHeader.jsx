import React from "react";

const FormSectionHeader = ({ icon, title, subtitle }) => {
	return (
		<div className="header--heading w-full flex flex-col justify-start items-start ">
			<div className="flex justify-center items-center gap-2 text-lg text-primary">
				<span>{icon}</span>
				<h1 className="header--title font-semibold text-2xl text-primary">
					{title}
				</h1>
			</div>
			<p className="header--subheading text-sm text-grey-three">{subtitle}</p>
		</div>
	);
};

export default FormSectionHeader;
