import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiTrash2, FiPlusCircle } from "react-icons/fi";
import { FaUserGraduate } from "react-icons/fa";
import InputControl from "../components/InputControl";
import { setEducation } from "../redux/resumeSlice";
import FormSectionHeader from "../components/FormSectionHeader";

const Education = ({ isNew, setStep }) => {
	const dispatch = useDispatch();

	// get the resume data state
	const educationData = useSelector((state) => state.resume.data.education);

	// to store the education
	const [educations, setEducations] = useState(educationData);

	//! to refresh the local states when global state changes
	useEffect(() => {
		setEducations(educationData);
	}, [educationData]);

	// to store form open/close state
	const [form, setForm] = useState(false);

	// to store the form fields
	const [institute, setInsitute] = useState("");
	const [degree, setDegree] = useState("");
	const [start, setStart] = useState("");
	const [end, setEnd] = useState("");
	const [score, setScore] = useState("");

	//! to handle form field changes
	const instituteChange = (e) => {
		setInsitute(e.target.value);
	};
	const degreeChange = (e) => {
		setDegree(e.target.value);
	};
	const startChange = (e) => {
		setStart(e.target.value);
	};
	const endChange = (e) => {
		setEnd(e.target.value);
	};
	const scoreChange = (e) => {
		setScore(e.target.value);
	};

	//! to set form
	const openForm = () => {
		setForm(true);
	};

	//! to reset form
	const resetForm = () => {
		setInsitute("");
		setDegree("");
		setStart("");
		setEnd("");
		setScore("");
		setForm(false);
	};

	//! to handle input edit
	const handleEdit = () => {
		dispatch(setEducation(educations));
	};

	//! to update global state when education is edited or deleted
	useEffect(() => {
		handleEdit();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [educations]);

	//! to add new education
	const addEducation = () => {
		const newEducations = [
			...educations,
			{
				institute: institute,
				degree: degree,
				startdate: start,
				enddate: end,
				score: score,
			},
		];
		setEducations(newEducations);
		resetForm();
		handleEdit();
	};

	return (
		<div className="education w-full">
			<div className="education--container w-full min-h-[calc(100vh-5rem)] flex flex-col justify-start items-start gap-8">
				{/* Header */}
				<FormSectionHeader
					icon={<FaUserGraduate size={22} />}
					title="Education Details"
					subtitle="Add all schools and colleges that you attended or are currently enrolled in."
				/>

				{/* Education List */}
				<div className="education--list w-full flex flex-col justify-start items-start gap-4">
					{educations.map((education) => (
						<div
							className="education--card w-full flex justify-between items-center rounded-lg py-4 px-4 border border-grey-four"
							key={education.institute}
						>
							<div className="card--content w-full flex flex-col justify-start items-start ">
								<p className="card--institute text-sm font-medium">
									{education.institute}
								</p>
							</div>
							<div
								className="card--actions flex justify-center items-center gap-2 text-sm cursor-pointer hover:text-primary duration-200 ease-in-out"
								onClick={() => {
									const newList = [...educations];
									newList.splice(
										newList.findIndex((item) => item._id === education._id),
										1
									);
									setEducations(newList);
								}}
							>
								<FiTrash2 size={20} />
							</div>
						</div>
					))}

					{/* Add education button */}
					{!form && (
						<div
							className="education--card w-full flex justify-between items-center rounded-lg p-4 px-6 border border-grey-four cursor-pointer hover:text-primary hover:border-primary duration-300 ease-in-out"
							onClick={openForm}
						>
							<div className="card--content w-full  flex justify-center items-center gap-2 ">
								<FiPlusCircle size={20} />
								<p className="card--institute font-medium text-sm">
									Add Education
								</p>
							</div>
						</div>
					)}
				</div>

				{/* New Education Form */}
				{form && (
					<div className="education--new w-full flex flex-col justify-start items-start gap-4 border border-grey-four rounded-lg p-4">
						<h1 className="education--title font-medium mb-4 text-sm">
							Add New Education
						</h1>
						<div className="education--form w-full  grid gap-x-4 gap-y-8 ">
							<InputControl
								type="text"
								label="Institute"
								placeholder="Example Institute of Technology"
								hint="Write the name of your college or school"
								value={institute}
								onChange={instituteChange}
							/>
							<InputControl
								type="text"
								label="Degree"
								placeholder="BTech in Information Technology"
								hint="If you are in school just write 'Primary Education' or 'Secondary Education' "
								value={degree}
								onChange={degreeChange}
							/>
							<div className="w-full flex justify-center items-center gap-4">
								<InputControl
									type="text"
									label="Start Date"
									placeholder="Nov 2020"
									value={start}
									onChange={startChange}
								/>
								<InputControl
									type="text"
									label="End Date"
									placeholder="Jan 2024"
									value={end}
									onChange={endChange}
								/>
							</div>
							<InputControl
								type="text"
								label="Score"
								placeholder="95% or 9.5"
								hint="Write your percentile or GPA here"
								value={score}
								onChange={scoreChange}
							/>
						</div>
						<button
							className="btn primary--btn text-sm mt-4"
							onClick={addEducation}
						>
							+ Add
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Education;
