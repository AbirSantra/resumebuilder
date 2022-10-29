import React from "react";
import Feature from "../components/Feature";
import SectionHeader from "../components/SectionHeader";
import freeIcon from "../images/flash.png";
import easyIcon from "../images/check.png";
import customIcon from "../images/equalizer.png";
import downloadIcon from "../images/downloads.png";

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
				<div className="whychooseus--features w-full flex justify-evenly items-center gap-4">
					<Feature icon={freeIcon} color="#e11d48" label="Completely Free" />
					<Feature icon={easyIcon} color="#65a30d" label="Easy to Use" />
					<Feature icon={customIcon} color="#0284c7" label="Customizable" />
					<Feature icon={downloadIcon} color="#7c3aed" label="PDF Download" />
				</div>
			</div>
		</div>
	);
};

export default WhyChooseUs;
