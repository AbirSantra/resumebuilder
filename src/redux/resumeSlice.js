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
	},
});

export const { setResumeData, setHeader, setEducation } = resumeSlice.actions;

export default resumeSlice.reducer;
