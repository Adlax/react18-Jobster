import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { addUserToLocalStorage, removeUserFromLocalStorage, getUserFromLocalStorage } from "../../utils/localStorage";
import { registerUserThunk, loginUserThunk, updateUserThunk, clearStoreThunk } from "./userThunk";

const initialState = {
	user: getUserFromLocalStorage(),
	isSidebarOpen: false,
	isLoading: false,
};

export const registerUser = createAsyncThunk("user/registerUser", async (user, thunkAPI) => {
	// console.log(`Register user : ${JSON.stringify(user)}`);
	return registerUserThunk("/auth/register", user, thunkAPI);
});

export const loginUser = createAsyncThunk("/user/loginUser", async (user, thunkAPI) => {
	// console.log(`Login user : ${JSON.stringify(user)}`);
	return loginUserThunk("/auth/login", user, thunkAPI);
});

export const updateUser = createAsyncThunk("/user/updateUser", async (user, thunkAPI) => {
	return updateUserThunk("/auth/updateUser", user, thunkAPI);
});

export const clearStore = createAsyncThunk("user/clearStore", clearStoreThunk);

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		toggleSidebar: (state) => {
			state.isSidebarOpen = !state.isSidebarOpen;
		},
		logoutUser: (state, { payload }) => {
			state.isSidebarOpen = false;
			state.user = null;
			removeUserFromLocalStorage();
			if (payload) {
				toast.success(payload);
			}
		},
	},
	// new school :
	extraReducers: (builder) => {
		builder.addCase(registerUser.pending, (state) => {
			state.isLoading = true;
		})
			.addCase(registerUser.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				const { user } = payload;
				state.user = user;
				addUserToLocalStorage(user);
				toast.success(`Hello , ${user.name}`);
			})
			.addCase(registerUser.rejected, (state, { payload }) => {
				state.isLoading = false;
				toast.error(payload);
			})
			.addCase(loginUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(loginUser.fulfilled, (state, { payload }) => {
				const { user } = payload;
				state.isLoading = false;
				state.user = user;
				addUserToLocalStorage(user);
				toast.success(`Welcome back ${user.name}`);
			})
			.addCase(loginUser.rejected, (state, { payload }) => {
				state.isLoading = false;
				toast.error(payload);
			})
			.addCase(updateUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(updateUser.fulfilled, (state, { payload }) => {
				const { user } = payload;
				state.isLoading = false;
				state.user = user;
				addUserToLocalStorage(user);
				toast.success(`User profile updated`);
			})
			.addCase(updateUser.rejected, (state, { payload }) => {
				state.isLoading = false;
				toast.error(payload);
			})
			.addCase(clearStore.rejected, () => {
				toast.error("Error while clearing all store");
			});
	},
});

export const { toggleSidebar, logoutUser } = userSlice.actions;

export default userSlice.reducer;