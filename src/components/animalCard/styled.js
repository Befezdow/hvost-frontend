import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Root = styled(NavLink)`
	padding: 20px;
	width: 225px;
	min-height: 350px;
	display: flex;
	flex-direction: column;
	gap: 5px;
	border-radius: 14px;
	border: solid black;
	box-shadow: rgba(100,100,100,0.1) 0px 0px 4px 4px;
	position: relative;
	
	background-color: white;
	text-decoration: none;
	transition: 0.2s;

	&:hover {
		box-shadow: rgba(100,100,100,0.5) 0px 0px 4px 4px;
	}
`;

export const AnimalImage = styled.div`
	flex: 0 0 220px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const AnimalInfo = styled.div`
	flex: 1 0 auto;
`;

export const AnimalName = styled.div`
	padding-top: 5px;
	font-size: 18px;
	color: black;
`;

export const AnimalGender = styled.div`
	padding-top: 5px;
	font-size: 16px;
  color: #888;
`;

export const AnimalAge = styled.div`
	padding-top: 5px;
	font-size: 16px;
  color: #888;
`;