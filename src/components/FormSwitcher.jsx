import React from "react";
import {
	FaUserAlt,
	FaUserGraduate,
	FaBriefcase,
	FaLayerGroup,
	FaRocket,
	FaShapes,
	FaPalette,
} from "react-icons/fa";
import { GoVerified } from "react-icons/go";

const FormSwitcher = ({ setStep, currentStep }) => {
	return (
		<div className="w-full h-20 section--padding py-6 flex justify-between items-center">
			<div
				className={
					currentStep === 1
						? "section--icon cursor-pointer text-lg text-primary"
						: "section--icon cursor-pointer text-lg text-grey-four"
				}
				onClick={() => setStep(1)}
			>
				<FaUserAlt />
			</div>
			<div
				className={
					currentStep === 2
						? "section--icon cursor-pointer text-lg text-primary"
						: "section--icon cursor-pointer text-lg text-grey-four"
				}
				onClick={() => setStep(2)}
			>
				<FaUserGraduate />
			</div>
			<div
				className={
					currentStep === 3
						? "section--icon cursor-pointer text-lg text-primary"
						: "section--icon cursor-pointer text-lg text-grey-four"
				}
				onClick={() => setStep(3)}
			>
				<FaLayerGroup />
			</div>
			<div
				className={
					currentStep === 4
						? "section--icon cursor-pointer text-lg text-primary"
						: "section--icon cursor-pointer text-lg text-grey-four"
				}
				onClick={() => setStep(4)}
			>
				<FaBriefcase />
			</div>
			<div
				className={
					currentStep === 5
						? "section--icon cursor-pointer text-lg text-primary"
						: "section--icon cursor-pointer text-lg text-grey-four"
				}
				onClick={() => setStep(5)}
			>
				<FaRocket />
			</div>
			<div
				className={
					currentStep === 6
						? "section--icon cursor-pointer text-lg text-primary"
						: "section--icon cursor-pointer text-lg text-grey-four"
				}
				onClick={() => setStep(6)}
			>
				<GoVerified />
			</div>
			<div
				className={
					currentStep === 7
						? "section--icon cursor-pointer text-lg text-primary"
						: "section--icon cursor-pointer text-lg text-grey-four"
				}
				onClick={() => setStep(7)}
			>
				<FaShapes />
			</div>
			<div
				className={
					currentStep === 8
						? "section--icon cursor-pointer text-lg text-primary"
						: "section--icon cursor-pointer text-lg text-grey-four"
				}
				onClick={() => setStep(8)}
			>
				<FaPalette />
			</div>
		</div>
	);
};

export default FormSwitcher;
