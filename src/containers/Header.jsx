import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputControl from "../components/InputControl";
import { setHeader } from "../redux/resumeSlice";
import { FaUserAlt } from "react-icons/fa";
import FormSectionHeader from "../components/FormSectionHeader";

const Header = ({ isNew }) => {
	const dispatch = useDispatch();

	// get the resume data state
	const headerData = useSelector((state) => state.resume.data.header);

	// to store the form fields
	const [firstname, setFirstname] = useState(headerData.firstname);
	const [lastname, setLastname] = useState(headerData.lastname);
	const [profession, setProfession] = useState(headerData.profession);
	const [city, setCity] = useState(headerData.city);
	const [country, setCountry] = useState(headerData.country);
	const [pincode, setPincode] = useState(headerData.pincode);
	const [phone, setPhone] = useState(headerData.phone);
	const [email, setEmail] = useState(headerData.email);
	const [linkedin, setLinkedin] = useState(headerData.linkedin);
	const [website, setWebsite] = useState(headerData.website);

	//! to refresh the initial values of the fields
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

	//! to update the global state when input value changes
	useEffect(() => {
		handleEdit();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [
		firstname,
		lastname,
		profession,
		city,
		country,
		pincode,
		phone,
		email,
		linkedin,
		website,
	]);

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

	//! to handle input edit
	const handleEdit = () => {
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
	};

	return (
		<div className="header w-full">
			<div className="header--container w-full flex flex-col justify-center items-start gap-8">
				<FormSectionHeader
					icon={<FaUserAlt />}
					title="Personal Details"
					subtitle="Let the employers know how to contact you"
				/>

				<div className="header--form w-full grid grid-cols-2 gap-x-4 gap-y-8 ">
					<InputControl
						type="text"
						label="Firstname"
						placeholder="Abir"
						value={firstname}
						onChange={firstnameChange}
					/>
					<InputControl
						type="text"
						label="Lastname"
						placeholder="Santra"
						value={lastname}
						onChange={lastnameChange}
					/>
					<div className="col-span-2">
						<InputControl
							type="text"
							label="Headline"
							placeholder="MERN Web Developer"
							hint="Add a title that quickly describes your overall experience or add the title you are current applying to"
							value={profession}
							onChange={professionChange}
						/>
					</div>
					<div className="col-span-2">
						<InputControl
							type="text"
							label="Email"
							placeholder="exampleemail@gmail.com"
							value={email}
							onChange={emailChange}
						/>
					</div>
					<InputControl
						type="text"
						label="City"
						placeholder="Kolkata"
						value={city}
						onChange={cityChange}
					/>
					<InputControl
						type="text"
						label="Country"
						placeholder="India"
						value={country}
						onChange={countryChange}
					/>
					<InputControl
						type="text"
						label="Zipcode"
						placeholder="123 456"
						value={pincode}
						onChange={pincodeChange}
					/>
					<InputControl
						type="text"
						label="Phone"
						placeholder="+00 1234567890"
						value={phone}
						onChange={phoneChange}
					/>
					<div className="col-span-2">
						<InputControl
							type="text"
							label="Portfolio Website Link"
							placeholder="www.abirsantra.com"
							hint="Add your portfolio website link if you have one"
							value={website}
							onChange={websiteChange}
						/>
					</div>
					<div className="col-span-2">
						<InputControl
							type="text"
							label="Linkedin Profile Url"
							placeholder="www.linkedin.com/in/[ yourprofilename ]"
							value={linkedin}
							onChange={linkedinChange}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
