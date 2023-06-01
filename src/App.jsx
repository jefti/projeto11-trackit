import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaLogin from './pages/paginalogin';
import PaginaCadastro from './pages/paginaCadastro';
import PaginaHabitos from './pages/paginaHabitos';

import UserContext from './context/userContext';
import PaginaHistorico from './pages/paginaHistorico';
import PaginaHoje from './pages/paginaHoje';

function App() {

	const [usuario, setUsuario] = useState({
		id: '',
		name: "",
		image: "",
		email: "",
		password: "",
		token: ""
	});





	return (
		<UserContext.Provider value={{usuario, setUsuario}}>
			<BrowserRouter>
				{/* Tudo que tiver uma rota entre Routes */}
				<Routes>
					<Route path="/" element={<PaginaLogin />} />
					<Route path="/cadastro" element={<PaginaCadastro />} />
					<Route path="/habitos" element={<PaginaHabitos/>} />
					<Route path="/historico" element={<PaginaHistorico/>} />
					<Route path="/hoje" element={<PaginaHoje/>} />

				</Routes>
			</BrowserRouter>
		</UserContext.Provider>
	);
}

export default App
