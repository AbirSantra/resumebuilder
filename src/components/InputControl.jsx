import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

const InputControl = ({ label, textarea, hint, ...props }) => {
	return textarea ? (
		<div className="w-full text-grey-three focus-within:text-primary  flex justify-center items-start flex-col gap-1 col-span-2">
			<div className="flex justify-center items-center gap-2">
				<label className="text-sm  ml-1">{label}</label>
				{hint ? (
					<div className="relative">
						<FaQuestionCircle className="peer cursor-pointer" />
						<span className="absolute hidden peer-hover:flex top-0 left-8 w-[200px] bg-grey-one text-white-one text-sm rounded-lg p-4">
							{hint}
						</span>
					</div>
				) : null}
			</div>
			<div className=" w-full flex justify-center items-center px-4 py-3 rounded-md border border-grey-four focus-within:border-primary">
				<textarea
					className="w-full border-none outline-none bg-transparent text-black-two font-medium text-base"
					{...props}
				/>
			</div>
		</div>
	) : (
		<div className="w-full text-grey-three focus-within:text-primary  flex justify-center items-start flex-col gap-1">
			<div className="flex justify-center items-center gap-2">
				<label className="text-sm  ml-1">{label}</label>
				{hint ? (
					<div className="relative">
						<FaQuestionCircle className="peer cursor-pointer" />
						<span className="absolute hidden peer-hover:flex top-0 left-8 w-[200px] bg-grey-one text-white-one text-sm rounded-lg p-4">
							{hint}
						</span>
					</div>
				) : null}
			</div>
			<div className=" w-full flex justify-center items-center px-4 py-3 rounded-md border border-grey-four focus-within:border-primary">
				<input
					className="w-full border-none outline-none bg-transparent text-black-two font-medium text-base"
					{...props}
				/>
			</div>
		</div>
	);
};

export default InputControl;
