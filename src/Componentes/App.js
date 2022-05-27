import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./Cadastro/Cadastro";
import Habitos from "./Habitos/Habitos";
import Login from "./Login/Login";
import Hoje from "./Hoje/Hoje";
import Historico from "./Historico/Historico";

export default function App () {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login/>} />
					<Route path="/cadastro" element={<Cadastro />} />
					<Route path="/habitos" element={<Habitos/>} />
					<Route path="/hoje" element={<Hoje/>} />
					<Route path="/historico" element={<Historico/>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}