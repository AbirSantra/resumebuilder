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
import Resume from "../containers/Resume";
import FormSwitcher from "../components/FormSwitcher";
import Divider from "../components/Divider";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetResumeData, setResumeData } from "../redux/resumeSlice";
import { useRef } from "react";

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

	//! set resume data into global state
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

	// refs to form sections
	const formBodyRef = useRef();
	const headerRef = useRef();
	const educationRef = useRef();
	const skillsRef = useRef();
	const experienceRef = useRef();
	const projectsRef = useRef();
	const certificationsRef = useRef();
	const extraRef = useRef();
	const finalizeRef = useRef();

	//! to scroll to a particular section
	const scrollToSection = (ref) => {
		formBodyRef.current.scrollTo({
			top: ref.current.offsetTop - 48,
			// 48 because gap from the top form div is 48px or 5rem
			behavior: "smooth",
		});
	};

	//! to scroll whenver the step number changes
	useEffect(() => {
		const scrollChanger = () => {
			switch (step) {
				case 1:
					scrollToSection(headerRef);
					break;
				case 2:
					scrollToSection(educationRef);
					break;
				case 3:
					scrollToSection(skillsRef);
					break;
				case 4:
					scrollToSection(experienceRef);
					break;
				case 5:
					scrollToSection(projectsRef);
					break;
				case 6:
					scrollToSection(certificationsRef);
					break;
				case 7:
					scrollToSection(extraRef);
					break;
				case 8:
					scrollToSection(finalizeRef);
					break;
				default:
					break;
			}
		};
		scrollChanger();
	}, [step]);

	return (
		<div className="editor w-full flex justify-center items-center">
			<div className="editor--container w-full h-[calc(100vh-5rem)] grid grid-cols-[600px_auto]">
				{/* Form */}
				<div className="flex flex-col overflow-auto">
					<FormSwitcher currentStep={step} setStep={setStep} />
					<Divider />
					<div
						className="relative section--padding py-12 w-full flex flex-col gap-12 overflow-auto"
						ref={formBodyRef}
					>
						<div ref={headerRef}>
							<Header />
						</div>
						<Divider />
						<div ref={educationRef}>
							<Education />
						</div>
						<Divider />
						<div ref={skillsRef}>
							<Skills />
						</div>
						<Divider />
						<div ref={experienceRef}>
							<Experience />
						</div>
						<Divider />
						<div ref={projectsRef}>
							<Projects />
						</div>
						<Divider />
						<div ref={certificationsRef}>
							<Certifications />
						</div>
						<Divider />
						<div ref={extraRef}>
							<Extra />
						</div>
						<Divider />
						<div ref={finalizeRef}>
							<Finalize />
						</div>
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
