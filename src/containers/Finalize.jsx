import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputControl from "../components/InputControl";
import { setSettings } from "../redux/resumeSlice";
import { FaPaintBrush } from "react-icons/fa";
import template1 from "../images/Template1.jpg";

const Finalize = ({ isNew, setStep }) => {
	const dispatch = useDispatch();

	// get the resume data state
	const headerData = useSelector((state) => state.resume);

	// to store the form fields
	const [name, setName] = useState("");

	if (!isNew) {
		// to refresh the initial values of the settings
		// eslint-disable-next-line react-hooks/rules-of-hooks
		useEffect(() => {
			setName(headerData.name);
		}, [headerData]);
	}

	//! to handle form field changes
	const nameChange = (e) => {
		setName(e.target.value);
	};

	//! to handle back button
	const handleBack = (e) => {
		e.preventDefault();
		setStep((prev) => prev - 1);
	};

	//! to handle next button
	const handleNext = (e) => {
		e.preventDefault();
		dispatch(setSettings({ name: name }));
		setStep((prev) => prev + 1);
	};

	return (
		<div className="settings w-full">
			<div className="settings--container w-full min-h-[calc(100vh-5rem)] flex flex-col justify-start items-start gap-8">
				<div className="header--heading w-full flex flex-col justify-start items-start ">
					<div className="flex justify-center items-center gap-3 text-3xl text-primary">
						<FaPaintBrush size={24} />
						<h1 className="header--title font-bold text-3xl text-primary">
							Customize
						</h1>
					</div>
					<p className="header--subheading text-grey-three">
						Choose your template and accent color and give your resume a name.
					</p>
				</div>

				<div className="settings--form w-full flex flex-col justify-start items-start gap-8">
					{/* Resume Name */}
					<InputControl
						type="text"
						label="Resume Name"
						placeholder="e.g Resume for Microsoft"
						value={name}
						onChange={nameChange}
					/>

					{/* Color Selection */}
					<div className="w-full flex flex-col gap-4">
						<h2 className="text-[13px] font-medium text-neutral-500">
							Choose accent color:{" "}
						</h2>
						<div className="w-full flex gap-4">
							<span className="rounded-full h-8 w-8 border-grey-four border-2 hover:scale-110 cursor-pointer ease-out duration-300 bg-red-600"></span>
							<span className="rounded-full h-8 w-8 border-grey-four border-2 hover:scale-110 cursor-pointer ease-out duration-300 bg-orange-600"></span>
							<span className="rounded-full h-8 w-8 border-grey-four border-2 hover:scale-110 cursor-pointer ease-out duration-300 bg-yellow-500"></span>
							<span className="rounded-full h-8 w-8 border-grey-four border-2 hover:scale-110 cursor-pointer ease-out duration-300 bg-green-600"></span>
							<span className="rounded-full h-8 w-8 border-grey-four border-2 hover:scale-110 cursor-pointer ease-out duration-300 bg-blue-600"></span>
							<span className="rounded-full h-8 w-8 border-grey-four border-2 hover:scale-110 cursor-pointer ease-out duration-300 bg-primary"></span>
							<span className="rounded-full h-8 w-8 border-grey-four border-2 hover:scale-110 cursor-pointer ease-out duration-300 bg-pink-600"></span>
						</div>
					</div>

					{/* Template Selection */}
					<div className="w-full flex flex-col gap-4">
						<h2 className="text-[13px] font-medium text-neutral-500">
							Choose template:{" "}
						</h2>
						<div className="w-full grid grid-cols-3 gap-8">
							<div className="w-full border rounded-md hover:border-primary ease-in-out duration-200 cursor-pointer overflow-hidden">
								<img src={template1} alt="template1" />
							</div>
							<div className="w-full border rounded-md hover:border-primary ease-in-out duration-200 cursor-pointer overflow-hidden">
								<img src={template1} alt="template1" />
							</div>
							<div className="w-full border rounded-md hover:border-primary ease-in-out duration-200 cursor-pointer overflow-hidden">
								<img src={template1} alt="template1" />
							</div>
						</div>
					</div>
				</div>

				<div className="settings--buttons w-full flex justify-between items-center">
					<button className="prev btn secondary--btn" onClick={handleBack}>
						Back
					</button>
					<button className="next btn primary--btn" onClick={handleNext}>
						Next: Preview
					</button>
				</div>
			</div>
		</div>
	);
};

export default Finalize;
