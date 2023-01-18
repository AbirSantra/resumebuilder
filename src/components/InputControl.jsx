import React from "react";
import { useState } from "react";
import { BiHide, BiShowAlt } from "react-icons/bi";
import { FaRegQuestionCircle, FaMagic } from "react-icons/fa";

const InputControl = ({ label, textarea, hint, type, generate, ...props }) => {
	// to store the show/hide password state
	const [showPass, setShowPass] = useState(type === "password" ? false : true);

	//! to toggle show/hide password state
	const toggleShowPass = () => {
		setShowPass((prev) => !prev);
	};

	//! to generate text
	// const handleGenerate = () => {
	// 	const query = textarea.value;
	// 	console.log(query);
	// };

	return (
		<div className="w-full text-grey-three focus-within:text-primary  flex justify-center items-start flex-col gap-1">
			<div
				className={
					textarea
						? "relative w-full flex justify-center items-start gap-2 px-4 py-3 rounded-md border border-grey-four focus-within:border-primary"
						: "relative w-full flex justify-center items-center gap-2 px-4 py-3 rounded-md border border-grey-four focus-within:border-primary "
				}
			>
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
				<label className="absolute left-1 -top-[10px] text-[11px] font-semibold bg-white px-1 text-slate-400 peer-focus:text-primary ml-1 uppercase">
					{label}
				</label>

				{/* Show Password icon */}
				{type === "password" ? (
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
						<FaRegQuestionCircle className="peer cursor-pointer" size={18} />
						<span className="absolute hidden z-10 peer-hover:flex bottom-6 right-6 w-[200px] bg-grey-one text-grey-four text-sm rounded-lg p-4 font-Ubuntu">
							{hint}
						</span>
					</div>
				) : null}

				{/* Generate */}
				{generate ? (
					<div
						className="ml-2 text-lg cursor-pointer hover:text-primary duration-300 ease-in-out"
						// onClick={handleGenerate}
					>
						<FaMagic />
					</div>
				) : null}
			</div>
		</div>
	);
};

export default InputControl;
