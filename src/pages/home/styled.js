import styled from "styled-components";
import { Slider as BaseSlider } from "antd";

export const Root = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Text = styled.div`
  font-size: 18px;
  color: darkgray;
  font-style: italic;
`;

export const Slider = styled(BaseSlider)`
  min-width: 300px;

  .ant-slider-rail {
    background: ${(params) => params.$backgroundColor || "red"};

    &:hover {
      background: blue;
    }
  }
`;
