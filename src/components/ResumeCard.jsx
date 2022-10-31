import React from "react";
import { FiDownload, FiEdit, FiTrash2 } from "react-icons/fi";

const ResumeCard = ({ resume }) => {
	return (
		<div
			key={resume._id}
			className="resume--card w-full group flex justify-between items-center px-6 py-6 rounded-lg border border-grey-four hover:border-primary  ease-in-out duration-300"
		>
			<h2 className="resume--name font-semibold text-grey-three group-hover:text-primary duration-300 ease-in-out">
				{resume.name}
			</h2>
			<div className="resume--options flex justify-center items-center gap-8">
				<div className="resume--options--icon cursor-pointer flex justify-center items-center gap-2 text-grey-three hover:text-primary">
					<FiEdit size={20} />
					<p className="resume--options--label text-sm font-semibold">Edit</p>
				</div>
				<div className="resume--options--icon cursor-pointer flex justify-center items-center gap-2 text-grey-three hover:text-primary">
					<FiDownload size={20} />
					<p className="resume--options--label text-sm font-semibold">Save</p>
				</div>
				<div className="resume--options--icon cursor-pointer flex justify-center items-center gap-2 text-grey-three hover:text-primary">
					<FiTrash2 size={20} />
					<p className="resume--options--label text-sm font-semibold">Delete</p>
				</div>
			</div>
		</div>
	);
};

export default ResumeCard;
