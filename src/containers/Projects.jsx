import React, { useEffect, useState } from "react";
import { FiPlusCircle, FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import InputControl from "../components/InputControl";
import { setProjects as setProjectsAction } from "../redux/resumeSlice";
import { BsFillGearFill } from "react-icons/bs";
import FormSectionHeader from "../components/FormSectionHeader";
import { FaRocket } from "react-icons/fa";

const Projects = ({ isNew, setStep }) => {
	const dispatch = useDispatch();

	// get the resume data state
	const projectData = useSelector((state) => state.resume.data.projects);

	// to store the projects
	const [projects, setProjects] = useState(projectData);

	//! to refresh the initial values of the projects
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		setProjects(projectData);
	}, [projectData]);

	// to store form open/close state
	const [form, setForm] = useState(false);

	// to store the form fields
	const [name, setName] = useState("");
	const [url, setUrl] = useState("");
	const [startdate, setStartDate] = useState("");
	const [enddate, setEndDate] = useState("");
	const [description, setDescription] = useState("");

	//! to handle form field changes
	const nameChange = (e) => {
		setName(e.target.value);
	};
	const urlChange = (e) => {
		setUrl(e.target.value);
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
		setName("");
		setUrl("");
		setStartDate("");
		setEndDate("");
		setDescription("");
		setForm(false);
	};

	//! to update the global state when projects are added or deleted
	useEffect(() => {
		handleEdit();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [projects]);

	//! to handle edit global state
	const handleEdit = () => {
		dispatch(setProjectsAction(projects));
	};

	//! to add new project
	const addProject = () => {
		const newProjects = [
			...projects,
			{
				name: name,
				url: url,
				startdate: startdate,
				enddate: enddate,
				description: description,
			},
		];
		setProjects(newProjects);
		resetForm();
		handleEdit();
	};

	return (
		<div className="projects w-full">
			<div className="projects--container w-full flex flex-col justify-start items-start gap-8">
				{/* Form Header */}
				<FormSectionHeader
					icon={<FaRocket size={24} />}
					title="Projects"
					subtitle="Add your projects here. They can be personal projects or group projects. Be sure to mention your learnings from each project as well as your contributions in case of a group project."
				/>

				{/* Projects List */}
				<div className="projects--list w-full flex flex-col justify-start items-start gap-4">
					{projects.map((project) => (
						<div
							className="projects--card w-full flex justify-between items-center rounded-lg p-4 border border-grey-four"
							key={project.name}
						>
							<div className="card--content w-full flex flex-col justify-start items-start ">
								<p className="card--name font-medium text-sm">{project.name}</p>
							</div>
							<div
								className="card--actions flex justify-center items-center gap-2 text-sm cursor-pointer hover:text-primary duration-200 ease-in-out"
								onClick={() => {
									const newList = [...projects];
									newList.splice(
										newList.findIndex((item) => item.name === project.name),
										1
									);
									setProjects(newList);
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
								<p className="font-medium text-sm">Add Experience</p>
							</div>
						</div>
					)}
				</div>

				{/* New Project Form */}
				{form && (
					<div className="projects--new w-full flex flex-col justify-start items-start gap-4 border border-grey-four rounded-lg p-4 ">
						<h1 className="project--title font-medium mb-4 ">
							Add New Project
						</h1>
						<div className="projects--form w-full  grid grid-cols-2 gap-x-4 gap-y-8 ">
							<InputControl
								type="text"
								label="Project Name"
								placeholder="Linkedin Clone"
								value={name}
								onChange={nameChange}
							/>
							<InputControl
								type="text"
								label="Project Link"
								hint="Add your project demo link or GitHub link. You may also add relevant files to a Google Drive folder and add the link here"
								value={url}
								onChange={urlChange}
							/>

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
								placeholder="Mar 2022"
								value={enddate}
								onChange={endDateChange}
							/>
							<div className="col-span-2">
								<InputControl
									textarea
									rows="8"
									type="text"
									label="Description"
									hint="Describe your project in details - what it does, what problem does it solve, what tool did you use , what did you learn, what were some obstacles that you overcame while building this project. However, do not write an essay. Be precise and concise"
									value={description}
									onChange={descriptionChange}
								/>
							</div>
						</div>
						<button
							className="btn primary--btn text-sm mt-4"
							onClick={addProject}
						>
							<FiPlusCircle size={18} /> Add
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Projects;
