import styled from "styled-components";
import { NavLink as BaseNavLink } from "react-router-dom";

export const Root = styled.header`
  min-width: 685px;
  display: flex;
  align-items: center;
  gap: 50px;

  padding: 10px 75px;
  box-shadow: rgba(100, 100, 100, 0.2) 0px 8px 8px 0;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-left: auto;
`;

export const NavLink = styled(BaseNavLink)`
  font-size: 18px;
  color: #000;
  text-decoration: none;

  &:hover {
    color: #888;
  }
`;
