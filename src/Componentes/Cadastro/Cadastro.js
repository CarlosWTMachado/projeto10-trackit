import logo from "../../Assets/logo.png"

export default function Cadastro () {
	return (
		<div>
			<div>
				<img src={logo} alt={'logo'} height={110} width={180}/>
			</div>
			<input type='email' placeholder='email'/>
			<input type='password' placeholder='senha'/>
			<input type='text' placeholder='nome'/>
			<input type='url' placeholder='foto'/>
			<button>Cadastrar</button>
			<p>Já possui uma conta? Faça login!</p>
		</div>
	);
}

//<Link to='/'>Já possui uma conta? Faça login!</Link>