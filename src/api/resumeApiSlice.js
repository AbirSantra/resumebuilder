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
			providesTags: ["Resumes"],
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
				// eslint-disable-next-line no-unused-vars
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
		deleteResume: builder.mutation({
			query: (id, currentUserId) => ({
				url: `/resume/${id}`,
				method: "DELETE",
				body: { currentUserId: currentUserId },
			}),
			invalidatesTags: ["Resumes"],
		}),
	}),
});

export const {
	useGetResumeQuery,
	useGetUserResumeQuery,
	useCreateResumeMutation,
	useUpdateResumeMutation,
	useDeleteResumeMutation,
} = resumeApiSlice;
