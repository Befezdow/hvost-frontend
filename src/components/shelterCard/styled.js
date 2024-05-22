import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Root = styled(NavLink)`
	padding: 20px;
	width: 525px;
	min-height: 200px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	border-radius: 14px;
	border: 1px solid black;
	box-shadow: rgba(100,100,100,0.1) 0px 0px 4px 4px;
	position: relative;
	
	background-color: white;
	text-decoration: none;
	transition: 0.2s;

	&:hover {
		box-shadow: rgba(100,100,100,0.5) 0px 0px 4px 4px;
	}
`;

export const ShelterImage = styled.div`
	flex: 0 0 200px;
`;

export const ShelterInfo = styled.div`
	max-width: 310;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ShelterName = styled.div`
	font-size: 20px;
	color: black;
`;

export const ShelterAddress = styled.div`
	font-size: 16px;
	color: black;
`;

export const ShelterPhoneNumber = styled.div`
	font-size: 16px;
	color: black;
`;

export const Text = styled.div`
	padding-top: 20px;;
	padding-bottom: 5px;
	color: #888;
`;