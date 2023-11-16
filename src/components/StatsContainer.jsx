import { StatItem } from "../components";
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";
import { useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/StatsContainer";

const StatsContainer = () => {
	const { stats } = useSelector((store) => store.jobs);

	const defaultStatsBox = [
		{ title: "pending applications", count: stats.pending || 0, icon: <FaSuitcaseRolling />, color: "#e9b949", bcg: "#fcefc7" },
		{ title: "interviews scheduled", count: stats.interview || 0, icon: <FaCalendarCheck />, color: "#647acb", bcg: "#e0e8f9" },
		{ title: "jobs declined", count: stats.declined || 0, icon: <FaBug />, color: "#d66a6a", bcg: "#ffeeee" },
	];

	return (
		<Wrapper>
			{defaultStatsBox.map((box, index) => (
				<StatItem key={index} {...box} />
			))}
		</Wrapper>
	);
};

export default StatsContainer;
