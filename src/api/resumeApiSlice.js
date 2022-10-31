import { apiSlice } from "./apiSlice";

export const resumeApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getResume: builder.query({
			query: (id) => ({
				url: `/resume/${id}`,
				method: "GET",
			}),
			keepUnusedDataFor: 2,
		}),
	}),
});

export const { useGetResumeQuery } = resumeApiSlice;
