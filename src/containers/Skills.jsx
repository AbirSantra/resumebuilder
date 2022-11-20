import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import InputControl from "../components/InputControl";
import { setSkills as setSkillsAction } from "../redux/resumeSlice";
import { RiStackFill } from "react-icons/ri";

const Skills = ({ isNew, setStep }) => {
	const dispatch = useDispatch();

	// get the resume data state
	const headerData = useSelector((state) => state.resume.data.skills);

	// to store the experience
	const [skills, setSkills] = useState([]);

	if (!isNew) {
		// to refresh the initial values of the skills
		// eslint-disable-next-line react-hooks/rules-of-hooks
		useEffect(() => {
			setSkills(headerData);
		}, [headerData]);
	}

	// to store form open/close state
	const [form, setForm] = useState(false);

	// to store the form fields
	const [skillName, setSkillName] = useState("");

	//! to handle form field changes
	const skillChange = (e) => {
		setSkillName(e.target.value);
	};

	//! to set form
	const openForm = () => {
		setForm(true);
	};

	//! to reset form
	const resetForm = () => {
		setSkillName("");
	};

	//! to add new skill
	const addSkill = () => {
		const newSkills = [...skills, skillName];
		setSkills(newSkills);
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
		dispatch(setSkillsAction(skills));
		setStep((prev) => prev + 1);
	};

	return (
		<div className="skills w-full">
			<div className="skills--container w-full min-h-[calc(100vh-5rem)] flex flex-col justify-start items-start gap-8">
				<div className="header--heading w-full flex flex-col justify-start items-start ">
					<div className="flex justify-center items-center gap-3 text-3xl text-primary">
						<RiStackFill />
						<h1 className="header--title font-bold text-3xl text-primary">
							Skills
						</h1>
					</div>
					<p className="header--subheading text-grey-three">
						Tell us about your skills. Add your best skills first.
					</p>
				</div>

				<div className="skills--list w-full flex justify-start items-start flex-wrap gap-4">
					{skills.map((skill) => (
						<div
							className="skill--card btn primary--btn gap-1 px-4 py-2 rounded-full"
							key={skill}
						>
							<p className="skill--name text-sm">{skill}</p>
							<div
								className="card--actions flex justify-center items-center gap-2 text-sm cursor-pointer"
								onClick={() => {
									const newList = [...skills];
									newList.splice(
										newList.findIndex((item) => item === skill),
										1
									);
									setSkills(newList);
								}}
							>
								<FiX size={18} />
							</div>
						</div>
					))}
				</div>
				{!form && skills.length !== 0 && (
					<div
						className="skills--card w-full flex justify-between items-center rounded-lg p-4 px-6 border border-grey-four cursor-pointer hover:text-primary hover:border-primary duration-300 ease-in-out"
						onClick={openForm}
					>
						<div className="card--content w-full flex flex-col justify-start items-start ">
							<p className="font-semibold ">+ Add Skill</p>
						</div>
					</div>
				)}

				{(form || skills.length === 0) && (
					<div className="experience--new w-full flex flex-col justify-start items-start gap-4 border border-grey-four rounded-lg p-8 ">
						<h1 className="experience--title font-semibold text-lg">
							Add New Skill
						</h1>
						<div className="experience--form w-full ">
							<InputControl
								type="text"
								label="Skill Name"
								placeholder="e.g Java or ReactJS or AWS"
								value={skillName}
								onChange={skillChange}
							/>
						</div>
						<button className="btn secondary--btn mt-4" onClick={addSkill}>
							+ Add Skill
						</button>
					</div>
				)}

				<div className="skills--buttons w-full flex justify-between items-center">
					<button className="prev btn secondary--btn" onClick={handleBack}>
						Back
					</button>
					<button className="next btn primary--btn" onClick={handleNext}>
						Next: Projects
					</button>
				</div>
			</div>
		</div>
	);
};

export default Skills;
