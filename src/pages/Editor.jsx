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
import Awards from "../containers/Awards";
import Roles from "../containers/Roles";
import Extra from "../containers/Extra";
import Finalize from "../containers/Finalize";
import { setResumeData } from "../redux/resumeSlice";

const Editor = () => {
	const dispatch = useDispatch();

	// to store the id of the resume
	const { id } = useParams();

	// get the current user from the store
	const currentUser = useSelector(selectCurrentUser);

	// get the resume data
	const { data, isLoading } = useGetResumeQuery(id, {
		refetchOnMountOrArgChange: true,
		skip: id === "new" ? true : false,
	});

	// to store the current step
	const [step, setStep] = useState(1);

	// to switch the editor body
	const editorBody = () => {
		switch (step) {
			case 1:
				return <Header data={data} step={step} setStep={setStep} />;
			case 2:
				return <Education step={step} setStep={setStep} />;
			case 4:
				return <Skills step={step} setStep={setStep} />;
			case 3:
				return <Experience step={step} setStep={setStep} />;
			case 5:
				return <Projects step={step} setStep={setStep} />;
			case 6:
				return <Certifications step={step} setStep={setStep} />;
			case 7:
				return <Awards step={step} setStep={setStep} />;
			case 8:
				return <Roles step={step} setStep={setStep} />;
			case 9:
				return <Extra step={step} setStep={setStep} />;
			case 10:
				return <Finalize step={step} setStep={setStep} />;
			default:
				return null;
		}
	};

	console.log(step);

	return (
		<div className="editor w-full flex justify-center items-center">
			<div className="editor--container section py-28 flex flex-col justify-center items-center gap-8">
				<h1 className="editor--header w-full font-bold text-4xl">
					Resume Editor
				</h1>
				<div className="editor--body w-full flex justify-center items-center">
					{editorBody()}
				</div>
			</div>
		</div>
	);
};

export default Editor;
