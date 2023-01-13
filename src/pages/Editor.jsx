import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetResumeQuery } from "../api/resumeApiSlice";
import Header from "../containers/Header";
import Education from "../containers/Education";
import Skills from "../containers/Skills";
import Experience from "../containers/Experience";
import Projects from "../containers/Projects";
import Certifications from "../containers/Certifications";
import Extra from "../containers/Extra";
import Finalize from "../containers/Finalize";
import Preview from "../containers/Preview";

const Editor = () => {
	// to store the id of the resume
	const { id } = useParams();

	// get the resume data
	const { data, isLoading } = useGetResumeQuery(id, {
		refetchOnMountOrArgChange: true,
		skip: id === "new" ? true : false,
	});

	// to store whether resume is new or update
	const isNew = id === "new" ? true : false;

	// to store the current step
	const [step, setStep] = useState(1);

	// to switch the editor body
	const editorBody = () => {
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
			<div className="editor--container w-full max-w-[1100px] px-4 sm:px-8 lg:px-16 py-16 flex flex-col justify-center items-center gap-16">
				<div className="editor--body w-full flex justify-center items-center">
					{editorBody()}
				</div>
			</div>
		</div>
	);
};

export default Editor;
