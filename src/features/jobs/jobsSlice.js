import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllJobsThunk, showStatsThunk } from "./jobsThunk";

const initialFiltersState = {
	search: "",
	searchStatus: "all",
	searchType: "all",
	sort: "latest",
	sortOptions: ["latest", "oldest", "a-za", "z-a"],
};

const initialState = {
	isLoading: false,
	jobs: [],
	totalJobs: 0,
	numOfPages: 1,
	page: 1,
	stats: {},
	monthlyApplications: [],
	...initialFiltersState,
};

export const getAllJobs = createAsyncThunk("jobs/getJobs", getAllJobsThunk);

export const showStats = createAsyncThunk("jobs/showStats", showStatsThunk);

const jobsSlice = createSlice({
	name: "jobs",
	initialState,
	reducers: {
		showLoading: (state) => {
			state.isLoading = true;
		},
		hideLoading: (state) => {
			state.isLoading = false;
		},
		handleChangeAction: (state, { payload: { name, value } }) => {
			state.page = 1;
			state[name] = value;
		},
		clearValuesAction: (state) => {
			return { ...state, ...initialFiltersState };
		},
		changePageAction: (state, { payload }) => {
			state.page = payload;
		},
		clearJobsSliceAction: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder.addCase(getAllJobs.pending, (state) => {
			state.isLoading = true;
		})
			.addCase(getAllJobs.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.jobs = payload.jobs;
				state.numOfPages = payload.numOfPages;
				state.totalJobs = payload.totalJobs;
			})
			.addCase(getAllJobs.rejected, (state, { payload }) => {
				state.isLoading = false;
				toast.error(payload);
			})
			.addCase(showStats.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(showStats.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.stats = payload.defaultStats;
				state.monthlyApplications = payload.monthlyApplications;
			})
			.addCase(showStats.rejected, (state, { payload }) => {
				state.isLoading = false;
				toast.error(payload);
			});
	},
	// extraReducers: {
	// 	[getAllJobs.pending]: (state) => {
	// 		state.isLoading = true;
	// 	},
	// 	[getAllJobs.fulfilled]: (state, { payload }) => {
	// 		state.isLoading = false;
	// 		state.jobs = payload.jobs;
	// 		state.numOfPages = payload.numOfPages;
	// 		state.totalJobs = payload.totalJobs;
	// 	},
	// 	[getAllJobs.rejected]: (state, { payload }) => {
	// 		state.isLoading = false;
	// 		toast.error(payload);
	// 	},
	// 	[showStats.pending]: (state) => {
	// 		state.isLoading = true;
	// 	},
	// 	[showStats.fulfilled]: (state, { payload }) => {
	// 		state.isLoading = false;
	// 		state.stats = payload.defaultStats;
	// 		state.monthlyApplications = payload.monthlyApplications;
	// 	},
	// 	[showStats.rejected]: (state, { payload }) => {
	// 		state.isLoading = false;
	// 		toast.error(payload);
	// 	},
	// },
});

export const { showLoading, hideLoading, handleChangeAction, clearValuesAction, changePageAction, clearJobsSliceAction } = jobsSlice.actions;

export default jobsSlice.reducer;
