import styled from "styled-components";

const Wrapper = styled.section`
	.form {
		width: 100%;
		max-width: 100%;
	}
	.form-input,
	.form-select,
	.btn-block {
		height: 35px;
	}
	.form-row {
		margin-bottom: 0;
	}
	.form-center {
		display: grid;
		grid-template-columns: 1fr;
		column-gap: 2rem;
		row-gap: 0.5rem;
	}
	h5 {
		font-weight: 700;
	}
	.btn-block {
		align-self: end;
		margin-top: 1rem;
	}
	@media screen and (min-width: 800px) {
		.form-center {
			grid-template-columns: repeat(2, 1fr);
		}
		.btn-block {
			margin-top: 1.5rem;
		}
	}
	@media screen and (min-width: 1200px) {
		.form-center {
			grid-template-columns: repeat(3, 1fr);
		}
		.btn-block {
			margin-top: 0;
		}
	}
`;

export default Wrapper;
