import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../features/user/userSlice";
import links from "../utils/links";
import Navlinks from "./Navlinks";

const SmallSidebar = () => {
	const { isSidebarOpen } = useSelector((store) => store.user);
	const dispatch = useDispatch();

	const toggle = () => {
		console.log("toggle");
		dispatch(toggleSidebar());
	};

	return (
		<Wrapper>
			<div className={isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"}>
				<div className="content">
					<button className="close-btn" onClick={() => toggle()}>
						<FaTimes />
					</button>
					<header>
						<Logo />
					</header>
					<Navlinks toggle={toggle} />
				</div>
			</div>
		</Wrapper>
	);
};

export default SmallSidebar;
