import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

const InputControl = ({ label, textarea, hint, ...props }) => {
	return textarea ? (
		<div className="w-full text-grey-three focus-within:text-primary flex justify-center items-start flex-col gap-1 col-span-2">
			<div className="relative w-full flex justify-center items-start px-4 py-3 rounded-md border border-grey-four focus-within:border-primary">
				<textarea
					className="peer w-full border-none outline-none bg-transparent font-light text-black-two"
					{...props}
				/>
				<label className="absolute left-2 -top-[12px] text-[13px] font-medium bg-white px-1 text-neutral-500 peer-focus:text-primary ml-1">
					{label}
				</label>
				{hint ? (
					<div className="relative">
						<FaQuestionCircle className="peer cursor-pointer" />
						<span className="absolute hidden z-10 peer-hover:flex top-4 left-6 w-[200px] bg-grey-one text-grey-four text-sm rounded-lg p-4">
							{hint}
						</span>
					</div>
				) : null}
			</div>
		</div>
	) : (
		<div className="w-full text-grey-three focus-within:text-primary  flex justify-center items-start flex-col gap-1">
			<div className="relative w-full flex justify-center items-center px-4 py-3 rounded-md border border-grey-four focus-within:border-primary ">
				<input
					className="peer w-full border-none outline-none bg-transparent font-light text-black-two"
					{...props}
				/>
				<label className="absolute left-1 -top-[12px] text-[13px] font-medium bg-white px-1 text-neutral-500 peer-focus:text-primary ml-1">
					{label}
				</label>
				{hint ? (
					<div className="relative">
						<FaQuestionCircle className="peer cursor-pointer" />
						<span className="absolute hidden z-10 peer-hover:flex top-4 left-6 w-[200px] bg-grey-one text-grey-four text-sm rounded-lg p-4">
							{hint}
						</span>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default InputControl;
