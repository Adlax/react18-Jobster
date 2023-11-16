import customFetch, { checkUnauthorizedResponse } from "../../utils/axios";

export const getAllJobsThunk = async (_, thunkAPI) => {
	const { page, search, searchStatus, searchType, sort } = thunkAPI.getState().jobs;
	let url = `/jobs?page=${page}&status=${searchStatus}&jobType=${searchType}&sort=${sort}`;
	if (search) {
		url += `&search=${search}`;
	}
	try {
		const response = await customFetch.get(url);
		// console.log(response.data);
		return response.data;
	} catch (error) {
		return checkUnauthorizedResponse(error, thunkAPI);
	}
};

export const showStatsThunk = async (_, thunkAPI) => {
	try {
		const response = await customFetch.get("/jobs/stats");
		// console.log(response.data);
		return response.data;
	} catch (error) {
		return checkUnauthorizedResponse(error, thunkAPI);
		// return thunkAPI.rejectWithValue(error);
	}
};
