import React from "react";
import Feature from "../components/Feature";
import SectionHeader from "../components/SectionHeader";
import {
	MdMoneyOff,
	MdOutlineDashboardCustomize,
	MdShare,
} from "react-icons/md";
import { BsLightningCharge } from "react-icons/bs";

const WhyChooseUs = () => {
	return (
		<div className="whychooseus w-full flex justify-center items-center py-28">
			<div className="whychooseus--container section flex flex-col justify-center items-center gap-16">
				<div className="whychooseus--header w-full flex justify-center items-center">
					<SectionHeader
						heading="Why choose Resu.me?"
						subheading="Building a resume can be frustrating. Let us do the hard part!"
					/>
				</div>
				<div className="whychooseus--features mt-8 grid grid-cols-2 gap-x-16  gap-y-24">
					<Feature
						icon={<MdMoneyOff />}
						label="Free Forever"
						desc="Resu.me is and always will be 100% free. Create an account for free. No credit card required."
					/>
					<Feature
						icon={<BsLightningCharge />}
						label="Fast and Easy to Use"
						desc="Resu.me makes creating a resume lightning fast. It is as easy as filling up a form and a few clicks!"
					/>
					<Feature
						icon={<MdOutlineDashboardCustomize />}
						label="Customizable"
						desc="Customize your resume using our collection of templates and accents colors. Make your resume unique!"
					/>
					<Feature
						icon={<MdShare />}
						label="Shareable"
						desc="Share your resume as an online page or download and export it as a pdf file. Resu.me gives you both options."
					/>
				</div>
			</div>
		</div>
	);
};

export default WhyChooseUs;
