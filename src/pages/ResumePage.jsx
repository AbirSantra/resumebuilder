import React from "react";
import { useParams } from "react-router-dom";
import { useGetResumeQuery } from "../api/resumeApiSlice";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt, FaEnvelope, FaLink, FaLinkedin } from "react-icons/fa";
import Divider from "../components/Divider";

const ResumePage = () => {
	// to store the id of the target resume
	const { id } = useParams();

	// fetch the resume data
	const { data: resumeData, isLoading } = useGetResumeQuery(id);

	// console.log(resumeData?.data);

	const data = resumeData?.data;

	return isLoading ? (
		<div>Loading Resume</div>
	) : (
		<div className="resume w-full section border border-grey-four">
			<div
				className="resume--container w-full py-16 flex justify-start items-start flex-col gap-8"
				id="resume"
			>
				{/* Header */}
				<div className="header flex flex-col gap-4">
					<div>
						<h1 className="name font-bold text-4xl">
							{data.header.firstname} {data.header.lastname}
						</h1>
						<p className="text-xl text-primary">{data.header.profession}</p>
					</div>
					{/* Contact */}
					<div className="contact--container font-bold w-full flex flex-wrap gap-y-2 gap-4 text-sm text-primary">
						<p className="contact flex justify-center items-center gap-2">
							<MdLocationPin size={18} />
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
							<FaLinkedin size={16} />
							<span className="font-medium text-grey-one">
								{data.header.linkedin}
							</span>
						</p>
					</div>
				</div>

				{/* Skills */}
				<div className="w-full flex flex-col justify-start items-start gap-1">
					<div className="section--title font-bold text-primary uppercase font-Ubuntu text-sm">
						Skills
					</div>
					<Divider />
					<div className="skills--content text-sm mt-2 flex justify-start items-start flex-wrap gap-2">
						{data.skills.map((skill) => (
							<div className="skill--item bg-primary-light py-1 px-3 font-medium text-white rounded-md">
								{skill}
							</div>
						))}
					</div>
				</div>

				{/* Experience */}
				<div className="w-full flex flex-col justify-start items-start gap-1">
					<div className="font-bold text-primary uppercase font-Ubuntu text-sm">
						Experience
					</div>
					<Divider />
					<div className="mt-4 flex flex-col justify-start items-start gap-4">
						{data.experience.map((item) => (
							<div className="w-full flex flex-col justify-start items-start gap-1">
								<div className="font-bold text-xl">
									{item.position}, {item.employer}
								</div>
								<div className="text-grey-three text-sm font-semibold">
									({item.startdate} to {item.enddate})
								</div>
								<div className="experience--description text-grey-three mt-2 font-Ubuntu">
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

export default ResumePage;
