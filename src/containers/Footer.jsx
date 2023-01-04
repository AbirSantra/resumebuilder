import React from "react";
import CompanyLogo from "../components/CompanyLogo";

const Footer = () => {
	return (
		<footer className="footer w-full flex flex-col justify-center items-center bg-black-one text-white-one">
			<div className="footer--container section flex justify-center items-center py-20">
				<div className="footer--content w-full flex justify-between items-start">
					<div className="footer--details flex flex-col justify-start items-start gap-4">
						<CompanyLogo />
						<p className="max-w-[300px] font-light">
							A super fast and free online resume builder for students.
						</p>
						<p className="max-w-[300px] text-sm text-grey-three">
							Resu.me &copy; {new Date().getFullYear()}. All rights reserved.
						</p>
						<div className="max-w-[300px] text-sm text-grey-three">
							{" "}
							Icon made by{" "}
							<a
								href="https://www.flaticon.com/authors/freepik"
								title="Freepik"
							>
								{" "}
								Freepik{" "}
							</a>{" "}
							from{" "}
							<a href="https://www.flaticon.com/" title="Flaticon">
								www.flaticon.com
							</a>
						</div>
					</div>
					<div className="footer--links flex justify-center items-start gap-16">
						<div className="flex flex-col justify-start items-start">
							<h4 className="mb-2">Company</h4>
							<p className="text-sm text-grey-three">Terms</p>
							<p className="text-sm text-grey-three">Privacy Policy</p>
							<p className="text-sm text-grey-three">Contact</p>
						</div>
						<div className="flex flex-col justify-start items-start">
							<h4 className="mb-2">Site Map</h4>
							<p className="text-sm text-grey-three">Home</p>
							<p className="text-sm text-grey-three">About</p>
							<p className="text-sm text-grey-three">Examples</p>
							<p className="text-sm text-grey-three">Reviews</p>
						</div>
						<div className="flex flex-col justify-start items-start">
							<h4 className="mb-2">Connect</h4>
							<p className="text-sm text-grey-three">Facebook</p>
							<p className="text-sm text-grey-three">Twitter</p>
							<p className="text-sm text-grey-three">Linkedin</p>
						</div>
					</div>
				</div>
			</div>
			<div className="footer--divider h-[1px] w-full bg-grey-one"></div>
			<div className="footer--message py-4 text-grey-three text-sm">
				Crafted with ❤️ by Team INCOGNI70
			</div>
		</footer>
	);
};

export default Footer;
