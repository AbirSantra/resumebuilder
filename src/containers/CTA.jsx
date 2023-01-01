import React from "react";
import { HiArrowRight } from "react-icons/hi";

const CTA = () => {
	return (
		<div className="cta w-full flex justify-center items-center py-28 bg-primary">
			<div className="cta--container section flex justify-center items-center flex-col gap-8">
				<h1 className="cta--headline text-center font-extrabold text-white-two text-6xl">
					Build your resume now <br /> and get that dream job today!
				</h1>
				<button className="btn primary--btn--inverted">
					Get Started now <HiArrowRight />
				</button>
				<p className="cta--subheading text-white-two font-light text-sm">
					It's completely free. No credit card required.
				</p>
			</div>
		</div>
	);
};

export default CTA;
