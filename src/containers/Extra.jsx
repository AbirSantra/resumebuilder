import React, { useEffect, useState } from "react";
import { FiPlusCircle, FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import InputControl from "../components/InputControl";
import { setExtras as setExtrasAction } from "../redux/resumeSlice";
import FormSectionHeader from "../components/FormSectionHeader";
import { FaShapes } from "react-icons/fa";

const Extra = ({ isNew, setStep }) => {
	const dispatch = useDispatch();

	// get the resume data state
	const extraData = useSelector((state) => state.resume.data.extra);

	// to store the extras
	const [extras, setExtras] = useState(extraData);

	//! to refresh the initial values of the extras
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		setExtras(extraData);
	}, [extraData]);

	// to store form open/close state
	const [form, setForm] = useState(false);

	// to store the form fields
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	//! to handle form field changes
	const titleChange = (e) => {
		setTitle(e.target.value);
	};
	const descriptionChange = (e) => {
		setDescription(e.target.value);
	};

	//! to set form
	const openForm = () => {
		setForm(true);
	};

	//! to reset form
	const resetForm = () => {
		setTitle("");
		setDescription("");
		setForm(false);
	};

	//! to edit the global state of extra sections
	const handleEdit = () => {
		dispatch(setExtrasAction(extras));
	};

	//! to update the global state when sections are added or deleted
	useEffect(() => {
		handleEdit();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [extras]);

	//! to add new extra
	const addExtra = () => {
		const newExtras = [
			...extras,
			{
				title: title,
				description: description,
			},
		];
		setExtras(newExtras);
		resetForm();
		handleEdit();
	};

	return (
		<div className="extras w-full">
			<div className="extras--container w-full flex flex-col justify-start items-start gap-8">
				{/* Form Header */}
				<FormSectionHeader
					icon={<FaShapes size={24} />}
					title="Custom Sections"
					subtitle="You can add your own sections to your resume such as 'Awards & Acheivement' or 'Roles and Responsibilities' and describe them"
				/>

				{/* Extra list */}
				<div className="extra--list w-full flex flex-col justify-start items-start gap-4">
					{extras.map((extra) => (
						<div
							className="extra--card w-full flex justify-between items-center rounded-lg p-4 border border-grey-four"
							key={extra.title}
						>
							<div className="card--content w-full flex flex-col justify-start items-start ">
								<p className="card--name font-medium text-sm">{extra.title}</p>
							</div>
							<div
								className="card--actions flex justify-center items-center gap-2 text-sm cursor-pointer hover:text-primary duration-200 ease-in-out"
								onClick={() => {
									const newList = [...extras];
									newList.splice(
										newList.findIndex((item) => item.title === extra.title),
										1
									);
									setExtras(newList);
								}}
							>
								<FiTrash2 size={22} />
							</div>
						</div>
					))}
					{!form && (
						<div
							className="w-full flex justify-between items-center rounded-lg p-4 px-6 border border-grey-four cursor-pointer hover:text-primary hover:border-primary duration-300 ease-in-out"
							onClick={openForm}
						>
							<div className="card--content w-full  flex justify-center items-center gap-2 ">
								<FiPlusCircle size={20} />
								<p className="font-medium text-sm">Add Section</p>
							</div>
						</div>
					)}
				</div>

				{/* New Extra form */}
				{form && (
					<div className="extras--new w-full flex flex-col justify-start items-start gap-4 border border-grey-four rounded-lg p-4 ">
						<h1 className="project--title font-medium mb-4 ">
							Add New Section
						</h1>
						<div className="extras--form w-full  grid grid-cols-1 gap-x-4 gap-y-8 ">
							<InputControl
								type="text"
								label="Section Title"
								placeholder="e.g Awards and Achievements"
								value={title}
								onChange={titleChange}
							/>
							<InputControl
								textarea
								rows="8"
								type="text"
								label="Description"
								placeholder="Describe your section"
								value={description}
								onChange={descriptionChange}
							/>
						</div>
						<button
							className="btn primary--btn text-sm mt-4"
							onClick={addExtra}
						>
							<FiPlusCircle size={18} /> Add
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Extra;
