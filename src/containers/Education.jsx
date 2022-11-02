import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiTrash2 } from "react-icons/fi";
import InputControl from "../components/InputControl";
import { setEducation } from "../redux/resumeSlice";

const Education = ({ setStep }) => {
	const dispatch = useDispatch();

	// get the resume data state
	const headerData = useSelector((state) => state.resume.data.education);

	// to store the education
	const [educations, setEducations] = useState([]);

	// to refresh the initial values of the education
	useEffect(() => {
		setEducations(headerData);
	}, [headerData]);

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

	console.log(start);

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
	};

	//! to handle back button
	const handleBack = (e) => {
		e.preventDefault();
		setStep((prev) => prev - 1);
	};

	//! to handle next button
	const handleNext = (e) => {
		e.preventDefault();
		dispatch(setEducation(educations));
		setStep((prev) => prev + 1);
	};

	return (
		<div className="education w-full">
			<div className="education--container w-full flex flex-col justify-center items-start gap-8">
				<div className="header--heading">
					<h1 className="header--title font-bold text-3xl text-primary">
						Education
					</h1>
					<p className="header--subheading text-grey-three">
						Tell us about your education. Include every school, or college that
						you have attended, even if you haven't graduated yet.
					</p>
				</div>

				<div className="education--list w-full flex flex-col justify-start items-start gap-4">
					{educations.map((education) => {
						return (
							<div
								className="education--card w-full flex justify-between items-center rounded-lg p-4 px-8 border border-grey-four"
								key={education.institute}
							>
								<div className="card--content w-full flex flex-col justify-start items-start gap-1 ">
									<h1 className="card--institute font-semibold text-lg">
										{education.institute}
									</h1>
									<p className="card--degree italic text-grey-three text-sm">
										{education.degree} &#40;{education.startdate} to{" "}
										{education.enddate}&#41;
									</p>
									<p className="card--score text-primary font-semibold text-sm">
										Score: {education.score}
									</p>
								</div>
								<div
									className="card--actions flex justify-center items-center gap-2 text-sm cursor-pointer hover:text-primary"
									onClick={() => {
										const newList = [...educations];
										newList.splice(
											newList.findIndex((item) => item._id === education._id),
											1
										);
										setEducations(newList);
									}}
								>
									<FiTrash2 size={24} />
									Delete
								</div>
							</div>
						);
					})}
				</div>
				<div className="education--new w-full flex flex-col justify-start items-start gap-4 border border-grey-four rounded-lg p-8">
					<h1 className="education--title font-semibold text-lg">
						Add New Education
					</h1>
					<div className="education--form w-full  grid grid-cols-2 gap-x-4 gap-y-8 ">
						<InputControl
							type="text"
							label="Institute"
							placeholder="e.g Example Institute of Technology"
							value={institute}
							onChange={instituteChange}
						/>
						<InputControl
							type="text"
							label="Degree"
							placeholder="e.g BTech in Information Technology"
							value={degree}
							onChange={degreeChange}
						/>
						<div className="w-full flex justify-center items-center gap-4">
							<InputControl
								type="month"
								label="Start Date"
								value={start}
								onChange={startChange}
							/>
							<InputControl
								type="month"
								label="End Date"
								value={end}
								onChange={endChange}
							/>
						</div>
						<InputControl
							type="text"
							label="Score"
							placeholder="e.g 95% or 9.5"
							value={score}
							onChange={scoreChange}
						/>
					</div>
					<button className="btn secondary--btn mt-4" onClick={addEducation}>
						+ Add Education
					</button>
				</div>

				<div className="education--buttons w-full flex justify-between items-center">
					<button className="prev btn secondary--btn" onClick={handleBack}>
						Back
					</button>
					<button className="next btn primary--btn" onClick={handleNext}>
						Next: Experience
					</button>
				</div>
			</div>
		</div>
	);
};

export default Education;
