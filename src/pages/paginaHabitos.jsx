import UserContext from "../context/userContext";
import { useContext, useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import styled from "styled-components";
import CadastrarHabito from "../components/cadastrarHabito";
import MeuHabito from "../components/meuHabito";
import axios from "axios";

export default function PaginaHabitos(){
    const {usuario, setUsuario} = useContext(UserContext);
    const {name, id, image,email,token} = usuario;

    const [refresh, setRefresh] = useState(0);
    const [cadastrar, setCadastrar] = useState(false);
    const [listaHabitos, setListaHabitos] = useState([]);
    console.log(listaHabitos);
    const teste = listaHabitos.map( el => <MeuHabito key = {el.id} el={el}></MeuHabito>);

    useEffect(()=>{
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        let aut = 'Bearer '+ token;
        //console.log(aut);
        const request = {headers:{
            Authorization: aut
        }};
        //console.log(request);
        const promise = axios.get(URL, request);
        
        promise.then((res)=> {
            //console.log(res.data)
            let listaResposta = res.data;
            setListaHabitos(listaResposta);
        });

        promise.catch((err)=> console.log('erro'));
    },
    [refresh]);

    function recarregar(){
        let aux = refresh +1;
        setRefresh(aux);
    }

    return (
        <> 
            <Header/>
            <HabitosBody>
                <CreateBox>
                    <p>Meus hábitos</p>
                    <button onClick={()=> cadastrar?setCadastrar(false):setCadastrar(true)} data-test="habit-create-btn">+</button>
                    
                </CreateBox>
                {cadastrar && <CadastrarHabito setCadastrar={setCadastrar} recarregar={recarregar}/>}


                {teste}
                {(listaHabitos.length === 0) &&
                    <Aviso>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </Aviso>
                }
            </HabitosBody>
            <Footer></Footer>
        </>
    );
}


const HabitosBody = styled.div`
    padding-top: 70px;
    padding-bottom: 100px;
    box-sizing: border-box;
    min-height: 100vh;
    background-color:#F2F2F2;
    display: flex;
    align-items: center;
    flex-direction: column;

`

const CreateBox = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 21px 17px;
     p{
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 23px;
        color: #126BA5;
     }
     button{
        width: 40px;
        height: 35px;
        border-radius: 5px;
        border: none;
        background-color: #52B6FF;
        font-size: 27px;
        color: white;
     }
`

const Aviso = styled.div`
    padding: 7px 18px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #666666;

`

