import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getUserFromLocalStorage } from "../../utils/localStorage";
import { createJobThunk, editJobThunk, deleteJobThunk } from "./jobThunks";

const initialState = {
	isLoading: false,
	position: "",
	company: "",
	jobLocation: "",
	jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
	jobType: "full-time",
	statusOptions: ["interview", "declined", "pending"],
	status: "pending",
	isEditing: false,
	editJobId: "",
};

export const createJobAction = createAsyncThunk("job/createJob", createJobThunk);

export const deleteJobAction = createAsyncThunk("job/deleteJob", deleteJobThunk);

export const editJobAction = createAsyncThunk("job/editJob", editJobThunk);

const jobSlice = createSlice({
	name: "job",
	initialState,
	reducers: {
		handleChangeAction: (state, { payload: { name, value } }) => {
			console.log(name, value);
			state[name] = value;
		},
		clearValuesAction: () => {
			return { ...initialState, jobLocation: getUserFromLocalStorage()?.location || "" };
		},
		setEditJobAction: (state, { payload }) => {
			return {
				...initialState,
				isEditing: true,
				...payload,
			};
		},
	},
	extraReducers: (builder) => {
		builder.addCase(createJobAction.pending, (state) => {
			state.isLoading = true;
		})
			.addCase(createJobAction.fulfilled, (state, action) => {
				state.isLoading = false;
				toast.success("Job created");
			})
			.addCase(createJobAction.rejected, (state, { payload }) => {
				state.isLoading = false;
				toast.error(payload);
			})
			.addCase(deleteJobAction.fulfilled, (state, { payload }) => {
				toast.success(payload);
			})
			.addCase(deleteJobAction.rejected, (state, { payload }) => {
				toast.error(payload);
			})
			.addCase(editJobAction.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(editJobAction.fulfilled, (state) => {
				state.isLoading = false;
				toast.success("Job modified");
			})
			.addCase(editJobAction.rejected, (state, { payload }) => {
				state.isLoading = false;
				toast.error(payload);
			});
	},
});

export const { handleChangeAction, clearValuesAction, setEditJobAction } = jobSlice.actions;

export default jobSlice.reducer;
