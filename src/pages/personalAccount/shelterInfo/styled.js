import styled from "styled-components";
import { Carousel } from "antd";

export const Root = styled.div`
	display: flex;
	flex-direction: row;
	gap: 40px;
`;

export const ImagesCarousel = styled(Carousel)`
  width: 300px;
  height: 400px;
`;

export const ShelterImage = styled.div``;

export const FieldsWrapper = styled.div`
	max-width: calc(100vw - 770px);
	min-width: 450px;
`;

export const ShelterName = styled.div`
	max-width: calc(100vw - 770px);
	min-width: 450px;
	font-size: 25px;
	color: #000;
	padding-bottom: 30px;
`;

export const AttributesWrapper = styled.div`
	max-width: calc(100vw - 770px);
	min-width: 450px;
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
	flex: 1 0 auto;
`;

export const AttributeDots = styled.div`
	margin-left: 8px;
	color: #e5e5e5;
	white-space: nowrap;
`;

export const AttributeValue = styled.div`
	margin-left: 8px;
	color: #000;
`;

export const ShelterDescription = styled.div`
	max-width: calc(100vw - 770px);
	min-width: 450px;
	font-size: 16px;
	text-align: justify;
`;

export const Text = styled.div`
	color: #888;
	padding-top: 30px;
	padding-bottom: 10px;
`;