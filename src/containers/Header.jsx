import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import InputControl from "../components/InputControl";
import { setHeader } from "../redux/resumeSlice";
import { FaUser } from "react-icons/fa";

const Header = ({ isNew, step, setStep }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// get the resume data state
	const headerData = useSelector((state) => state.resume.data.header);

	// to store the form fields
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [profession, setProfession] = useState("");
	const [city, setCity] = useState("");
	const [country, setCountry] = useState("");
	const [pincode, setPincode] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [linkedin, setLinkedin] = useState("");
	const [website, setWebsite] = useState("");

	if (!isNew) {
		// to refresh the initial values of the fields
		// eslint-disable-next-line react-hooks/rules-of-hooks
		useEffect(() => {
			setFirstname(headerData.firstname);
			setLastname(headerData.lastname);
			setProfession(headerData.profession);
			setCity(headerData.city);
			setCountry(headerData.country);
			setPincode(headerData.pincode);
			setPhone(headerData.phone);
			setEmail(headerData.email);
			setLinkedin(headerData.linkedin);
			setWebsite(headerData.website);
		}, [headerData]);
	}

	//! to handle form field value changes
	const firstnameChange = (e) => {
		setFirstname(e.target.value);
	};
	const lastnameChange = (e) => {
		setLastname(e.target.value);
	};
	const professionChange = (e) => {
		setProfession(e.target.value);
	};
	const cityChange = (e) => {
		setCity(e.target.value);
	};
	const countryChange = (e) => {
		setCountry(e.target.value);
	};
	const pincodeChange = (e) => {
		setPincode(e.target.value);
	};
	const phoneChange = (e) => {
		setPhone(e.target.value);
	};
	const emailChange = (e) => {
		setEmail(e.target.value);
	};
	const linkedinChange = (e) => {
		setLinkedin(e.target.value);
	};
	const websiteChange = (e) => {
		setWebsite(e.target.value);
	};

	//! to handle back button
	const handleBack = (e) => {
		e.preventDefault();
		navigate("/dashboard");
	};

	//! to handle next button
	const handleNext = (e) => {
		e.preventDefault();
		const data = {
			firstname: firstname,
			lastname: lastname,
			profession: profession,
			city: city,
			country: country,
			pincode: pincode,
			phone: phone,
			email: email,
			linkedin: linkedin,
			website: website,
		};
		dispatch(setHeader(data));
		setStep((prev) => prev + 1);
	};

	// console.log(firstname);

	return (
		<div className="header w-full">
			<div className="header--container w-full flex flex-col justify-center items-start gap-12">
				<div className="header--heading w-full flex flex-col justify-start items-start ">
					<div className="flex justify-center items-center gap-2 text-2xl text-primary">
						<FaUser />
						<h1 className="header--title font-bold text-3xl text-primary">
							Personal Details
						</h1>
					</div>
					<p className="header--subheading text-grey-three">
						Let the employers know how to contact you
					</p>
				</div>
				<div className="header--form w-full grid grid-cols-2 gap-x-4 gap-y-8 ">
					<InputControl
						type="text"
						label="Firstname"
						placeholder="e.g. Abir"
						value={firstname}
						onChange={firstnameChange}
					/>
					<InputControl
						type="text"
						label="Lastname"
						placeholder="e.g. Santra"
						value={lastname}
						onChange={lastnameChange}
					/>
					<InputControl
						type="text"
						label="Job Title"
						placeholder="e.g. Web Developer"
						value={profession}
						onChange={professionChange}
					/>
					<InputControl
						type="text"
						label="Email"
						placeholder="e.g. abirsantra@gmail.com"
						value={email}
						onChange={emailChange}
					/>
					<InputControl
						type="text"
						label="City"
						placeholder="e.g. Kolkata"
						value={city}
						onChange={cityChange}
					/>
					<InputControl
						type="text"
						label="Country"
						placeholder="e.g. India"
						value={country}
						onChange={countryChange}
					/>
					<InputControl
						type="text"
						label="Pincode"
						placeholder="e.g. 711106"
						value={pincode}
						onChange={pincodeChange}
					/>
					<InputControl
						type="text"
						label="Phone"
						placeholder="e.g. 1234567890"
						value={phone}
						onChange={phoneChange}
					/>
					<InputControl
						type="text"
						label="Personal Website Link"
						value={website}
						onChange={websiteChange}
					/>
					<InputControl
						type="text"
						label="Linkedin Profile Link"
						value={linkedin}
						onChange={linkedinChange}
					/>
				</div>
				<div className="header--buttons w-full flex justify-between items-center">
					<button className="prev btn secondary--btn" onClick={handleBack}>
						Back
					</button>
					<button className="next btn primary--btn" onClick={handleNext}>
						Next: Education
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
