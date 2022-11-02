import { setResumeData } from "../redux/resumeSlice";
import { apiSlice } from "./apiSlice";

export const resumeApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getResume: builder.query({
			query: (id) => ({
				url: `/resume/${id}`,
				method: "GET",
			}),
			async onQueryStarted(id, { dispatch, queryFulfilled }) {
				const { data } = await queryFulfilled;
				dispatch(setResumeData(data));
			},
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
