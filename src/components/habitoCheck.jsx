import styled from "styled-components"
import UserContext from "../context/userContext";
import { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from  'react-loader-spinner';

export default function HabitoCheck(props){

    const {usuario} = useContext(UserContext);
    const {token} = usuario;

    const {done, currentSequence, highestSequence,id, name } = props.el;
    const{refresh} = props;
    const[desabilitar,setDesabilitar] = useState(false);

    function AlterarEstado(){
        setDesabilitar(true);
        let aut = 'Bearer '+ token;
        const request = {headers:{
            Authorization: aut
        }};

        if(done){
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
            const promise = axios.post(URL,{},request);
            
            promise.catch(erro => {
                //console.log(erro);
                setDesabilitar(false);
            });
            
            promise.then( resp => {
                //console.log(resp);
                setDesabilitar(false);
                refresh();
            });



        }else{
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
            const promise = axios.post(URL,{},request);
            
            promise.catch(erro => {
                //console.log(erro);
                setDesabilitar(false);
            });
            
            promise.then( resp => {
                //console.log(resp);
                setDesabilitar(false);
                refresh();
            });
        }
    }




    return (
    <HabitoContainer  data-test="today-habit-container" >
        <TextoContainer>
            <div>
                <NomeHabito data-test="today-habit-name" >{name}</NomeHabito>
            </div>
            <div>
            {(done)
            ? <TextoInformacao >Sequência atual: <span data-test="today-habit-sequence">{currentSequence} dias</span></TextoInformacao>
            : <TextoInformacao data-test="today-habit-sequence" >Sequência atual: {currentSequence} dias</TextoInformacao>}
            
            {(currentSequence === highestSequence && currentSequence > 0)
            ?<TextoInformacao >Seu recorde: <span data-test="today-habit-record">{highestSequence} dias</span></TextoInformacao>
            : <TextoInformacao data-test="today-habit-record">Seu recorde: {highestSequence} dias</TextoInformacao>
            } 
            
            </div>
        </TextoContainer>
        <BotaoSelecao done={done}>
            <button onClick={()=> AlterarEstado()} disabled={desabilitar} data-test="today-habit-check-btn">


                    <ion-icon name="checkmark-outline"></ion-icon>
                
            </button>
        </BotaoSelecao>
    </HabitoContainer>
    )
}

const HabitoContainer = styled.div`
    margin: 5px 0px 5px 0px;
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
`
const TextoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const NomeHabito = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
`

const TextoInformacao = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #666666;
    span{
        color: #8FC549;
    }
`

const BotaoSelecao = styled.div`
button{
    width: 69px;
    height: 69px;
    background: ${(props) => (props.done?"#8FC549":"#E7E7E7")};
    border-radius: 5px;
    margin-left: 15px;
    border: none;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:60px;
}

`