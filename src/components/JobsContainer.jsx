import Wrapper from "../assets/wrappers/JobsContainer";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Job, Loading, PaginationBtnsContainer } from "../components";
import { getAllJobs } from "../features/jobs/jobsSlice";

const JobsContainer = () => {
	const dispatch = useDispatch();
	const { isLoading, jobs, numOfPages, totalJobs, page, search, searchStatus, searchType, sort } = useSelector((store) => store.jobs);

	useEffect(() => {
		dispatch(getAllJobs());
	}, [page, search, searchStatus, searchType, sort]);

	if (isLoading) {
		return <Loading center />;
	}

	if (jobs.length < 1) {
		return (
			<Wrapper>
				<h2>No matches found</h2>
			</Wrapper>
		);
	}

	return (
		<Wrapper>
			<h5>
				{totalJobs} job{totalJobs > 1 ? "s" : ""} found
			</h5>
			<div className="jobs">
				{jobs.map((job) => {
					// console.log(job);
					return <Job key={job._id} {...job} />;
				})}
			</div>
			{numOfPages > 1 && <PaginationBtnsContainer />}
		</Wrapper>
	);
};

export default JobsContainer;
