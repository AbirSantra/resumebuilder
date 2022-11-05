import React from "react";
import { useSelector } from "react-redux";
// import "./Resume.css";

const Resume = () => {
	// get the resume data state
	const data = useSelector((state) => state.resume.data);

	return (
		<div className="resume w-full max-w-[595px] self-center border border-grey-four">
			<div
				className="resume--container w-full min-h-[842px] p-4 px-4 flex justify-start items-start flex-col gap-4"
				id="resume"
			>
				{/* Header */}
				<div className="header--container w-full flex justify-between items-center">
					{/* Name and Profession */}
					<div className="header flex flex-col">
						<h1 className="name font-bold text-2xl">
							{data.header.firstname} {data.header.lastname}
						</h1>
						<p className="text-xs text-grey-three">{data.header.profession}</p>
					</div>

					{/* Contact */}
					<div className="contact--container text-[0.6rem] text-grey-two font-bold flex flex-col items-end">
						<p className="contact flex gap-2">
							Address:
							<span className="font-normal">
								{data.header.city}, {data.header.country} -{data.header.pincode}
							</span>
						</p>
						<p className="contact flex gap-2">
							Phone:
							<span className="font-normal">{data.header.phone}</span>
						</p>
						<p className="contact flex gap-2">
							Email:
							<span className="font-normal">{data.header.email}</span>
						</p>
						<p className="contact flex gap-2">
							Website:
							<span className="font-normal">{data.header.website}</span>
						</p>
						<p className="contact flex gap-2">
							Linkedin Profile:
							<span className="font-normal">{data.header.linkedin}</span>
						</p>
					</div>
				</div>

				{/* Skills */}
				<div className="container w-full flex flex-col justify-start items-start gap-1">
					<div className="section--title font-bold text-grey-three">Skills</div>
					<div className="divider w-full h-[1px] bg-grey-four"></div>
					<div className="skills--content mt-1 text-[0.7rem] flex justify-start items-start gap-2">
						{data.skills.map((skill) => (
							<div className="skill--item">{skill}</div>
						))}
					</div>
				</div>

				{/* Experience */}
				<div className="w-full flex flex-col justify-start items-start gap-1">
					<div className="font-bold text-grey-three">Experience</div>
					<div className="divider w-full h-[1px] bg-grey-four"></div>
					<div className="mt-1 text-[0.7rem] flex flex-col justify-start items-start gap-2">
						{data.experience.map((item) => (
							<div className="w-full flex flex-col justify-start items-start">
								<div className="font-bold text-xs">
									{item.position}, {item.employer}
								</div>
								<div className="text-grey-three text-[0.6rem] font-semibold">
									{item.startdate} to {item.enddate}
								</div>
								<div className="experience--description text-[0.6rem]">
									{item.description}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Projects */}
				<div className="w-full flex flex-col justify-start items-start gap-1">
					<div className="font-bold text-grey-three">Projects</div>
					<div className="divider w-full h-[1px] bg-grey-four"></div>
					<div className="mt-1 text-[0.7rem] flex flex-col justify-start items-start gap-2">
						{data.projects.map((item) => (
							<div className="w-full flex flex-col justify-start items-start">
								<div className="font-bold text-xs flex gap-4">
									{item.name}{" "}
									<span className="font-bold text-[0.6rem] underline">
										Link
									</span>
								</div>
								<div className="text-grey-three text-[0.6rem] font-semibold">
									{item.startdate} to {item.enddate}
								</div>
								<div className="experience--description text-[0.6rem]">
									{item.description}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Education */}
				<div className="w-full flex flex-col justify-start items-start gap-1">
					<div className="font-bold text-grey-three">Education</div>
					<div className="divider w-full h-[1px] bg-grey-four"></div>
					<div className="mt-1 text-[0.7rem] flex flex-col justify-start items-start gap-2">
						{data.education.map((item) => (
							<div className="w-full flex flex-col justify-start items-start">
								<div className="font-bold text-xs flex justify-center items-center gap-4">
									{item.institute}{" "}
									<div className="text-grey-three text-[0.6rem] font-semibold">
										{item.startdate} to {item.enddate}
									</div>
								</div>
								<span className="font-semibold text-grey-three text-[0.6rem]">
									{item.degree}
								</span>

								<div className="experience--description text-[0.6rem]">
									Score: {item.score}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Certifications */}
				<div className="w-full flex flex-col justify-start items-start gap-1">
					<div className="font-bold text-grey-three">Certifications</div>
					<div className="divider w-full h-[1px] bg-grey-four"></div>
					<div className="mt-1 text-[0.7rem] flex flex-col justify-start items-start gap-2">
						{data.certifications.map((item) => (
							<div className="w-full flex flex-col justify-start items-start">
								<div className="font-bold text-xs flex justify-center items-center gap-4">
									{item.certificationname}{" "}
								</div>
								<div className="text-grey-three text-[0.6rem] font-semibold flex gap-4">
									Issuer: {item.organization}{" "}
									<span className="font-semibold text-grey-three text-[0.6rem]">
										Issue Date: {item.date}
									</span>
								</div>

								<div className="experience--description text-[0.6rem]">
									Link: {item.url}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Extra Sections */}
				<div className="w-full flex flex-col justify-start items-start gap-4">
					{data.extra.map((item) => (
						<div className="w-full">
							<div className="font-bold text-grey-three">{item.title}</div>
							<div className="divider w-full h-[1px] bg-grey-four"></div>
							<div className="mt-1 text-[0.7rem]">{item.description}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Resume;
