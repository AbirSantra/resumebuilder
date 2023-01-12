import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetResumeQuery } from "../api/resumeApiSlice";
import { selectCurrentUser } from "../redux/authSlice";
import Header from "../containers/Header";
import Education from "../containers/Education";
import Skills from "../containers/Skills";
import Experience from "../containers/Experience";
import Projects from "../containers/Projects";
import Certifications from "../containers/Certifications";
import Extra from "../containers/Extra";
import Finalize from "../containers/Finalize";
import Preview from "../containers/Preview";
import Resume from "../containers/Resume";
import FormSwitcher from "../components/FormSwitcher";

const Editor = () => {
	// to store the id of the resume
	const { id } = useParams();

	// get the resume data
	const { data, isLoading } = useGetResumeQuery(id, {
		refetchOnMountOrArgChange: true,
		skip: id === "new" ? true : false,
	});

	// to store whether resume is new or update
	const [isNew, setIsNew] = useState(id === "new" ? true : false);

	// to store the current step
	const [step, setStep] = useState(1);

	//! to switch the form body
	const formBody = () => {
		switch (step) {
			case 1:
				return <Header isNew={isNew} step={step} setStep={setStep} />;
			case 2:
				return <Education isNew={isNew} step={step} setStep={setStep} />;
			case 4:
				return <Skills isNew={isNew} step={step} setStep={setStep} />;
			case 3:
				return <Experience isNew={isNew} step={step} setStep={setStep} />;
			case 5:
				return <Projects isNew={isNew} step={step} setStep={setStep} />;
			case 6:
				return <Certifications isNew={isNew} step={step} setStep={setStep} />;
			case 7:
				return <Extra isNew={isNew} step={step} setStep={setStep} />;
			case 8:
				return <Finalize isNew={isNew} step={step} setStep={setStep} />;
			case 9:
				return <Preview isNew={isNew} id={id} step={step} setStep={setStep} />;
			default:
				return null;
		}
	};

	return (
		<div className="editor w-full flex justify-center items-center">
			<div className="editor--container w-full min-h-[calc(100vh-5rem)] grid grid-cols-[2fr_3fr]">
				<div className="flex flex-col gap-4">
					<FormSwitcher />
					<div>{step}</div>
				</div>
				<div className="bg-grey-four section--padding w-full flex justify-center items-center">
					<Resume />
				</div>
			</div>
		</div>
	);
};

export default Editor;
