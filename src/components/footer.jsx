import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../context/userContext";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import BarraProgresso from "./barraProgresso";

export default function Footer(){
    const {listaDiaria} = useContext(UserContext);
    let total = listaDiaria.length;
    let feitos = 0;
    let porcentagem = 0;
    for(let i=0; i<total; i++){
        if(listaDiaria[i].done){
            feitos= feitos+1;
        }
    }
    if(feitos !== 0){
        porcentagem= Math.trunc(100*feitos/total);
    }
    console.log('porcentagem é '+ porcentagem);
    return(
        <FooterBar data-test="menu" >
            <p><StyledLink to={"/habitos"} data-test="habit-link">Hábitos</StyledLink></p>
            <StyledHoje to={"/hoje"} data-test="today-link" >
                <BarraProgresso porcentagem={porcentagem}></BarraProgresso>
            </StyledHoje>
            <p><StyledLink to={"/historico"} data-test="history-link">Histórico</StyledLink></p>
        </FooterBar>
    );
}

const FooterBar = styled.div`
    box-sizing: border-box;
    background-color: white;
    height: 70px;
    
    width: 100%;
    position: fixed;
    bottom: 0px;
    left: 0px;
    z-index: 100;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 30px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    margin: 1rem;
    position: relative;
    color:#52B6FF;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 17.98px;
`;

const StyledHoje = styled(Link)`
    width: 90px;
    height: 90px;
    border-radius: 90px;
    background-color: #52B6FF;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, 0);
    text-decoration: none;

`