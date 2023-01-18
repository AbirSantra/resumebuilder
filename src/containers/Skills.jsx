import React, { useEffect, useState } from "react";
import { FiPlusCircle, FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import InputControl from "../components/InputControl";
import { setSkills as setSkillsAction } from "../redux/resumeSlice";
import { FaLayerGroup } from "react-icons/fa";
import FormSectionHeader from "../components/FormSectionHeader";

const Skills = () => {
	const dispatch = useDispatch();

	// get the resume data state
	const skillsData = useSelector((state) => state.resume.data.skills);

	// to store the experience
	const [skills, setSkills] = useState(skillsData);

	// to set the local state when global state updates
	useEffect(() => {
		setSkills(skillsData);
	}, [skillsData]);

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

	//! to update global data
	const handleUpdate = () => {
		dispatch(setSkillsAction(skills));
	};

	//! to update the global state when skills are added or deleted
	useEffect(() => {
		handleUpdate();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [skills]);

	//! to add new skill
	const addSkill = () => {
		const newSkills = [...skills, skillName];
		setSkills(newSkills);
		resetForm();
		handleUpdate();
	};

	return (
		<div className="skills w-full">
			<div className="skills--container w-full flex flex-col justify-start items-start gap-8">
				<FormSectionHeader
					icon={<FaLayerGroup />}
					title="Skills"
					subtitle="Tell us about your skills. Add the skills you're confident in first."
				/>

				<div className="skills--list w-full flex justify-start items-start flex-wrap gap-2">
					{skills.map((skill) => (
						<div
							className="skill--card btn primary--btn gap-1 px-4 py-2 pr-2 rounded-lg"
							key={skill}
						>
							<p className="skill--name text-xs">{skill}</p>
							<div
								className="card--actions text-sm cursor-pointer"
								onClick={() => {
									const newList = [...skills];
									newList.splice(
										newList.findIndex((item) => item === skill),
										1
									);
									setSkills(newList);
								}}
							>
								<FiX size={20} />
							</div>
						</div>
					))}
				</div>

				{!form && (
					<div
						className="skills--card w-full flex justify-between items-center rounded-lg p-4 px-6 border border-grey-four cursor-pointer hover:text-primary hover:border-primary duration-300 ease-in-out"
						onClick={openForm}
					>
						<div className="card--content w-full  flex justify-center items-center gap-2 ">
							<FiPlusCircle size={20} />
							<p className="font-medium text-sm">Add Skill</p>
						</div>
					</div>
				)}

				{form && (
					<div className="w-full flex flex-col justify-start items-start gap-4 border border-grey-four rounded-lg p-4 ">
						<h1 className="font-medium mb-4">Add New Skill</h1>
						<div className="experience--form w-full ">
							<InputControl
								type="text"
								label="Skill Name"
								placeholder="Like Java or Excel or Marketing"
								value={skillName}
								onChange={skillChange}
							/>
						</div>
						<button
							className="btn primary--btn text-sm mt-4"
							onClick={addSkill}
						>
							<FiPlusCircle size={18} /> Add
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Skills;
