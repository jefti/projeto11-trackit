import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaLogin from './pages/paginalogin';
import PaginaCadastro from './pages/paginaCadastro';
import PaginaHabitos from './pages/paginaHabitos';
import axios from 'axios';
import UserContext from './context/userContext';
import PaginaHistorico from './pages/paginaHistorico';
import PaginaHoje from './pages/paginaHoje';

function App() {

	const [usuario, setUsuario] = useState({id: '',name: "",image: "",email: "",password: "",token: ""});
    const [listaDiaria, setListaDiaria] = useState([]);

    const[controle, setControle] = useState(0);
    
    let concluidas = 0;
    
    for(let i = 0; i< listaDiaria.length;i++){
        if(listaDiaria[i].done){
            concluidas++;
        }
    }

    let porcentagem = Math.trunc(100*(concluidas/(listaDiaria.length)));
    if(!porcentagem){
        porcentagem = 0;
    }

    const [recarregarId, setRecarregar] = useState(0);

    function reset(){
        let aux = recarregarId+1;
        setRecarregar(aux);
    }


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


         function RecarregarHabitosHoje (){
            const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
            let aut = 'Bearer '+ usuario.token;
            const request = {headers:{
                Authorization: aut
            }};
            const promise = axios.get(URL,request);
            promise.then(resp=> {
                console.log(resp.data);
                setListaDiaria(resp.data);
            });
            promise.catch(erro => console.log(erro));
        }





	return (
		<UserContext.Provider value={{usuario, setUsuario, listaDiaria, setListaDiaria, DiaName, dataAtual, porcentagem, reset,recarregarId, RecarregarHabitosHoje }}>
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
