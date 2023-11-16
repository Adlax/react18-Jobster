import Wrapper from "../assets/wrappers/BigSidebar";
import Logo from "./Logo";
import Navlinks from "../components/Navlinks";
import { useDispatch, useSelector } from "react-redux";

const BigSidebar = () => {
	const { isSidebarOpen } = useSelector((store) => store.user);

	const toggle = () => {};

	return (
		<Wrapper>
			<div className={isSidebarOpen ? "sidebar-container " : "sidebar-container show-sidebar"}>
				<div className="content">
					<header>
						<Logo />
					</header>
					<Navlinks toggle={toggle} />
				</div>
			</div>
		</Wrapper>
	);
};

export default BigSidebar;
