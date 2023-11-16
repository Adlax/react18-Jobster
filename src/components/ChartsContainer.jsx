import { useSelector } from "react-redux";
import { BarChartComp, AreaChartComp } from "../components";
import { useState } from "react";
import Wrapper from "../assets/wrappers/ChartsContainer";

const ChartsContainer = () => {
	const { monthlyApplications: data } = useSelector((store) => store.jobs);
	const [barChart, setBarChart] = useState(true);

	return (
		<Wrapper>
			<h4>Monthly Applications</h4>
			<button type="button" onClick={() => setBarChart(!barChart)}>
				{barChart ? "Area Chart" : "Bar Chart"}
			</button>
			{barChart ? <BarChartComp data={data} /> : <AreaChartComp data={data} />}
		</Wrapper>
	);
};

export default ChartsContainer;
