import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaLogin from './pages/paginalogin';
import PaginaCadastro from './pages/paginaCadastro';

function App() {


	return (
		<BrowserRouter>
			{/* Tudo que tiver uma rota entre Routes */}
			<Routes>
				<Route path="/" element={<PaginaLogin />} />
        		<Route path="/cadastro" element={<PaginaCadastro />} />

			</Routes>
		</BrowserRouter>
	);
}

export default App
