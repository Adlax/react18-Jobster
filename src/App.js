import React from "react";
import { Error, Register, Landing, ProtectedRoute } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SharedLayout, Stats, AllJobs, AddJob, Profile } from "./pages/dashboard";

const App = () => {
	return (
		<BrowserRouter>
			<ToastContainer autoClose={1500} closeOnClick />
			<Routes>
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<SharedLayout />
						</ProtectedRoute>
					}
				>
					<Route index element={<Stats />} />
					<Route path="all-jobs" element={<AllJobs />} />
					<Route path="add-job" element={<AddJob />} />
					<Route path="profile" element={<Profile />} />
				</Route>
				<Route path="landing" element={<Landing />} />
				<Route path="register" element={<Register />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
