import React from "react";
import { useSelector } from "react-redux";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt, FaEnvelope, FaLink, FaLinkedin } from "react-icons/fa";
import Divider from "../components/Divider";

const Resume = () => {
	// get the resume data state
	const data = useSelector((state) => state.resume.data);

	return (
		<div className="resume w-full max-w-[595px] min-h-[842px] bg-white self-center border border-grey-four">
			<div
				className="resume--container w-full  p-4 px-4 flex justify-start items-start flex-col gap-4"
				id="resume"
			>
				{/* Header */}
				<div className="header flex flex-col gap-4">
					<div>
						<h1 className="name font-bold text-2xl">
							{data.header.firstname} {data.header.lastname}
						</h1>
						<p className="text-sm text-primary">{data.header.profession}</p>
					</div>
					{/* Contact */}
					<div className="contact--container font-bold w-full flex flex-wrap gap-y-2 gap-4 text-[0.6rem] text-primary">
						<p className="contact flex justify-center items-center gap-2">
							<MdLocationPin />
							<span className="font-medium text-grey-one">
								{data.header.city}, {data.header.country} -{data.header.pincode}
							</span>
						</p>
						<p className="contact flex justify-center items-center gap-2">
							<FaPhoneAlt />
							<span className="font-medium text-grey-one">
								{data.header.phone}
							</span>
						</p>
						<p className="contact flex justify-center items-center gap-2">
							<FaEnvelope />
							<span className="font-medium text-grey-one">
								{data.header.email}
							</span>
						</p>
						<p className="contact flex justify-center items-center gap-2">
							<FaLink />
							<span className="font-medium text-grey-one">
								{data.header.website}
							</span>
						</p>
						<p className="contact flex justify-center items-center gap-2">
							<FaLinkedin />
							<span className="font-medium text-grey-one">
								{data.header.linkedin}
							</span>
						</p>
					</div>
				</div>

				{/* Skills */}
				<div className="container w-full flex flex-col justify-start items-start gap-1">
					<div className="section--title font-bold text-primary uppercase font-Ubuntu text-xs">
						Skills
					</div>
					<Divider />
					<div className="skills--content mt-1 text-[0.7rem] flex justify-start items-start flex-wrap gap-2">
						{data.skills.map((skill) => (
							<div className="skill--item bg-primary-light px-2 font-semibold rounded-md text-white font-Ubuntu">
								{skill}
							</div>
						))}
					</div>
				</div>

				{/* Experience */}
				<div className="w-full flex flex-col justify-start items-start gap-1">
					<div className="section--title font-bold text-primary uppercase font-Ubuntu text-xs">
						Experience
					</div>
					<Divider />
					<div className="mt-1 text-[0.7rem] flex flex-col justify-start items-start gap-2">
						{data.experience.map((item) => (
							<div className="w-full flex flex-col justify-start items-start">
								<div className="font-bold text-xs">
									{item.position}, {item.employer}
								</div>
								<div className="text-primary text-[0.6rem] font-semibold font-Ubuntu">
									({item.startdate} to {item.enddate})
								</div>
								<div className="experience--description text-[0.6rem] font-Ubuntu text-grey-three">
									{item.description}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Projects */}
				<div className="w-full flex flex-col justify-start items-start gap-1">
					<div className="section--title font-bold text-primary uppercase font-Ubuntu text-xs">
						Projects
					</div>
					<Divider />
					<div className="mt-1 text-[0.7rem] flex flex-col justify-start items-start gap-2">
						{data.projects.map((item) => (
							<div className="w-full flex flex-col justify-start items-start">
								<div className="font-bold text-xs flex gap-4">
									{item.name}{" "}
									<span className="font-bold text-[0.6rem] underline">
										Link
									</span>
								</div>
								<div className="text-primary text-[0.6rem] font-semibold font-Ubuntu">
									({item.startdate} to {item.enddate})
								</div>
								<div className="experience--description text-[0.6rem] font-Ubuntu text-grey-three">
									{item.description}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Education */}
				<div className="w-full flex flex-col justify-start items-start gap-1">
					<div className="section--title font-bold text-primary uppercase font-Ubuntu text-xs">
						Education
					</div>
					<Divider />
					<div className="mt-1 text-[0.7rem] flex flex-col justify-start items-start gap-2">
						{data.education.map((item) => (
							<div className="w-full flex flex-col justify-start items-start">
								<div className="font-bold text-xs flex justify-center items-center gap-4">
									{item.institute}{" "}
									<div className="text-grey-three text-[0.6rem] font-semibold font-Ubuntu">
										({item.startdate} to {item.enddate})
									</div>
								</div>
								<span className="font-semibold text-primary text-[0.6rem]">
									{item.degree}
								</span>

								<div className="experience--description text-[0.6rem] font-Ubuntu">
									Score: {item.score}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Certifications */}
				<div className="w-full flex flex-col justify-start items-start gap-1">
					<div className="section--title font-bold text-primary uppercase font-Ubuntu text-xs">
						Certifications
					</div>
					<div className="divider w-full h-[1px] bg-grey-four"></div>
					<div className="mt-1 text-[0.7rem] flex flex-col justify-start items-start gap-2">
						{data.certifications.map((item) => (
							<div className="w-full flex flex-col justify-start items-start">
								<div className="font-bold text-xs flex justify-center items-center gap-4">
									{item.certificationname}{" "}
								</div>
								<div className="text-primary text-[0.6rem] font-semibold flex gap-4">
									Issuer: {item.organization}{" "}
									<span>Issued On: {item.date}</span>
								</div>

								<div className="experience--description text-[0.6rem] font-Ubuntu">
									Certificate Link: {item.url}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Extra Sections */}
				<div className="w-full flex flex-col justify-start items-start gap-4">
					{data.extra.map((item) => (
						<div className="w-full">
							<div className="section--title font-bold text-primary uppercase font-Ubuntu text-xs">
								{item.title}
							</div>
							<Divider />
							<div className="mt-1 text-[0.6rem]">{item.description}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Resume;
