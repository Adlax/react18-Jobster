import styled from "styled-components";

const Wrapper = styled.article`
	background-color: var(--white);
	border-radius: var(--borderRadius);
	display: grid;
	grid-template-rows: 1fr auto;
	box-shadow: var(--shadow-2);
	padding: 1rem;
	header {
		padding: 1rem 1.5rem;
		border-bottom: 1px solid var(--grey-100);
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		h5 {
			letter-spacing: 0;
		}
	}

	.main-icon {
		width: 60px;
		height: 60px;
		display: grid;
		place-items: center;
		background-color: var(--primary-500);
		border-radius: var(--borderRadius);
		font-size: 1.5rem;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--white);
		margin-right: 2rem;
	}

	.info {
		h5 {
			margin-bottom: 0.25rem;
		}
		p {
			margin: 0;
			text-transform: capitalize;
			color: var(--grey-400);
			letter-spacing: var(--letterSpacing);
		}
	}

	.pending {
		background-color: #fcefc7;
		color: #e9b949;
	}

	.interview {
		background-color: #e0e8f9;
		color: #647acb;
	}

	.declined {
		background-color: #ffeeee;
		color: #d66a6a;
	}

	.content {
		padding: 1rem 1.5rem;
	}

	.content-center {
		display: grid;
		grid-template-columns: 1fr;
		row-gap: 0.5rem;
		@media screen and (min-width: 600px) {
			grid-template-columns: 1fr 1fr;
		}
		@media screen and (min-width: 1000px) {
			grid-template-columns: 1fr;
		}
		@media screen and (min-width: 1200px) {
			grid-template-columns: 1fr 1fr;
		}
	}

	.status {
		border-radius: var(--borderRadius);
		text-transform: capitalize;
		letter-spacing: var(--letterSpacing);
		text-align: center;
		width: 100px;
		height: 30px;
		margin-top: 0.5rem;
	}

	footer {
		margin-top: 1rem;
	}

	.edit-btn,
	.delete-btn {
		letter-spacing: var(--letterSpacing);
		cursor: pointer;
		height: 30px;
	}

	.edit-btn {
		color: var(--green-dark);
		background-color: var(--green-light);
		margin-right: 0.5rem;
	}

	.delete-btn {
		color: var(--red-dark);
		background-color: var(--red-light);
	}

	&:hover .actions {
		visibility: visible;
	}
`;

export default Wrapper;
