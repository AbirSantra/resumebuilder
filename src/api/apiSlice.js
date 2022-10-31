//! THIS IS THE BASE SLICE FOR APIs AND ENDPOINTS //

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../redux/authSlice";

const baseQuery = fetchBaseQuery({
	baseUrl: "http://localhost:5000", // backend server url
	credentials: "include", // to include the http only cookies everytime
	prepareHeaders: (headers, { getState }) => {
		// set the authorization header
		const token = getState().auth.token;
		if (token) {
			headers.set("authorization", `Bearer ${token}`);
		}

		return headers;
	},
});

const baseQueryWithReAuth = async (args, api, extraOptions) => {
	// try to fetch the request
	let result = await baseQuery(args, api, extraOptions);

	// if err code is 403, it means access token has expired
	if (result?.error?.status === 403) {
		console.log("Sending Refresh Token");

		// try to fetch new access token using refresh token
		const refreshResult = await baseQuery(
			"/auth/refreshToken",
			api,
			extraOptions
		);

		// if data exists, it means refresh token is valid
		if (refreshResult?.data) {
			// set the state as the new user and token
			const user = refreshResult.data.user;
			const accessToken = refreshResult.data.accessToken;
			api.dispatch(setCredentials({ user, accessToken }));

			// retry the original query
			result = await baseQuery(args, api, extraOptions);
		} else {
			// if no data exists, it means refresh token has also expired and we need to logout
			api.dispatch(logOut());
		}
	}

	return result;
};

export const apiSlice = createApi({
	baseQuery: baseQueryWithReAuth,
	tagTypes: ["User", "Resume"],
	endpoints: (builder) => ({}),
});
