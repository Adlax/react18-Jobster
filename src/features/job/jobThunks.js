import customFetch, { checkUnauthorizedResponse } from "../../utils/axios";
import { showLoading, hideLoading, getAllJobs } from "../jobs/jobsSlice";
import { clearValuesAction } from "./jobSlice";

export const createJobThunk = async (job, thunkAPI) => {
	try {
		const response = await customFetch.post("/jobs", job);
		thunkAPI.dispatch(clearValuesAction());
		return response.data;
	} catch (error) {
		return checkUnauthorizedResponse(error, thunkAPI);
	}
};

export const deleteJobThunk = async (jobId, thunkAPI) => {
	thunkAPI.dispatch(showLoading());
	try {
		const response = await customFetch.delete(`/jobs/${jobId}`);
		thunkAPI.dispatch(getAllJobs());
		return response.data.msg;
	} catch (error) {
		thunkAPI.dispatch(hideLoading());
		return checkUnauthorizedResponse(error, thunkAPI);
	}
};

export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
	try {
		const response = await customFetch.patch(`/jobs/${jobId}`, job);
		thunkAPI.dispatch(clearValuesAction());
		return response.data;
	} catch (error) {
		return checkUnauthorizedResponse(error, thunkAPI);
	}
};
