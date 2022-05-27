import logo from "../../Assets/logo.png"
import { Link } from "react-router-dom";
//import Input from "./Input";
//import Button from "./Button";
import styled from "styled-components";

export default function Login () {
	return (
		<LoginContainer>
			<Logo src={logo} alt={'logo'} height={178} width={180}/>
			<div>
				<Input type='email' placeholder='email'/>
				<Input type='password' placeholder='senha'/>
				<button>Entrar</button>
				<Link to='/cadastro'>Não tem uma conta? Cadastre-se!</Link>
			</div>
		</LoginContainer>
	);
}

const LoginContainer = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	flex-direction: column;
	background-color: #E5E5E5;
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
	padding: 10px;
	margin-bottom: 6px;
	margin-left: 30px;
	border-radius: 5px;

	::placeholder {
		color: #D5D5D5;
		font-size: 20px;
		font-family: 'Lexend Deca', sans-serif;
	}
`;

/*
const StyledLink = styled(Link)`
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #52B6FF;
    font-family: 'Lexend Deca', sans-serif;
`;
 */