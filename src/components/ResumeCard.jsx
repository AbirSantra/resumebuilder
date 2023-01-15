import React from "react";
import { FiEdit, FiTrash2, FiShare2 } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDeleteResumeMutation } from "../api/resumeApiSlice";
import moment from "moment";

const ResumeCard = ({ resume }) => {
	const id = resume._id;

	// get the current user id
	const currentUserId = useSelector((state) => state.auth.user._id);

	// action for deletion
	const [deleteResume] = useDeleteResumeMutation();

	//! Handle deletion
	const handleDelete = async () => {
		try {
			await deleteResume(id, currentUserId).unwrap();
		} catch (error) {
			console.log(error);
		}
	};

	//! Handle share
	const handleShare = async () => {
		await navigator.clipboard
			.writeText(`https://resumeapp.netlify.app/resume/${id}`)
			.then(() => alert("Link copied to clipboard!"));
	};

	return (
		<div className="resume--card w-full aspect-[3/4] group flex flex-col justify-center items-center px-6 py-6 rounded-lg border border-grey-four hover:border-primary  ease-in-out duration-300">
			<Link
				to={`/resume/${resume._id}`}
				className="resume--name mt-8 text-lg font-semibold text-center text-grey-three group-hover:text-primary group-hover:underline duration-300 ease-in-out"
			>
				{resume.name}
			</Link>
			<p className="resume--updateTime text-center text-[12px] font-medium text-grey-three">
				Updated {moment(resume.createdAt).fromNow()}
			</p>
			<div className="resume--options mt-4 flex justify-center items-center gap-4">
				<Link
					to={`/editor/${resume._id}`}
					className="resume--options--icon group cursor-pointer invisible opacity-0 group-hover:visible group-hover:opacity-100 flex justify-center items-center gap-2 rounded-full p-3 text-grey-three hover:text-white bg-white hover:bg-primary duration-200 ease-in-out"
				>
					<FiEdit size={20} />
				</Link>
				<div
					className="resume--options--icon group cursor-pointer invisible opacity-0 group-hover:visible group-hover:opacity-100 flex justify-center items-center gap-2 rounded-full p-3 text-grey-three hover:text-white bg-white hover:bg-primary duration-200 ease-in-out"
					onClick={handleShare}
				>
					<FiShare2 size={20} />
				</div>
				<div
					className="resume--options--icon group cursor-pointer invisible opacity-0 group-hover:visible group-hover:opacity-100 flex justify-center items-center gap-2 rounded-full p-3 text-grey-three hover:text-white bg-white hover:bg-primary duration-200 ease-in-out"
					onClick={handleDelete}
				>
					<FiTrash2 size={20} />
				</div>
			</div>
		</div>
	);
};

export default ResumeCard;
