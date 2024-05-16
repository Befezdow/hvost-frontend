import styled from "styled-components";

export const Root = styled.div`
	max-width: fit-content;
	margin-left: auto;
	margin-right: auto;
`;

export const ProfileTop = styled.div`
	display: flex;
	gap: 30px;
	margin: auto;
`;

export const ProfileBottom = styled.div`
	padding-top: 30px;
`;

export const AnimalImage = styled.div``;

export const AnimalName = styled.div`
	font-size: 25px;
`;

export const AttributesWrapper = styled.div`
	max-width: 350px;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const AttributesRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Attribute = styled.div`
	display: inline-flex;
`;

export const AttributeName = styled.div`
	display: flex;
	color: #888;
	flex: 1 0 auto; ///
`;

export const AttributeDots = styled.div`
	margin-left: 8px;
	color: #e5e5e5;
	white-space: nowrap; ///
`;

export const AttributeValue = styled.div`
	margin-left: 8px;
	color: #000;
`;

export const Text = styled.div`
	color: #888;
	padding-bottom: 10px;
`;

export const AnimalDescription = styled.div`
	/* font-size: 18px; */
	max-width: 680px;
`;

export const Button = styled.button`
	max-width: fit-content;
	height: 48px;
	font-size: 16px;
	color: white;
	padding: 0 20px;
	margin: 30px auto;
	background-color: #000;
	border: 1px solid #000;
	border-radius: 4px;

	&:hover {
		background-color: #2c2c2e;
	}
`;