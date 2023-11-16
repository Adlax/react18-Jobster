import styled from "styled-components";

const Wrapper = styled.section`
	border-radius: var(--borderRadius);
	width: 100%;
	background-color: var(--white);
	padding: 4rem 2rem 2rem 4rem;
	box-shadow: var(--shadow-2);
	h3 {
		margin-top: 0;
	}
	.form {
		margin: 0;
		border-radius: 0;
		box-shadow: none;
		pad: 0;
		max-width: 100%;
		width: 100%;
	}
	.form-row {
		margin-bottom: 0;
	}
	.form-center {
		display: grid;
		row-gap: 0.5rem;
	}
	.form-center button {
		align-self: end;
		height: 35px;
		margin-top: 1rem;
	}
	.btn-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 1rem;
		align-self: self-end;
		margin-top: 0.5rem;
		button {
			height: 35px;
		}
	}
	.clear-btn {
		background-color: var(--grey-500);
	}
	.clear-btn:hover {
		background-color: var(--black);
	}
	@media screen and (min-width: 1000px) {
		.form-center {
			grid-template-columns: 1fr 1fr;
			align-items: center;
			column-gap: 1rem;
		}
		.btn-container {
			margin-top: 0;
		}
	}
	@media screen and (min-width: 1200px) {
		.form-center {
			grid-template-columns: 1fr 1fr 1fr;
		}
		.form-center button {
			margin-top: 0;
		}
	}
`;

export default Wrapper;
