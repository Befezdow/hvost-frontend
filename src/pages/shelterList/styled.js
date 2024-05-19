import styled from "styled-components";

export const Root = styled.div`
	width: 100%;
	max-width: 1200px;
	margin: 30px auto;

	display: grid;
	grid-template-columns: repeat(auto-fill, 525px);
	justify-content: center;
	justify-items: center;
	column-gap: 80px;
	row-gap: 40px;
`;