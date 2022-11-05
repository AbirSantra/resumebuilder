import React from "react";

const InputControl = ({ label, textarea, ...props }) => {
	return textarea ? (
		<div className="w-full text-grey-three focus-within:text-primary  flex justify-center items-start flex-col gap-1 col-span-2">
			<label className="text-sm  ml-1">{label}</label>
			<div className=" w-full flex justify-center items-center px-4 py-3 rounded-md border border-grey-four focus-within:border-primary">
				<textarea
					className="w-full border-none outline-none bg-transparent text-black-two font-medium text-base"
					{...props}
				/>
			</div>
		</div>
	) : (
		<div className="w-full text-grey-three focus-within:text-primary  flex justify-center items-start flex-col gap-1">
			<label className="text-sm  ml-1">{label}</label>
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
