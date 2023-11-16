import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../../features/jobs/jobsSlice";
import { ChartsContainer, StatsContainer } from "../../components";

const Stats = () => {
	const { isLoading, monthlyApplications } = useSelector((store) => store.jobs);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(showStats());
	}, []);

	return (
		<>
			<StatsContainer />
			{monthlyApplications.length > 0 && <ChartsContainer />}
		</>
	);
};

export default Stats;
