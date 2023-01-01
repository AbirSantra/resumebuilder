import React from "react";
import { HiArrowRight } from "react-icons/hi";

const ImageContentContainer = ({ variant, image, stepnum, heading, desc }) => {
	if (variant === "left") {
		return (
			<div className="w-full flex justify-center items-center gap-16">
				<div className="flex-1 flex justify-end items-center">
					<div className="w-[500px] h-[350px] rounded-lg bg-slate-50 flex justify-center items-center">
						{/* <img src="" alt="" /> */}
						Image
					</div>
				</div>
				<div className="flex-1 flex flex-col justify-center items-start">
					<p className="font-medium text-primary">Step {stepnum}</p>
					<h3 className="font-bold text-[2rem]">{heading}</h3>
					<p className="font-light text-grey-three text-lg w-full max-w-[500px] text-left">
						{desc}
					</p>
					<button className="btn primary--btn mt-4">
						Get Started now <HiArrowRight />
					</button>
				</div>
			</div>
		);
	} else if (variant === "right") {
		return (
			<div className="w-full flex justify-center items-center gap-16">
				<div className="flex-1 flex flex-col justify-center items-end">
					<p className="font-medium text-primary">Step {stepnum}</p>
					<h3 className="font-bold text-[2rem]">{heading}</h3>
					<p className="font-light text-grey-three text-lg w-full max-w-[500px] text-right">
						{desc}
					</p>
					<button className="btn primary--btn mt-4">
						Get Started now <HiArrowRight />
					</button>
				</div>
				<div className="flex-1 flex justify-start items-center">
					<div className="w-[500px] h-[350px] rounded-lg bg-slate-50 flex justify-center items-center">
						{/* <img src="" alt="" /> */}
						Image
					</div>
				</div>
			</div>
		);
	}
};

export default ImageContentContainer;
