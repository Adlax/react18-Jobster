import Wrapper from "../assets/wrappers/Job";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import JobInfo from "./JobInfo";
import moment from "moment";
import { deleteJobAction, setEditJobAction } from "../features/job/jobSlice";

const Job = ({ _id, jobLocation, status, company, jobType, position, createdAt }) => {
	const dispatch = useDispatch();
	const date = moment(createdAt).format("MMM Do, YYYY");

	return (
		<Wrapper>
			<header>
				<div className="main-icon">{company.charAt(0)}</div>
				<div className="info">
					<h5>{position}</h5>
					<p>{company}</p>
				</div>
			</header>
			<div className="content">
				<div className="content-center">
					<JobInfo icon={<FaLocationArrow />} text={jobLocation} />
					<JobInfo icon={<FaCalendarAlt />} text={date} />
					<JobInfo icon={<FaBriefcase />} text={jobType} />
					<div className={`status ${status}`}>{status}</div>
				</div>{" "}
				<footer>
					<div className="actions">
						<Link
							to="/add-job"
							className="btn edit-btn"
							onClick={() => dispatch(setEditJobAction({ editJobId: _id, jobLocation, status, company, jobType, position }))}
						>
							edit
						</Link>
						<button className="btn delete-btn" type="button" onClick={() => dispatch(deleteJobAction(_id))}>
							delete
						</button>
					</div>
				</footer>
			</div>
		</Wrapper>
	);
};

export default Job;
