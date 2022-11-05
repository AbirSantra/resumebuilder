//! ACTIONS AND REDUCERS FOR RESUME STATE //

import { createSlice } from "@reduxjs/toolkit";

const resumeSlice = createSlice({
	name: "resume",
	initialState: {
		user: "",
		name: "",
		position: "",
		share: true,
		data: {
			header: {
				firstname: "",
				middlename: "",
				lastname: "",
				profession: "",
				city: "",
				country: "",
				pincode: "",
				phone: "",
				email: "",
				linkedin: "",
				website: "",
			},
			experience: [],
			education: [],
			skills: [],
			projects: [],
			roles: [],
			certifications: [],
			awards: [],
			extra: [],
		},
	},
	reducers: {
		setResumeData: (state, action) => {
			return { ...state, ...action.payload };
		},
		setHeader: (state, action) => {
			state.data.header = { ...state.data.header, ...action.payload };
		},
		setEducation: (state, action) => {
			const newEducations = [...action.payload];
			state.data.education = newEducations;
		},
		setExperience: (state, action) => {
			const newExperience = [...action.payload];
			state.data.experience = newExperience;
		},
		setSkills: (state, action) => {
			const newSkills = [...action.payload];
			state.data.skills = newSkills;
		},
		setProjects: (state, action) => {
			const newProjects = [...action.payload];
			state.data.projects = newProjects;
		},
		setCertifications: (state, action) => {
			const newCertifications = [...action.payload];
			state.data.certifications = newCertifications;
		},
		setExtras: (state, action) => {
			const newExtras = [...action.payload];
			state.data.extra = newExtras;
		},
		setSettings: (state, action) => {
			state.name = action.payload.name;
		},
	},
});

export const {
	setResumeData,
	setHeader,
	setEducation,
	setExperience,
	setSkills,
	setProjects,
	setCertifications,
	setExtras,
	setSettings,
} = resumeSlice.actions;

export default resumeSlice.reducer;
