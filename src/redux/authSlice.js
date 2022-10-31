//! ACTIONS AND REDUCERS FOR AUTHENTICATION //

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: localStorage.getItem("credentials")
			? JSON.parse(localStorage.getItem("credentials")).user
			: null,
		token: localStorage.getItem("credentials")
			? JSON.parse(localStorage.getItem("credentials")).accessToken
			: null,
	},
	reducers: {
		setCredentials: (state, action) => {
			const { user, accessToken } = action.payload;
			localStorage.setItem("credentials", JSON.stringify(action?.payload));
			state.user = user;
			state.token = accessToken;
		},
		logOut: (state, action) => {
			localStorage.clear();
			state.user = null;
			state.token = null;
		},
	},
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;

export const selectCurrentToken = (state) => state.auth.token;
