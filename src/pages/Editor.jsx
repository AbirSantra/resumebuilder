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
import Resume from "../containers/Resume";
import FormSwitcher from "../components/FormSwitcher";
import Divider from "../components/Divider";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetResumeData, setResumeData } from "../redux/resumeSlice";

const Editor = () => {
	const dispatch = useDispatch();

	// to store the id of the resume
	const { id } = useParams();

	// to store if the resume is new or exisiting(edit)
	const isNew = id === "new" ? true : false;

	// get the resume data
	const { data } = useGetResumeQuery(id, {
		refetchOnMountOrArgChange: true,
		skip: isNew,
	});

	// set resume data into global state
	useEffect(() => {
		if (data) {
			dispatch(setResumeData(data));
		}
		if (isNew) {
			dispatch(resetResumeData());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id, data]);

	// to store the current step
	const [step, setStep] = useState(1);

	return (
		<div className="editor w-full flex justify-center items-center">
			<div className="editor--container w-full h-[calc(100vh-5rem)] grid grid-cols-[600px_auto]">
				{/* Form */}
				<div className="relative flex flex-col overflow-auto">
					<FormSwitcher currentStep={step} setStep={setStep} />
					<Divider />
					<div className="section--padding py-12 w-full flex flex-col gap-12 overflow-auto">
						<Header />
						<Divider />
						<Education />
						<Divider />
						<Skills />
						<Divider />
						<Experience />
						<Divider />
						<Projects />
						<Divider />
						<Certifications />
						<Divider />
						<Extra />
						<Divider />
						<Finalize />
					</div>
				</div>
				{/* Preview */}
				<div className="bg-grey-four section--padding w-full flex justify-center items-center">
					<Resume />
				</div>
			</div>
		</div>
	);
};

export default Editor;
