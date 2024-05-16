import styled from "styled-components";
import { Slider as BaseSlider } from "antd";
import { Button as BaseButton, Flex } from 'antd';

export const Root = styled.div`
  padding: 30px 75px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 30px;
  `;

export const HeroSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
  border: 1px black solid;
`;

export const TextSection = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const HeroImage = styled.div`
  /* clip-path: polygon(50% 0%, 86% 4%, 100% 35%, 100% 70%, 79% 83%, 46% 95%, 20% 90%, 0 64%, 3% 30%, 28% 15%); */
`;

export const HeaderText = styled.div`
  font-size: 45px;
  font-weight: 500;
  color: black;
`;

export const Text = styled.div`
  font-size: 18px;
  color: darkgray;
  /* font-style: italic; */
`;

export const Button = styled(BaseButton)``;

export const Slider = styled(BaseSlider)`
  min-width: 300px;

  .ant-slider-rail {
    background: ${(params) => params.$backgroundColor || "red"};

    &:hover {
      background: blue;
    }
  }
`;
