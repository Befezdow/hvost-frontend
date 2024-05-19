import styled from "styled-components";
import { Button as BaseButton } from 'antd';

export const Root = styled.div`
  height: calc(100vh - 170px);
  padding: 30px 75px;
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const HeroSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 60px 30px;
  /* border: 1px black solid; */
`;

export const TextSection = styled.div`
  max-width: 450px;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const HeroImage = styled.div`
  img {
    border-radius: 30px;
  }
  /* clip-path: polygon(50% 0%, 86% 4%, 100% 35%, 100% 70%, 79% 83%, 46% 95%, 20% 90%, 0 64%, 3% 30%, 28% 15%); */
`;

export const HeaderText = styled.div`
  font-size: 56px;
  font-weight: 500;
  color: #000;
  text-align: center;
`;

export const Text = styled.div`
  font-size: 20px;
  color: #888;
  text-align: center;
`;

export const Button = styled(BaseButton)`
  margin-top: 30px;
  font-size: 24px;
  border-radius: 14px;
`;