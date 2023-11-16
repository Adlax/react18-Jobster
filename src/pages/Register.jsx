import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { toast } from "react-toastify";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const initialState = {
	name: "",
	email: "",
	password: "",
	isMember: true,
};

const Register = () => {
	const dispatch = useDispatch();
	const { user, isLoading } = useSelector((store) => store.user);
	const [values, setValues] = useState(initialState);
	const navigate = useNavigate();

	const handleChange = (evt) => {
		// console.log(evt.target);
		const name = evt.target.name;
		const value = evt.target.value;
		// console.log(name, value);
		setValues({ ...values, [name]: value });
	};

	const onSubmit = (evt) => {
		evt.preventDefault();
		// console.log(evt.target);
		const { name, email, password, isMember } = values;
		if (!email || !password || (!isMember && !name)) {
			toast.error("Please provide all fields");
			return;
		}
		if (isMember) {
			dispatch(loginUser({ email, password }));
			return;
		}
		dispatch(registerUser({ name, email, password }));
	};

	const toggleMember = () => {
		setValues({ ...values, isMember: !values.isMember });
	};

	useEffect(() => {
		if (user) {
			setTimeout(() => {
				navigate("/");
			}, 2000);
		}
	}, [user]);

	return (
		<Wrapper className="full-page">
			<form className="form" onSubmit={onSubmit}>
				<Logo />
				<h3>{values.isMember ? "Login" : "Register"}</h3>
				{!values.isMember && <FormRow name="name" type="text" value={values.name} handleChange={handleChange} />}
				<FormRow name="email" type="email" value={values.email} handleChange={handleChange} />
				<FormRow name="password" type="password" value={values.password} handleChange={handleChange} />
				<button disabled={isLoading} type="submit" className="btn btn-block">
					{isLoading ? "please wait..." : "submit"}
				</button>
				<button
					className="btn btn-hipster btn-block"
					type="button"
					disabled={isLoading}
					onClick={() => dispatch(loginUser({ email: "testUser@test.com", password: "secret" }))}
				>
					{isLoading ? "loading..." : "Demo/Guest user"}
				</button>
				<p>
					{values.isMember ? "Not a member yet?" : "Already a member ?"}
					<button type="button" onClick={toggleMember} className="member-btn">
						{values.isMember ? "Register" : "Login"}
					</button>
				</p>
			</form>
		</Wrapper>
	);
};

export default Register;
