import Header from "../Header";
import Footer from "../Footer";

import React from 'react';
import styled from 'styled-components';

export default function Historico () {
	return (
		<>
			<Header />
			<Titulo>Histórico</Titulo>
			<Texto>Em breve, você poderá ver o histórico dos seus hábitos, aqui!</Texto>
			<Footer />
		</>
	);
}

const Titulo = styled.p`
	margin-top: 90px;
	margin-left: 17px;
	margin-bottom: 17px;
	font-family: 'Lexend Deca', sans-serif;
	font-size: 23px;
	color: #126BA5;
`;

const Texto = styled.p`
	font-family: 'Lexend Deca', sans-serif;
	font-size: 18px;
	color: #666666;
	margin-left: 17px;
	margin-right: 17px;
`;