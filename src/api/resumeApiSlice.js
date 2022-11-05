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
		createResume: builder.mutation({
			query: (resumeData) => ({
				url: "/resume/create",
				method: "POST",
				body: { ...resumeData },
			}),
			invalidatesTags: ["Resumes"],
		}),
		updateResume: builder.mutation({
			query(resumeData) {
				const { _id, ...data } = resumeData;
				console.log(_id);
				return {
					url: `/resume/${_id}`,
					method: "PUT",
					body: { ...resumeData },
				};
			},
			invalidatesTags: ["Resumes"],
		}),
	}),
});

export const {
	useGetResumeQuery,
	useGetUserResumeQuery,
	useCreateResumeMutation,
	useUpdateResumeMutation,
} = resumeApiSlice;
