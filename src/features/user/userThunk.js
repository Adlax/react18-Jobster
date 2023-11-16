import customFetch, { checkUnauthorizedResponse } from "../../utils/axios";
import { clearValuesAction } from "../job/jobSlice";
import { clearJobsSliceAction } from "../jobs/jobsSlice";
import { logoutUser } from "./userSlice";

export const registerUserThunk = async (url, user, thunkAPI) => {
	try {
		const response = await customFetch.post(url, user);
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.msg);
	}
};

export const loginUserThunk = async (url, user, thunkAPI) => {
	try {
		const response = await customFetch.post(url, user);
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.msg);
	}
};

export const updateUserThunk = async (url, user, thunkAPI) => {
	try {
		const response = await customFetch.patch(url, user);
		return response.data;
	} catch (error) {
		return checkUnauthorizedResponse(error, thunkAPI);
	}
};

export const clearStoreThunk = async (message, thunkAPI) => {
	try {
		thunkAPI.dispatch(logoutUser(message));
		thunkAPI.dispatch(clearJobsSliceAction());
		thunkAPI.dispatch(clearValuesAction());
		return Promise.resolve();
	} catch (error) {
		return Promise.reject();
	}
};
