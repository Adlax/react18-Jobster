import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "./Logo";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar, logoutUser, clearStore } from "../features/user/userSlice";

const Navbar = () => {
	const { user } = useSelector((store) => store.user);
	const [showLogout, setShowLogout] = useState(false);
	const dispatch = useDispatch();

	const toggle = () => {
		dispatch(toggleSidebar());
	};

	return (
		<Wrapper>
			<div className="nav-center">
				<button className="toggle-btn" type="button" onClick={() => toggle()}>
					<FaAlignLeft />
				</button>
				<div>
					<Logo />
					<h3 className="logo-text">Dashboard</h3>
				</div>
				<div className="btn-container">
					<button type="button" className="btn " onClick={() => setShowLogout(!showLogout)}>
						<FaUserCircle />
						{user?.name}
						<FaCaretDown />
					</button>
					<div className={`dropdown ${showLogout ? "show-dropdown" : ""}`}>
						<button type="button" className="dropdown-btn" onClick={() => dispatch(clearStore("Logging out..."))}>
							logout
						</button>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default Navbar;
