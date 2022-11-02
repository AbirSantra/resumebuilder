import React, { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import InputControl from "../components/InputControl";
import { setCertifications } from "../redux/resumeSlice";

const Certifications = ({ setStep }) => {
	const dispatch = useDispatch();

	// get the resume data state
	const headerData = useSelector((state) => state.resume.data.certifications);

	// to store the certifications
	const [certificates, setCertificates] = useState([]);

	// to refresh the initial values of the certifications
	useEffect(() => {
		setCertificates(headerData);
	}, [headerData]);

	// to store form open/close state
	const [form, setForm] = useState(false);

	// to store the form fields
	const [certificationname, setCertificationName] = useState("");
	const [organization, setOrganization] = useState("");
	const [date, setDate] = useState("");
	const [url, setUrl] = useState("");

	//! to handle form field changes
	const nameChange = (e) => {
		setCertificationName(e.target.value);
	};
	const urlChange = (e) => {
		setUrl(e.target.value);
	};
	const dateChange = (e) => {
		setDate(e.target.value);
	};
	const organizationChange = (e) => {
		setOrganization(e.target.value);
	};

	//! to set form
	const openForm = () => {
		setForm(true);
	};

	//! to reset form
	const resetForm = () => {
		setCertificationName("");
		setUrl("");
		setDate("");
		setUrl("");
		setForm(false);
	};

	//! to add new certification
	const addCertification = () => {
		const newCertifications = [
			...certificates,
			{
				certificationname: certificationname,
				url: url,
				date: date,
				organization: organization,
			},
		];
		setCertificates(newCertifications);
		resetForm();
	};

	//! to handle back button
	const handleBack = (e) => {
		e.preventDefault();
		setStep((prev) => prev - 1);
	};

	//! to handle next button
	const handleNext = (e) => {
		e.preventDefault();
		dispatch(setCertifications(certificates));
		setStep((prev) => prev + 1);
	};

	return (
		<div className="certificates w-full">
			<div className="certificates--container w-full min-h-[calc(100vh-5rem)] flex flex-col justify-start items-start gap-8">
				<div className="header--heading">
					<h1 className="header--title font-bold text-3xl text-primary">
						Certifications
					</h1>
					<p className="header--subheading text-grey-three">
						Add your projects. They can be personal projects or group projects.
						Be sure to mention your learning from each project and your
						responsibilities in case of group projects
					</p>
				</div>

				<div className="certificates--list w-full flex flex-col justify-start items-start gap-4">
					{certificates.map((certificate) => (
						<div
							className="certificates--card w-full flex justify-between items-center rounded-lg p-4 px-6 border border-grey-four"
							key={certificate.certificationname}
						>
							<div className="card--content w-full flex flex-col justify-start items-start ">
								<p className="card--name font-semibold text-lg">
									{certificate.certificationname}
								</p>
								<p className="card--url text-grey-three text-sm ">
									Issue Date: {certificate.date}
								</p>
								<p className="card--url text-grey-three text-sm ">
									Issuing Organization: {certificate.organization}
								</p>
							</div>
							<div
								className="card--actions flex justify-center items-center gap-2 text-sm cursor-pointer hover:text-primary"
								onClick={() => {
									const newList = [...certificates];
									newList.splice(
										newList.findIndex(
											(item) =>
												item.certificationname === certificate.certificationname
										),
										1
									);
									setCertificates(newList);
								}}
							>
								<FiTrash2 size={24} />
							</div>
						</div>
					))}
				</div>
				{!form && certificates.length !== 0 && (
					<div
						className="certificates--card w-full flex justify-between items-center rounded-lg p-4 px-6 border border-grey-four cursor-pointer hover:text-primary hover:border-primary duration-300 ease-in-out"
						onClick={openForm}
					>
						<div className="card--content w-full flex flex-col justify-start items-start ">
							<p className="font-semibold ">+ Add Certification</p>
						</div>
					</div>
				)}
				{(form || certificates.length === 0) && (
					<div className="certificates--new w-full flex flex-col justify-start items-start gap-4 border border-grey-four rounded-lg p-8 ">
						<h1 className="certificates--title font-semibold text-lg">
							Add New Certificate
						</h1>
						<div className="certificates--form w-full  grid grid-cols-2 gap-x-4 gap-y-8 ">
							<InputControl
								type="text"
								label="Certification Name"
								placeholder="e.g Complete Web Development Bootcamp"
								value={certificationname}
								onChange={nameChange}
							/>
							<InputControl
								type="text"
								label="Issuing Organization"
								value={organization}
								onChange={organizationChange}
							/>

							<InputControl
								type="date"
								label="Issue Date"
								value={date}
								onChange={dateChange}
							/>
							<InputControl
								type="text"
								label="Certificate Link"
								value={url}
								onChange={urlChange}
							/>
						</div>
						<button
							className="btn secondary--btn mt-4"
							onClick={addCertification}
						>
							+ Add Certificate
						</button>
					</div>
				)}

				<div className="projects--buttons w-full flex justify-between items-center">
					<button className="prev btn secondary--btn" onClick={handleBack}>
						Back
					</button>
					<button className="next btn primary--btn" onClick={handleNext}>
						Next: Extra Section
					</button>
				</div>
			</div>
		</div>
	);
};

export default Certifications;
