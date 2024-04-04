import styled from "styled-components";
import { NavLink as BaseNavLink } from "react-router-dom";

export const Root = styled.header`
  display: flex;
  align-items: center;
  gap: 50px;

  padding: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.6);
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavLink = styled(BaseNavLink)`
  font-size: 18px;
  color: black;
  text-decoration: none;
`;
