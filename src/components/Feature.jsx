import React from "react";

const Feature = ({ icon, color, label }) => {
	return (
		<div className="flex flex-col justify-center items-center gap-4">
			<div
				className="group flex justify-center items-center w-[100px] h-[100px] rounded-xl "
				style={{ backgroundColor: `${color}` }}
			>
				<div className="flex justify-center items-center w-10 group-hover:scale-110 ease-in-out duration-300">
					<img src={icon} alt={label} />
				</div>
			</div>
			<p className="font-medium text-grey-three">{label}</p>
		</div>
	);
};

export default Feature;
