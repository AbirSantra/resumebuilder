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
				className="section--icon cursor-pointer text-lg text-grey-four hover:text-primary duration-200 ease-in-out"
				onClick={() => setStep(1)}
			>
				<FaUserAlt />
			</div>
			<div
				className="section--icon cursor-pointer text-lg text-grey-four hover:text-primary duration-200 ease-in-out"
				onClick={() => setStep(2)}
			>
				<FaUserGraduate />
			</div>
			<div
				className="section--icon cursor-pointer text-lg text-grey-four hover:text-primary duration-200 ease-in-out"
				onClick={() => setStep(3)}
			>
				<FaLayerGroup />
			</div>
			<div
				className="section--icon cursor-pointer text-lg text-grey-four hover:text-primary duration-200 ease-in-out"
				onClick={() => setStep(4)}
			>
				<FaBriefcase />
			</div>
			<div
				className="section--icon cursor-pointer text-lg text-grey-four hover:text-primary duration-200 ease-in-out"
				onClick={() => setStep(5)}
			>
				<FaRocket />
			</div>
			<div
				className="section--icon cursor-pointer text-lg text-grey-four hover:text-primary duration-200 ease-in-out"
				onClick={() => setStep(6)}
			>
				<GoVerified />
			</div>
			<div
				className="section--icon cursor-pointer text-lg text-grey-four hover:text-primary duration-200 ease-in-out"
				onClick={() => setStep(7)}
			>
				<FaShapes />
			</div>
			<div
				className="section--icon cursor-pointer text-lg text-grey-four hover:text-primary duration-200 ease-in-out"
				onClick={() => setStep(8)}
			>
				<FaPalette />
			</div>
		</div>
	);
};

export default FormSwitcher;
