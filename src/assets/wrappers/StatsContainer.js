import styled from "styled-components";

const Wrapper = styled.section`
	display: grid;
	row-gap: 2rem;
	@media screen and (min-width: 800px) {
		grid-template-columns: 1fr 1fr;
		column-gap: 1rem;
	}
	@media screen and (min-width: 1200px) {
		grid-template-columns: 1fr 1fr 1fr;
		column-gap: 1rem;
	}
`;

export default Wrapper;
