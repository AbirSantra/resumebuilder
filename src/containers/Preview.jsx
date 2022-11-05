import React from "react";
import Resume from "./Resume";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useSelector } from "react-redux";
import {
	useCreateResumeMutation,
	useUpdateResumeMutation,
} from "../api/resumeApiSlice";
import { selectCurrentUser } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Preview = ({ id, isNew, setStep }) => {
	const navigate = useNavigate();

	// get the resume data state
	const data = useSelector((state) => state.resume);

	//get the current user from store
	const currentUserId = useSelector(selectCurrentUser);

	// redux actions
	const [createResume, { isLoading }] = useCreateResumeMutation();
	const [updateResume, { isLoading: isUpdating }] = useUpdateResumeMutation();

	// resume data
	const resumeData = {
		_id: data._id,
		user: data.user,
		name: data.name,
		share: data.share,
		data: {
			header: data.data.header,
			experience: [...data.data.experience],
			education: [...data.data.education],
			skills: [...data.data.skills],
			projects: [...data.data.projects],
			certifications: [...data.data.certifications],
			extra: [...data.data.extra],
		},
		template: data.template,
	};

	//! to download resume
	const downloadResume = () => {
		const component = document.getElementById("resume");
		html2canvas(component, { scale: "5" })
			.then((canvas) => {
				var imgData = canvas.toDataURL("image/png");
				var imgWidth = 210;
				var pageHeight = 295;
				var imgHeight = (canvas.height * imgWidth) / canvas.width;
				var heightLeft = imgHeight;

				var doc = new jsPDF("p", "mm");
				var position = 0;

				doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
				heightLeft -= pageHeight;

				while (heightLeft >= 0) {
					position = heightLeft - imgHeight;
					doc.addPage();
					doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
					heightLeft -= pageHeight;
				}
				doc.save(`${data.name}.pdf`);
			})
			.catch((error) => console.log(error));
	};

	//! to handle save
	const saveResume = async (e) => {
		e.preventDefault();
		if (isNew) {
			try {
				await createResume({ ...data, user: currentUserId._id }).unwrap();
				downloadResume();
				navigate("/dashboard");
			} catch (error) {
				console.log(error);
			}
		} else {
			try {
				await updateResume(resumeData).unwrap();
				downloadResume();
				navigate("/dashboard");
			} catch (error) {
				console.log(error.data.message);
			}
		}
	};

	//! to handle back button
	const handleBack = (e) => {
		e.preventDefault();
		setStep((prev) => prev - 1);
	};

	return (
		<div className="settings w-full">
			<div className="settings--container w-full min-h-[calc(100vh-5rem)] flex flex-col justify-start items-start gap-8">
				<div className="header--heading">
					<h1 className="header--title font-bold text-3xl text-primary">
						Preview
					</h1>
					<p className="header--subheading text-grey-three">
						Preview your resume to make your everything is correct. You can go
						back and make changes if necessary.
					</p>
				</div>

				<Resume />

				<div className="settings--buttons w-full flex justify-between items-center">
					<button className="prev btn secondary--btn" onClick={handleBack}>
						Back
					</button>
					<button className="next btn primary--btn" onClick={saveResume}>
						Save & Download
					</button>
				</div>
			</div>
		</div>
	);
};

export default Preview;
