import React from "react";
import { useState } from "react";
import { BiHide, BiShowAlt } from "react-icons/bi";
import { FaRegQuestionCircle } from "react-icons/fa";

const InputControl = ({ label, textarea, hint, password, type, ...props }) => {
	// to store the show/hide password state
	const [showPass, setShowPass] = useState(false);

	//! to toggle show/hide password state
	const toggleShowPass = () => {
		setShowPass((prev) => !prev);
	};

	return (
		<div
			className={
				"w-full text-grey-three focus-within:text-primary  flex justify-center items-start flex-col gap-1"
			}
		>
			<div className="relative w-full flex justify-center items-center px-4 py-3 rounded-md border border-grey-four focus-within:border-primary ">
				{/* Input Area */}
				{textarea ? (
					<textarea
						className="peer w-full border-none outline-none bg-transparent font-light text-black-two"
						{...props}
					/>
				) : (
					<input
						className="peer w-full border-none outline-none bg-transparent font-light text-black-two placeholder:text-sm "
						type={showPass ? "text" : "password"}
						{...props}
					/>
				)}

				{/* Input Label */}
				<label className="absolute left-1 -top-[12px] text-[13px] font-medium bg-white px-1 text-neutral-500 peer-focus:text-primary ml-1">
					{label}
				</label>

				{/* Show Password icon */}
				{password ? (
					<div
						className="text-xl text-grey-three cursor-pointer"
						onClick={toggleShowPass}
					>
						{showPass ? <BiHide /> : <BiShowAlt />}
					</div>
				) : null}

				{/* Hint ToolTip */}
				{hint ? (
					<div className="relative">
						<FaRegQuestionCircle className="peer cursor-pointer" />
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
