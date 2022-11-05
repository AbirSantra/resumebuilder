import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputControl from "../components/InputControl";
import { setSettings } from "../redux/resumeSlice";

const Finalize = ({ isNew, setStep }) => {
	const dispatch = useDispatch();

	// get the resume data state
	const headerData = useSelector((state) => state.resume);

	// to store the form fields
	const [name, setName] = useState("");
	const [share, setShare] = useState("");

	if (!isNew) {
		// to refresh the initial values of the settings
		// eslint-disable-next-line react-hooks/rules-of-hooks
		useEffect(() => {
			setName(headerData.name);
			setShare(headerData.share);
		}, [headerData]);
	}

	//! to handle form field changes
	const nameChange = (e) => {
		setName(e.target.value);
	};
	const shareChange = (e) => {
		setShare(e.target.value);
	};

	//! to reset form
	const resetForm = () => {
		setName("");
		setShare("");
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
				<div className="header--heading">
					<h1 className="header--title font-bold text-3xl text-primary">
						Customize
					</h1>
					<p className="header--subheading text-grey-three">
						Choose your template and accent color and give your resume a name.
					</p>
				</div>

				<div className="settings--form w-full flex flex-col justify-start items-start gap-4">
					<InputControl
						type="text"
						label="Resume Name"
						placeholder="e.g My Resume"
						value={name}
						onChange={nameChange}
					/>
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
