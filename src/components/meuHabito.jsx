import UserContext from "../context/userContext";
import styled from "styled-components";
import DiaEstatico from "./diaEStatico";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

export default function MeuHabito(props){
    const {usuario} = useContext(UserContext);
    const {token} = usuario;
    const {days, id, name} = props.el;
    const {recarregar, desabilitado} = props;

    const semana = ["D","S","T","Q","Q","S","S"];

    function excluir(){
        const resposta = confirm(`Você realmente que excluir o hábito "${name[0].toUpperCase() + name.slice(1)}" ?`);
        if(resposta){
            const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
            let aut = 'Bearer '+ token;
            const request = {headers:{
                Authorization: aut
            }};
            const promise = axios.delete(url,request);
            promise.then(resp => {
                console.log('deletado');
                console.log(resp);
                recarregar();
            });
            promise.catch( erro => console.log(erro));
        }else {
            console.log('deixa para lá então!')
        }
    }   
    return (
        <MeuHabitoContainer data-teste="habit-container">
            <p data-test='habit-name'>{(name[0].toUpperCase() + name.slice(1))}</p>
            <ListaDias>
                {semana.map( (el,index)=> <DiaEstatico key= {"diaEstatico"+index} conteudo={el} estado ={days.includes(index)}></DiaEstatico>)}
            </ListaDias>
        <button onClick={()=> excluir()} data-test="habit-delete-btn" disabled={desabilitado}><ion-icon name="trash-outline"></ion-icon></button>
        </MeuHabitoContainer>
    )
}

const MeuHabitoContainer = styled.div`
    width: 340px;
    height: 90px;
    margin: 10px;
    background-color: white;
    border-radius: 5px;
    padding: 12px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    position: relative;

    button {
        position: absolute;
        border: none;
        background-color: white ;
        z-index: 80;
        top: 11px;
        right: 10px;
        size: 15px;
    }    
`

const ListaDias = styled.div`
    display: flex;
    margin-top: 8px;
`