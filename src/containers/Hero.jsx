import React from "react";
import { HiArrowRight } from "react-icons/hi";
import heroImage from "../images/hero-img.png";
const Hero = () => {
	return (
		<div className="hero w-full min-h-[80vh] flex justify-center items-start  py-28">
			<div className="hero--container section relative flex justify-center items-center flex-col gap-16 text-center">
				<div className="hero--content flex justify-center items-center flex-col gap-8">
					<h1 className="hero--heading font-extrabold text-7xl">
						Build your professional <br /> resume in a matter of minutes
					</h1>
					<h2 className="hero--subheading font-medium text-grey-three">
						Resu.me makes creating & exporting resumes as easy as filling up a
						form
					</h2>
					<button className="btn primary--btn text-xl">
						Get Started Now <HiArrowRight size={18} />
					</button>
				</div>
				<div className="hero--image w-full max-w-[48rem] p-4">
					<img src={heroImage} alt="Stacked up resumes" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
