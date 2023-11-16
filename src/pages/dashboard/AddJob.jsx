import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { FormRow, FormRowSelect } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { handleChangeAction, clearValuesAction, createJobAction, editJobAction } from "../../features/job/jobSlice";
import { useEffect } from "react";

const AddJob = () => {
	const { isLoading, position, company, jobLocation, jobTypeOptions, jobType, statusOptions, status, isEditing, editJobId } = useSelector((store) => store.job);
	const { user } = useSelector((store) => store.user);
	const dispatch = useDispatch();

	const handleChange = (evt) => {
		const name = evt.target.name;
		const value = evt.target.value;
		console.log(evt.target.name);
		dispatch(handleChangeAction({ name, value }));
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		if (!position || !company || !jobLocation) {
			toast.error("Please provide all values");
			return;
		}
		if (isEditing) {
			dispatch(editJobAction({ jobId: editJobId, job: { position, company, jobLocation, status, jobType } }));
			return;
		}
		dispatch(createJobAction({ position, company, jobLocation, status, jobType }));
	};

	useEffect(() => {
		if (!isEditing) {
			dispatch(handleChangeAction({ name: "jobLocation", value: user.location }));
		}
	}, []);

	return (
		<Wrapper>
			<form className="form">
				<h3>{isEditing ? "Edit job" : "Add job"}</h3>
				<div className="form-center">
					<FormRow type="text" name="position" value={position} handleChange={handleChange} labelText="position" />
					<FormRow type="text" name="company" value={company} handleChange={handleChange} labelText="company" />
					<FormRow type="text" name="jobLocation" value={jobLocation} handleChange={handleChange} labelText="job location" />
					<FormRowSelect name="status" value={status} handleChange={handleChange} labelText="status" list={statusOptions} />
					<FormRowSelect name="jobType" value={jobType} handleChange={handleChange} labelText="job type" list={jobTypeOptions} />
					<div className="btn-container">
						<button type="button" className="btn btn-block clear-btn" onClick={() => dispatch(clearValuesAction())}>
							clear
						</button>
						<button type="submit" className="btn btn-block submit-btn" onClick={handleSubmit} disabled={isLoading}>
							submit
						</button>
					</div>
				</div>
			</form>
		</Wrapper>
	);
};

export default AddJob;
