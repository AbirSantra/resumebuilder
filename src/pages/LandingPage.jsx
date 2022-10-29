import React from "react";
import Hero from "../containers/Hero";
import WhyChooseUs from "../containers/WhyChooseUs";
import Steps from "../containers/Steps";
import CTA from "../containers/CTA";

const LandingPage = () => {
	return (
		<div>
			<Hero />
			<WhyChooseUs />
			<Steps />
			<CTA />
		</div>
	);
};

export default LandingPage;
