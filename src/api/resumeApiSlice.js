import { apiSlice } from "./apiSlice";

export const resumeApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getResume: builder.query({
			query: (id) => ({
				url: `/resume/${id}`,
				method: "GET",
			}),
		}),
		getUserResume: builder.query({
			query: (id) => ({
				url: `/resume/user/${id}`,
				method: "GET",
			}),
			invalidatesTags: ["Resumes"],
		}),
	}),
});

export const { useGetResumeQuery, useGetUserResumeQuery } = resumeApiSlice;
