import React from "react";

const SectionHeader = ({ heading, subheading }) => {
	return (
		<div className="flex flex-col justify-center items-center gap-4 text-center">
			<h1 className="font-extrabold text-5xl">{heading}</h1>
			<p className="font-medium text-grey-three">{subheading}</p>
		</div>
	);
};

export default SectionHeader;
