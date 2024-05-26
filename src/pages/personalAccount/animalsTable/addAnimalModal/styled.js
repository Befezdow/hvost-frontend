import styled from "styled-components";
import { Form, Button } from "antd";

export const AddAnimalForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Row = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const FieldName = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const SubmitButton = styled(Button)`
  background-color: black;
  color: white;

  &:hover {
    color: white !important;
    background-color: #474747 !important;
  }
`;
