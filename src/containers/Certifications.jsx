import React, { useEffect, useState } from "react";
import { FiPlusCircle, FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import InputControl from "../components/InputControl";
import { setCertifications } from "../redux/resumeSlice";
import FormSectionHeader from "../components/FormSectionHeader";
import { GoVerified } from "react-icons/go";

const Certifications = ({ isNew, setStep }) => {
	const dispatch = useDispatch();

	// get the resume data state
	const certificationData = useSelector(
		(state) => state.resume.data.certifications
	);

	// to store the certifications
	const [certificates, setCertificates] = useState(certificationData);

	//! to refresh the initial values of the certifications
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		setCertificates(certificationData);
	}, [certificationData]);

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

	//! to update global state
	const handleEdit = () => {
		dispatch(setCertifications(certificates));
	};

	//! to update the global state whenever certifications are added or deleted
	useEffect(() => {
		handleEdit();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [certificates]);

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
		handleEdit();
	};

	return (
		<div className="certificates w-full">
			<div className="certificates--container w-full flex flex-col justify-start items-start gap-8">
				{/* Form Header */}
				<FormSectionHeader
					icon={<GoVerified size={22} />}
					title="Certifications"
					subtitle="Showcase your various certifications here."
				/>

				{/* Certificates List */}
				<div className="certificates--list w-full flex flex-col justify-start items-start gap-4">
					{certificates.map((certificate) => (
						<div
							className="certificates--card w-full flex justify-between items-center rounded-lg p-4 border border-grey-four"
							key={certificate.certificationname}
						>
							<div className="card--content w-full flex flex-col justify-start items-start ">
								<p className="card--name font-medium text-sm">
									{certificate.certificationname}
								</p>
								<p className="card--url text-grey-three text-xs ">
									{certificate.organization}
								</p>
							</div>
							<div
								className="card--actions flex justify-center items-center gap-2 text-sm cursor-pointer hover:text-primary duration-200 ease-in-out"
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
								<FiTrash2 size={22} />
							</div>
						</div>
					))}
					{!form && (
						<div
							className="w-full flex justify-between items-center rounded-lg p-4 px-6 border border-grey-four cursor-pointer hover:text-primary hover:border-primary duration-300 ease-in-out"
							onClick={openForm}
						>
							<div className="card--content w-full  flex justify-center items-center gap-2 ">
								<FiPlusCircle size={20} />
								<p className="font-medium text-sm">Add Certification</p>
							</div>
						</div>
					)}
				</div>

				{/* New Certificate form */}
				{form && (
					<div className="certificates--new w-full flex flex-col justify-start items-start gap-4 border border-grey-four rounded-lg p-4 ">
						<h1 className="project--title font-medium mb-4 ">
							Add New Certificate
						</h1>
						<div className="certificates--form w-full  grid grid-cols-1 gap-x-4 gap-y-8 ">
							<InputControl
								type="text"
								label="Certification Name"
								placeholder="Complete Web Development Bootcamp"
								hint="Enter the name of the course or the event for which you received this certificate"
								value={certificationname}
								onChange={nameChange}
							/>
							<InputControl
								type="text"
								label="Issuing Organization"
								placeholder="Udemy"
								hint="Enter the name of the organization or the event or the person who issued you this certificate"
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
								hint="Upload the certificate to Google Drive and add the link here. If it is a physical certificate, then scan it and then upload it to Google Drive."
								value={url}
								onChange={urlChange}
							/>
						</div>
						<button
							className="btn primary--btn text-sm mt-4"
							onClick={addCertification}
						>
							<FiPlusCircle size={18} /> Add
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Certifications;
