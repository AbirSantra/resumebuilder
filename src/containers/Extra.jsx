import React, { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import InputControl from "../components/InputControl";
import { setExtras as setExtrasAction } from "../redux/resumeSlice";
import { HiViewGridAdd } from "react-icons/hi";

const Extra = ({ isNew, setStep }) => {
	const dispatch = useDispatch();

	// get the resume data state
	const headerData = useSelector((state) => state.resume.data.extra);

	// to store the extras
	const [extras, setExtras] = useState([]);

	if (!isNew) {
		// to refresh the initial values of the extras
		// eslint-disable-next-line react-hooks/rules-of-hooks
		useEffect(() => {
			setExtras(headerData);
		}, [headerData]);
	}

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
	};

	//! to handle back button
	const handleBack = (e) => {
		e.preventDefault();
		setStep((prev) => prev - 1);
	};

	//! to handle next button
	const handleNext = (e) => {
		e.preventDefault();
		dispatch(setExtrasAction(extras));
		setStep((prev) => prev + 1);
	};

	return (
		<div className="extras w-full">
			<div className="extras--container w-full min-h-[calc(100vh-5rem)] flex flex-col justify-start items-start gap-8">
				<div className="header--heading w-full flex flex-col justify-start items-start ">
					<div className="flex justify-center items-center gap-3 text-3xl text-primary">
						<HiViewGridAdd />
						<h1 className="header--title font-bold text-3xl text-primary">
							Add Extra Sections
						</h1>
					</div>
					<p className="header--subheading text-grey-three">
						Use this page to add extra sections to your resume. You can add
						sections like "Awards" or "Roles & Responsibilities" and describe
						them.
					</p>
				</div>

				<div className="extra--list w-full flex flex-col justify-start items-start gap-4">
					{extras.map((extra) => (
						<div
							className="extra--card w-full flex justify-between items-center rounded-lg p-4 px-6 border border-grey-four"
							key={extra.title}
						>
							<div className="card--content w-full flex flex-col justify-start items-start ">
								<p className="card--name font-semibold text-lg">
									{extra.title}
								</p>
								<p className="card--desc text-grey-three text-sm">
									{extra.description.slice(0, 99)}...
								</p>
							</div>
							<div
								className="card--actions flex justify-center items-center gap-2 text-sm cursor-pointer hover:text-primary"
								onClick={() => {
									const newList = [...extras];
									newList.splice(
										newList.findIndex((item) => item.title === extra.title),
										1
									);
									setExtras(newList);
								}}
							>
								<FiTrash2 size={24} />
							</div>
						</div>
					))}
				</div>
				{!form && extras.length !== 0 && (
					<div
						className="extras--card w-full flex justify-between items-center rounded-lg p-4 px-6 border border-grey-four cursor-pointer hover:text-primary hover:border-primary duration-300 ease-in-out"
						onClick={openForm}
					>
						<div className="card--content w-full flex flex-col justify-start items-start ">
							<p className="font-semibold ">+ Add Section</p>
						</div>
					</div>
				)}
				{(form || extras.length === 0) && (
					<div className="extras--new w-full flex flex-col justify-start items-start gap-4 border border-grey-four rounded-lg p-8 ">
						<h1 className="extras--title font-semibold text-lg">
							Add New Section
						</h1>
						<div className="extras--form w-full  grid grid-cols-2 gap-x-4 gap-y-8 ">
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
						<button className="btn secondary--btn mt-4" onClick={addExtra}>
							+ Add Section
						</button>
					</div>
				)}

				<div className="extra--buttons w-full flex justify-between items-center">
					<button className="prev btn secondary--btn" onClick={handleBack}>
						Back
					</button>
					<button className="next btn primary--btn" onClick={handleNext}>
						Next: Finalize
					</button>
				</div>
			</div>
		</div>
	);
};

export default Extra;
