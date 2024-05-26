import styled from "styled-components";
import { Carousel } from "antd";

export const Root = styled.div`
  max-width: fit-content;
  min-width: fit-content;
  display: flex;
  flex-direction: row;
  gap: 40px;
  border: 1px solid black;
  border-radius: 14px;
  padding: 40px;
  margin: 20px auto;
`;

export const ImagesCarousel = styled(Carousel)`
  width: 300px;
  height: 400px;
`;

export const AnimalImage = styled.div``;

export const AnimalInfo = styled.div`
  max-width: calc(100vw - 770px);
  min-width: 450px;
`;

export const AnimalName = styled.div`
  max-width: calc(100vw - 770px);
  min-width: 450px;
  font-size: 25px;
  color: #000;
  padding-bottom: 20px;
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

export const AnimalDescription = styled.div`
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
