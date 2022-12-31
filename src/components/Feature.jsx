import React from "react";

const Feature = ({ icon, desc, label }) => {
	return (
		<div className="group flex flex-col justify-center items-center gap-4">
			<div
				className="flex justify-center items-center w-[3rem] h-[3rem] rounded-xl bg-blue-600/20 p-4 group-hover:scale-125 ease-in-out duration-200"
				// style={{ backgroundColor: `${color}` }}
			>
				<span className="text-2xl text-blue-600">{icon}</span>
			</div>
			<p className="mt-2 font-semibold text-lg text-slate-800">{label}</p>
			<p className="w-3/5 text-center text-base text-slate-500">{desc}</p>
		</div>
	);
};

export default Feature;
