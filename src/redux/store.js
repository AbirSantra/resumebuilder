import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import authReducer from "./authSlice";
import resumeReducer from "./resumeSlice";

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		auth: authReducer,
		resume: resumeReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: true,
});
