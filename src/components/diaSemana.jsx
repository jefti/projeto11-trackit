import styled from "styled-components"
import { useState } from "react";

export default function DiaSemana (props){
    const {selecionado, listaDias, setListaDias, index, valor} = props;

    function Ajustar(){
        let aux = [...listaDias];
        if(selecionado){
            aux[index] = false;
            setListaDias(aux);
        } else {
            aux[index] = true;
            setListaDias(aux);
        }
    }
    
    return (
    <DiaBox onClick={()=> Ajustar()} selecionado={selecionado} data-test="habit-day">
        {valor}
    </DiaBox>
    )
}

const DiaBox = styled.div`
        width: 30px;
        height: 30px;
        background: ${ props => props.selecionado ? "#CFCFCF" : "white"};
        border: 1px solid ${ props => props.selecionado ? "#D5D5D5" : "#CFCFCF"};
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
        margin: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${ props => props.selecionado ? "white" : "#DBDBDB"};;
`