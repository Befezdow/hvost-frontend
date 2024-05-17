import styled from "styled-components";
import { Button as BaseButton } from 'antd';

export const Root = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
	max-width: 500px;
	min-width: 500px;
	padding: 40px;
	border: 1px solid black;
	border-radius: 14px;
`;

export const Form = styled.form`
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

export const InputField = styled.input`
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

export const Button = styled(BaseButton)`
	background-color: black;
	color: white;
	font-size: 20px;
	border-radius: 14px;

	&:hover {
		background-color: #474747;
	}
`;