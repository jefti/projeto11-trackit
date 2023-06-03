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

	const [listaDiaria, setListaDiaria] = useState([]);
    let concluidas = 0;
    for(let i = 0; i< listaDiaria.length;i++){
        if(listaDiaria[i].done){
            concluidas++;
        }
    }
    let porcentagem = Math.trunc(100*(concluidas/(listaDiaria.length)));




	const data = new Date();
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();
    let dataAtual = dia + '/' + mes + '/' + ano;
    let DiaNum = data.getDay();
    let DiaName = '';
	switch (DiaNum){
        case 0:
            DiaName = 'Domingo';
            break;
        case 1:
            DiaName = 'Segunda';
            break;
        case 2:
            DiaName = 'Terça';
            break;
        case 3:
            DiaName = 'Quarta';
            break;
        case 4:
            DiaName = 'Quinta';
            break;
        case 5:
            DiaName = 'Sexta';
            break;
        case 6:
            DiaName = 'Sábado';
            break;
        Default:
            DiaName = 'erro';
    	}



	return (
		<UserContext.Provider value={{usuario, setUsuario, listaDiaria, setListaDiaria, DiaName, dataAtual, porcentagem}}>
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
