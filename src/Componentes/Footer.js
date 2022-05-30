import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";

export default function Footer () {
	const navigate = useNavigate();
	return (
		<FooterBar>
			<StyledLink to='/habitos'>Hábitos</StyledLink>
			<Circular
				value={66}
				text='Hoje'
				background
				backgroundPadding={5}
				styles={buildStyles({
					backgroundColor: "#52B6FF",
					textColor: "#FFFFFF",
					pathColor: "#FFFFFF",
					trailColor: "transparent"
				})}
			onClick={() => navigate('/hoje')}
			/>
			<StyledLink to='/historico'>Histórico</StyledLink>
		</FooterBar>
	);
}

const Circular = styled(CircularProgressbar)`
	margin-bottom: 60px;
	font-family: 'Lexend Deca', sans-serif;
	font-size: 18px;
	width: 91px;
	height: 91px;
`;

const FooterBar = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100vw;
	height: 70px;
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	background: #FFFFFF;
`;

const StyledLink = styled(Link)`
	font-size: 18px;
	margin-left: 30px;
	margin-right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #52B6FF;
    font-family: 'Lexend Deca', sans-serif;
`;