import React, { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import InputControl from "../components/InputControl";
import { setExperience } from "../redux/resumeSlice";
import { MdWork } from "react-icons/md";

const Experience = ({ isNew, setStep }) => {
	const dispatch = useDispatch();

	// get the resume data state
	const headerData = useSelector((state) => state.resume.data.experience);

	// to store the experience
	const [experiences, setExperiences] = useState([]);

	if (!isNew) {
		// to refresh the initial values of the experience
		// eslint-disable-next-line react-hooks/rules-of-hooks
		useEffect(() => {
			setExperiences(headerData);
		}, [headerData]);
	}

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

	//! to add new education
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
		dispatch(setExperience(experiences));
		setStep((prev) => prev + 1);
	};

	return (
		<div className="experience w-full">
			<div className="experience--container w-full min-h-[calc(100vh-5rem)] flex flex-col justify-start items-start gap-8">
				<div className="header--heading w-full flex flex-col justify-start items-start ">
					<div className="flex justify-center items-center gap-3 text-3xl text-primary">
						<MdWork />
						<h1 className="header--title font-bold text-3xl text-primary">
							Experience
						</h1>
					</div>
					<p className="header--subheading text-grey-three">
						Tell us about your experience. Start with your most recent
						experience and work backwards
					</p>
				</div>

				<div className="experience--list w-full flex flex-col justify-start items-start gap-4">
					{experiences.map((experience) => (
						<div
							className="experience--card w-full flex justify-between items-center rounded-lg p-4 px-6 border border-grey-four"
							key={experience.employer}
						>
							<div className="card--content w-full flex flex-col justify-start items-start ">
								<p className="card--employer font-semibold text-lg">
									{experience.employer}
								</p>
								<p className="card--position text-grey-three text-sm ">
									{experience.position} &#40;{experience.startdate} to{" "}
									{experience.enddate}&#41;
								</p>
								<p className="card--desc text-grey-three text-sm">
									{experience.description.slice(0, 99)}...
								</p>
							</div>
							<div
								className="card--actions flex justify-center items-center gap-2 text-sm cursor-pointer hover:text-primary"
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
								<FiTrash2 size={24} />
							</div>
						</div>
					))}
				</div>
				{!form && experiences.length !== 0 && (
					<div
						className="experience--card w-full flex justify-between items-center rounded-lg p-4 px-6 border border-grey-four cursor-pointer hover:text-primary hover:border-primary duration-300 ease-in-out"
						onClick={openForm}
					>
						<div className="card--content w-full flex flex-col justify-start items-start ">
							<p className="font-semibold ">+ Add Experience</p>
						</div>
					</div>
				)}
				{(form || experiences.length === 0) && (
					<div className="experience--new w-full flex flex-col justify-start items-start gap-4 border border-grey-four rounded-lg p-8 ">
						<h1 className="experience--title font-semibold text-lg">
							Add New Experience
						</h1>
						<div className="experience--form w-full  grid grid-cols-2 gap-x-4 gap-y-8 ">
							<InputControl
								type="text"
								label="Employer"
								placeholder="e.g XYZ Company"
								hint="This would be the name of the company or the organization that you worked for"
								value={employer}
								onChange={employerChange}
							/>
							<InputControl
								type="text"
								label="Position"
								placeholder="e.g Junior Frontend Developer"
								hint="Add your role or position at this job"
								value={position}
								onChange={positionChange}
							/>

							<InputControl
								type="month"
								label="Start Date"
								value={startdate}
								onChange={startDateChange}
							/>
							<InputControl
								type="month"
								label="End Date"
								value={enddate}
								onChange={endDateChange}
							/>

							<InputControl
								textarea
								rows="8"
								type="text"
								label="Descrition"
								placeholder="e.g Migrated the frontend to a new technology reducing load times by 60% "
								hint="Describe your various roles and responsibilities in the job. Write about all the things that you achieved or learned in this role. If possible, use numbers/facts (Achieved X, measured by Y, by doing Z)."
								value={description}
								onChange={descriptionChange}
							/>
						</div>
						<button className="btn secondary--btn mt-4" onClick={addExperience}>
							+ Add Experience
						</button>
					</div>
				)}

				<div className="experience--buttons w-full flex justify-between items-center">
					<button className="prev btn secondary--btn" onClick={handleBack}>
						Back
					</button>
					<button className="next btn primary--btn" onClick={handleNext}>
						Next: Skills
					</button>
				</div>
			</div>
		</div>
	);
};

export default Experience;
