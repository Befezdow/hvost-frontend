import styled from "styled-components";
import { Table as BaseTable, Button as BaseButton, Modal } from "antd";
import { NavLink as BaseNavLink } from "react-router-dom";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;

export const AddModal = styled(Modal)``;

export const DeleteModal = styled(Modal)``;

export const WarningMessage = styled.div`
  padding: 10px;
  margin: 30px 0;
  color: #721c24;
  background-color: #f8d7da;
  border: 1px solid;
  border-radius: 8px;
  border-color: #f5c6cb;
`;

export const Table = styled(BaseTable)``;

export const NavLink = styled(BaseNavLink)``;

export const Text = styled.div`
  color: #000;
`;

export const Button = styled(BaseButton)``;
