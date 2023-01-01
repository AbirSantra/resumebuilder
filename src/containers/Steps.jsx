import React from "react";
import ImageContentContainer from "../components/ImageContentContainer";
import SectionHeader from "../components/SectionHeader";

const Steps = () => {
	return (
		<div className="steps w-full flex justify-center items-center py-28">
			<div className="steps--container section flex flex-col justify-center items-center gap-16">
				<div className="steps--header w-full flex justify-center items-center">
					<SectionHeader
						heading="How it works"
						subheading="Perfect resume in 3 simple and easy steps!"
					/>
				</div>
				<div className="steps--content w-full flex flex-col justify-center items-center gap-32">
					<ImageContentContainer
						variant="left"
						stepnum="1"
						heading="Fill in your details"
						desc="Fill up the form with your details like bio, education, skills, experience, certifications, and projects."
					/>
					<ImageContentContainer
						variant="right"
						stepnum="2"
						heading="Select your style"
						desc="Choose a template, font and accent color to make your resume unique."
					/>
					<ImageContentContainer
						variant="left"
						stepnum="3"
						heading="Download your resume"
						desc="Download your resume in PDF format or view as an online page or mail it directly to your recruiter."
					/>
				</div>
			</div>
		</div>
	);
};

export default Steps;
