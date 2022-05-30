import logo from "../../Assets/logo.png"
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import styled from "styled-components";

export default function Login () {
	const [form, setForm] = useState({
		email: '',
		password: '',
	});

	function handleForm (e) {
		setForm({...form, [e.target.name]: e.target.value,});
	}

	function doSubmit (event) {
		event.preventDefault();
		console.log(form.email);
		console.log(form.password);

		const promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', {email: form.email, password: form.password});
		promisse.then((response) => console.log(response.data))
		.catch(error => console.log(error));
		
		
	}

	return (
		<LoginContainer>
			<Logo src={logo} alt={'logo'} height={178} width={180}/>
			<form onSubmit={doSubmit}>
				<Input type='email' name='email' placeholder='email' value={form.email} onChange={handleForm} required/>
				<Input type='password' name='password' placeholder='senha' value={form.password} onChange={handleForm} required/>
				<Button>Entrar</Button>
				<StyledLink to='/cadastro'>Não tem uma conta? Cadastre-se!</StyledLink>
			</form>
		</LoginContainer>
	);
}

const LoginContainer = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	flex-direction: column;
	font-family: 'Lexend Deca', sans-serif;
`;

const Logo = styled.img`
	display: flex;
	margin-top: 68px;
	margin-bottom: 32px;
`;

const Input = styled.input`
	height: 45px;
	width: 303px;
	border: 1px solid #D5D5D5;
	background-color: #FFFFFF;
	padding-left: 10px;
	margin-bottom: 6px;
	margin-left: 36px;
	border-radius: 5px;

	::placeholder {
		color: #D5D5D5;
		font-size: 20px;
		font-family: 'Lexend Deca', sans-serif;
	}
`;

const Button = styled.button`
	height: 45px;
	width: 303px;
	margin-left: 36px;
	background-color: #52B6FF;
	color: #FFFFFF;
	font-family: 'Lexend Deca', sans-serif;
	font-size: 21px;
	border-radius: 4.63636px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledLink = styled(Link)`
	font-size: 14px;
	margin-top: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #52B6FF;
    font-family: 'Lexend Deca', sans-serif;
`;