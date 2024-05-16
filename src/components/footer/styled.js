import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Root = styled.footer`
	margin-top: auto;
	padding: 30px 75px;
	background-color: black;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const FooterLogo = styled.div``;

export const FooterLinks = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const Link = styled(NavLink)`
	font-size: 16px;
	color: white;
	text-decoration: none;
`;

export const Text = styled.div`
	max-width: 250px;
	font-size: 16px;
  color: white;
`;