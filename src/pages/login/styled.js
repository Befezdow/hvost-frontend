import styled from "styled-components";
import { Button, Input, Form } from "antd";

export const Root = styled.div`
  height: calc(100vh - 106px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 500px;
  min-width: 500px;
  padding: 40px;
  border-radius: 14px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(100, 100, 100, 0.2),
    0 6px 20px 0 rgba(100, 100, 100, 0.2);
`;

export const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Header = styled.div`
  font-size: 36px;
  color: #000;
  text-align: center;
`;

export const LoginDisclaimer = styled.div`
  padding: 20px;
  background-color: #cce5ff;
  color: #004085;
  border: 1px solid;
  border-color: #b8daff;
  border-radius: 14px;
  font-size: 16px;
  text-align: justify;
`;

export const InputField = styled(Input)`
  height: 50px;
  border: none;
  outline: none;
  border: 1px solid black;
  border-radius: 14px;
  padding: 0 20px;
  font-size: 20px;

  &::placeholder {
    font-size: 20px;
  }
`;

export const SubmitButton = styled(Button)`
  background-color: black;
  color: white;
  font-size: 20px;
  border-radius: 14px;

  &:hover {
    background-color: #474747;
  }
`;
