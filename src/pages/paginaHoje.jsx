import Footer from "../components/footer";
import Header from "../components/header";
import UserContext from "../context/userContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import HabitoCheck from "../components/habitoCheck";

export default function PaginaHoje(){
    const {usuario, listaDiaria, setListaDiaria,DiaName, dataAtual,porcentagem} = useContext(UserContext);
    const {token} = usuario;

    const[recarregar, setRecarregar] = useState(0);
    const refresh = function(){
        let aux = recarregar+1;
        setRecarregar(aux);
    };

    const ListaDinamica = listaDiaria.map((el, id)=> <HabitoCheck key={el.id} el={el} refresh={refresh}></HabitoCheck>);
   

    useEffect(()=> {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        let aut = 'Bearer '+ token;
        const request = {headers:{
            Authorization: aut
        }};
        const promise = axios.get(URL,request);
        promise.then(resp=> {
            console.log(resp.data);
            setListaDiaria(resp.data);
        });
        promise.catch(erro => console.log(erro));


    },[recarregar]);


    return (
        <>
            <Header></Header>
            <PaginaHojeContainer>
                <Titulo data-test="today"> {DiaName}, {dataAtual} </Titulo>
                {(porcentagem === 0) &&
                    <Informacao data-test="today-counter">Nenhum Hábito concluído ainda</Informacao>
                }
                {(porcentagem !== 0) &&
                    <Informacao><span data-test="today-counter">{porcentagem}% dos Hábitos concluídos hoje</span></Informacao>
                }


                <HabitosContainer>
                    {(listaDiaria.length !== 0)&& ListaDinamica }

                </HabitosContainer>
            </PaginaHojeContainer>
            <Footer></Footer>
        </>
    )

}

const PaginaHojeContainer = styled.div`
    padding: 70px 12px 100px 12px;
    box-sizing: border-box;
    min-height: 100vh;
    background-color:#F2F2F2;
    display: flex;
    flex-direction: column;
`


const Titulo = styled.p`
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;
    margin-top:22px;
`

const Informacao = styled.p`
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #BABABA;
    span{
        color: #8FC549;
    }
`

const HabitosContainer = styled.div`
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`