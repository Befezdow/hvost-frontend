import styled from "styled-components";
import { Button } from "antd";

export const WarningMessage = styled.div`
  padding: 10px;
  margin: 30px 0;
  color: #721c24;
  background-color: #f8d7da;
  border: 1px solid;
  border-radius: 8px;
  border-color: #f5c6cb;
`;

export const SubmitButton = styled(Button)`
  background-color: black;
  color: white;

  &:hover {
    color: white !important;
    background-color: #474747 !important;
  }
`;