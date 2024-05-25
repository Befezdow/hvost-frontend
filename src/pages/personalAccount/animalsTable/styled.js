import styled from "styled-components";
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
  justify-content: space-between;
  gap: 30px;
  margin-top: 20px;
`;

export const NavLink = styled(BaseNavLink)`
  font-size: 16px;
`;

export const Text = styled.div`
  color: #000;
`;

export const ActionsElement = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
