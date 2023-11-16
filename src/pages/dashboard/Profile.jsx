import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { FormRow } from "../../components";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { updateUser } from "../../features/user/userSlice";

const Profile = () => {
	const { isLoading, user } = useSelector((store) => store.user);
	const dispatch = useDispatch();
	const [userData, setUserData] = useState({
		name: user?.name || "",
		email: user?.email || "",
		lastName: user?.lastName || "",
		location: user?.location || "",
	});

	const handleChange = (evt) => {
		const name = evt.target.name;
		const value = evt.target.value;
		setUserData({ ...userData, [name]: value });
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		const { name, email, lastName, location } = userData;
		if (!name || !email || !lastName || !location) {
			toast.error("Please provide all values");
			return;
		}
		dispatch(updateUser(userData));
	};

	return (
		<Wrapper>
			<form className="form" onSubmit={handleSubmit}>
				<h3>Profile</h3>
				<div className="form-center">
					<FormRow type="text" name="name" value={userData.name} handleChange={handleChange} labelText="name" />
					<FormRow type="text" name="lastName" value={userData.lastName} handleChange={handleChange} labelText="last name" />
					<FormRow type="email" name="email" value={userData.email} handleChange={handleChange} labelText="email" />
					<FormRow type="text" name="location" value={userData.location} handleChange={handleChange} labelText="location" />
					<button type="submit" className="btn btn-block" disabled={isLoading}>
						{isLoading ? "Please wait..." : "Save changes"}
					</button>
				</div>
			</form>
		</Wrapper>
	);
};

export default Profile;
