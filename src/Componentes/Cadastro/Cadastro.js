import logo from "../../Assets/logo.png"

import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Cadastro () {
	const navigate = useNavigate();
	const [form, setForm] = useState({
		email: '',
		password: '',
		name: '',
		image: '',
	});

	function handleForm (e) {
		setForm({...form, [e.target.name]: e.target.value,});
	}

	function doSubmit (event) {
		event.preventDefault();
		console.log(form.email);
		console.log(form.password);
		const promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', {
			email: form.email, name: form.name, image: form.image, password: form.password
		});
		promisse.then((response) => {
			const {data} = response;
			console.log(data);
			navigate('/');
		})
		.catch(error => console.log(error));
	}

	return (
		<Form onSubmit={doSubmit}>
			<Logo src={logo} alt={'logo'} height={178} width={180}/>
			<Input type='email' placeholder='email' name='email' required value={form.email} onChange={handleForm}/>
			<Input type='password' placeholder='senha' name='password' required value={form.password} onChange={handleForm}/>
			<Input type='text' placeholder='nome' name='name' required value={form.name} onChange={handleForm}/>
			<Input type='url' placeholder='foto' name='image' required value={form.image} onChange={handleForm}/>
			<Button type='submit'>Cadastrar</Button>
			<StyledLink to='/'>Já possui uma conta? Faça login!</StyledLink>
		</Form>
	);
}

const Form = styled.form`
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