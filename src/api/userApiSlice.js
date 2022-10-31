import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getUser: builder.query({
			query: (id) => ({
				url: `/user/${id}`,
				method: "GET",
			}),
			keepUnusedDataFor: 5,
			providesTags: ["User"],
		}),
		registerUser: builder.mutation({
			query: (formData) => ({
				url: "/user/register",
				method: "POST",
				body: { ...formData },
			}),
			invalidatesTags: ["User"],
		}),
	}),
});

export const { useGetUserQuery, useRegisterUserMutation } = userApiSlice;
