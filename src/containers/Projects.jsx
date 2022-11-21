import React, { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import InputControl from "../components/InputControl";
import { setProjects as setProjectsAction } from "../redux/resumeSlice";
import { BsFillGearFill } from "react-icons/bs";

const Projects = ({ isNew, setStep }) => {
	const dispatch = useDispatch();

	// get the resume data state
	const headerData = useSelector((state) => state.resume.data.projects);

	// to store the projects
	const [projects, setProjects] = useState([]);

	if (!isNew) {
		// to refresh the initial values of the projects
		// eslint-disable-next-line react-hooks/rules-of-hooks
		useEffect(() => {
			setProjects(headerData);
		}, [headerData]);
	}

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
	};

	//! to handle back button
	const handleBack = (e) => {
		e.preventDefault();
		setStep((prev) => prev - 1);
	};

	//! to handle next button
	const handleNext = (e) => {
		e.preventDefault();
		dispatch(setProjectsAction(projects));
		setStep((prev) => prev + 1);
	};

	return (
		<div className="projects w-full">
			<div className="projects--container w-full min-h-[calc(100vh-5rem)] flex flex-col justify-start items-start gap-8">
				<div className="header--heading w-full flex flex-col justify-start items-start ">
					<div className="flex justify-center items-center gap-3 text-3xl text-primary">
						<BsFillGearFill />
						<h1 className="header--title font-bold text-3xl text-primary">
							Projects
						</h1>
					</div>
					<p className="header--subheading text-grey-three">
						Add your projects. They can be personal projects or group projects.
						Be sure to mention your learning from each project and your
						responsibilities in case of group projects
					</p>
				</div>

				<div className="projects--list w-full flex flex-col justify-start items-start gap-4">
					{projects.map((project) => (
						<div
							className="projects--card w-full flex justify-between items-center rounded-lg p-4 px-6 border border-grey-four"
							key={project.name}
						>
							<div className="card--content w-full flex flex-col justify-start items-start ">
								<p className="card--name font-semibold text-lg">
									{project.name}
								</p>
								<p className="card--url text-grey-three text-sm ">
									&#40;{project.startdate} to {project.enddate}
									&#41;
								</p>
								<p className="card--desc text-grey-three text-sm">
									{project.description.slice(0, 99)}...
								</p>
							</div>
							<div
								className="card--actions flex justify-center items-center gap-2 text-sm cursor-pointer hover:text-primary"
								onClick={() => {
									const newList = [...projects];
									newList.splice(
										newList.findIndex((item) => item.name === project.name),
										1
									);
									setProjects(newList);
								}}
							>
								<FiTrash2 size={24} />
							</div>
						</div>
					))}
				</div>
				{!form && projects.length !== 0 && (
					<div
						className="project--card w-full flex justify-between items-center rounded-lg p-4 px-6 border border-grey-four cursor-pointer hover:text-primary hover:border-primary duration-300 ease-in-out"
						onClick={openForm}
					>
						<div className="card--content w-full flex flex-col justify-start items-start ">
							<p className="font-semibold ">+ Add Project</p>
						</div>
					</div>
				)}
				{(form || projects.length === 0) && (
					<div className="projects--new w-full flex flex-col justify-start items-start gap-4 border border-grey-four rounded-lg p-8 ">
						<h1 className="projects--title font-semibold text-lg">
							Add New Project
						</h1>
						<div className="projects--form w-full  grid grid-cols-2 gap-x-4 gap-y-8 ">
							<InputControl
								type="text"
								label="Project Name"
								placeholder="e.g Linkedin Clone"
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
								label="Description"
								hint="Describe your project in details - what it does, what problem does it solve, what tool did you use , what did you learn, what were some obstacles that you overcame while building this project. However, do not write an essay. Be precise and concise"
								value={description}
								onChange={descriptionChange}
							/>
						</div>
						<button className="btn secondary--btn mt-4" onClick={addProject}>
							+ Add Project
						</button>
					</div>
				)}

				<div className="projects--buttons w-full flex justify-between items-center">
					<button className="prev btn secondary--btn" onClick={handleBack}>
						Back
					</button>
					<button className="next btn primary--btn" onClick={handleNext}>
						Next: Certifications
					</button>
				</div>
			</div>
		</div>
	);
};

export default Projects;
