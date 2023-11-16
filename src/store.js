import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import jobSlice from "./features/job/jobSlice";
import jobsSlice from "./features/jobs/jobsSlice";

export const store = configureStore({
	reducer: {
		user: userSlice,
		job: jobSlice,
		jobs: jobsSlice,
	},
});
