import Wrapper from "../assets/wrappers/SearchContainer";
import { useDispatch, useSelector } from "react-redux";
import { FormRow, FormRowSelect } from "../components";
import { handleChangeAction, clearValuesAction } from "../features/jobs/jobsSlice";
import { useMemo, useState } from "react";

const SearchContainer = () => {
	const [localSearch, setLocalSearch] = useState("");
	const { isLoading, search, searchStatus, searchType, sort, sortOptions } = useSelector((store) => store.jobs);
	const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);
	const dispatch = useDispatch();

	const debounce = () => {
		console.log("debounce called");
		let timeoutID;
		return (evt) => {
			setLocalSearch(evt.target.value);
			clearTimeout(timeoutID);
			timeoutID = setTimeout(() => {
				dispatch(handleChangeAction({ name: evt.target.name, value: evt.target.value }));
			}, 1000);
		};
	};

	const memoizedDebounce = useMemo(() => debounce(), []);

	const handleChange = (evt) => {
		dispatch(handleChangeAction({ name: evt.target.name, value: evt.target.value }));
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		setLocalSearch("");
		dispatch(clearValuesAction());
	};

	return (
		<Wrapper>
			<form className="form">
				<h4>searchcontainer</h4>
				<div className="form-center">
					<FormRow type="text" name="search" value={localSearch} handleChange={memoizedDebounce} />
					<FormRowSelect labelText="status" name="searchStatus" value={searchStatus} list={["all", ...statusOptions]} handleChange={handleChange} />
					<FormRowSelect labelText="job type" name="searchType" value={searchType} list={["all", ...jobTypeOptions]} handleChange={handleChange} />
					<FormRowSelect labelText="sort" name="sort" value={sort} list={sortOptions} handleChange={handleChange} />
					<button className="btn btn-block btn-danger" disabled={isLoading} onClick={handleSubmit}>
						clear filters
					</button>
				</div>
			</form>
		</Wrapper>
	);
};

export default SearchContainer;
