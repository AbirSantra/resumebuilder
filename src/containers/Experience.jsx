import React, { useEffect, useState } from "react";
import { FiPlusCircle, FiTrash2 } from "react-icons/fi";
import { FaBriefcase } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import InputControl from "../components/InputControl";
import { setExperience } from "../redux/resumeSlice";
import FormSectionHeader from "../components/FormSectionHeader";

const Experience = ({ isNew, setStep }) => {
	const dispatch = useDispatch();

	// get the resume data state
	const experienceData = useSelector((state) => state.resume.data.experience);

	// to store the experience
	const [experiences, setExperiences] = useState(experienceData);

	//! to refresh the initial values of the experience
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		setExperiences(experienceData);
	}, [experienceData]);

	// to store form open/close state
	const [form, setForm] = useState(false);

	// to store the form fields
	const [employer, setEmployer] = useState("");
	const [position, setPosition] = useState("");
	const [startdate, setStartDate] = useState("");
	const [enddate, setEndDate] = useState("");
	const [description, setDescription] = useState("");

	//! to handle form field changes
	const employerChange = (e) => {
		setEmployer(e.target.value);
	};
	const positionChange = (e) => {
		setPosition(e.target.value);
	};
	const startDateChange = (e) => {
		setStartDate(e.target.value);
	};
	const endDateChange = (e) => {
		setEndDate(e.target.value);
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
		setEmployer("");
		setPosition("");
		setStartDate("");
		setEndDate("");
		setDescription("");
		setForm(false);
	};

	//! to handle next button
	const handleEdit = () => {
		dispatch(setExperience(experiences));
	};

	//! to update the global state when education add or deleted
	useEffect(() => {
		handleEdit();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [experiences]);

	//! to add new experience
	const addExperience = () => {
		const newExperiences = [
			...experiences,
			{
				employer: employer,
				position: position,
				startdate: startdate,
				enddate: enddate,
				description: description,
			},
		];
		setExperiences(newExperiences);
		handleEdit();
		resetForm();
	};

	return (
		<div className="experience w-full">
			<div className="experience--container w-full flex flex-col justify-start items-start gap-8">
				{/* Form Header */}
				<FormSectionHeader
					icon={<FaBriefcase size={24} />}
					title="Experience"
					subtitle="Tell us about your experience. Start with your most recent and work backwards. Skip this section if you don't have any experience yet."
				/>

				{/* Experience List */}
				<div className="experience--list w-full flex flex-col justify-start items-start gap-4">
					{experiences.map((experience) => (
						<div
							className="experience--card w-full flex justify-between items-center rounded-lg p-4 border border-grey-four"
							key={experience.employer}
						>
							<div className="card--content w-full flex flex-col justify-start items-start ">
								<p className="card--employer font-medium text-sm">
									{experience.employer}
								</p>
								<p className="card--position text-grey-three text-xs ">
									{experience.position}
								</p>
							</div>
							<div
								className="card--actions flex justify-center items-center gap-2 text-sm cursor-pointer hover:text-primary duration-200 ease-in-out"
								onClick={() => {
									const newList = [...experiences];
									newList.splice(
										newList.findIndex(
											(item) => item.employer === experience.employer
										),
										1
									);
									setExperiences(newList);
								}}
							>
								<FiTrash2 size={22} />
							</div>
						</div>
					))}
					{!form && (
						<div
							className="education--card w-full flex justify-between items-center rounded-lg p-4 px-6 border border-grey-four cursor-pointer hover:text-primary hover:border-primary duration-300 ease-in-out"
							onClick={openForm}
						>
							<div className="card--content w-full  flex justify-center items-center gap-2 ">
								<FiPlusCircle size={20} />
								<p className="font-medium text-sm">Add Experience</p>
							</div>
						</div>
					)}
				</div>

				{/* New Experience form */}
				{form && (
					<div className="experience--new w-full flex flex-col justify-start items-start gap-4 border border-grey-four rounded-lg p-4 ">
						<h1 className="experience--title font-medium mb-4 ">
							Add New Experience
						</h1>
						<div className="experience--form w-full  grid grid-cols-1 gap-x-4 gap-y-8 ">
							<InputControl
								type="text"
								label="Employer"
								placeholder="XYZ Company"
								hint="This would be the name of the company or the organization that you worked for"
								value={employer}
								onChange={employerChange}
							/>
							<InputControl
								type="text"
								label="Position"
								placeholder="Junior Frontend Developer"
								hint="Add your role or position at this job"
								value={position}
								onChange={positionChange}
							/>
							<div className="w-full flex justify-center items-center gap-4">
								<InputControl
									type="text"
									label="Start Date"
									placeholder="Jan 2022"
									value={startdate}
									onChange={startDateChange}
								/>
								<InputControl
									type="text"
									label="End Date"
									placeholder="Jul 2023"
									value={enddate}
									onChange={endDateChange}
								/>
							</div>

							<InputControl
								textarea
								rows="8"
								type="text"
								label="Description"
								placeholder="Migrated the frontend to a new technology reducing load times by 60% "
								hint="Describe your various roles and responsibilities in the job. Write about all the things that you achieved or learned in this role. If possible, use numbers/facts (Achieved X, measured by Y, by doing Z)."
								value={description}
								onChange={descriptionChange}
							/>
						</div>
						<button
							className="btn primary--btn text-sm mt-4"
							onClick={addExperience}
						>
							<FiPlusCircle size={18} /> Add
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Experience;
