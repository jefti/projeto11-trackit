import styled from "styled-components"
import DiaSemana from "./diaSemana"
import { useContext, useState } from "react";
import axios from "axios";
import UserContext from "../context/userContext";

export default function CadastrarHabito(props){
    let desabilitado = false;
    const {recarregar} = props;
    const [cadastrar, setCadastrar] = useState(false);
    const [listaDias, setListaDias] = useState([false,false,false,false,false,false,false]);

    const {usuario, reset} = useContext(UserContext);
    const {token} = usuario;

    const [novoHabito, setNovoHabito] = useState('');
    const semana = ['D','S','T','Q','Q','S','S'];

    function Limpar(){
        setListaDias([false,false,false,false,false,false,false]);
        setNovoHabito('');
        setCadastrar(false);
    }

    function EnviarServidor(e){
        desabilitado = true;
        e.preventDefault();
        let listaEnvio = [];
        for(let index = 0; index < listaDias.length; index++ ){
            if(listaDias[index]===true){
                listaEnvio.push(index);
            }
        }
        
        if(listaEnvio.length === 0){
            alert('selecione dias da semana para o hábito');
            desabilitado = false;
        } else if(novoHabito === ''){
            alert('preencha o titulo do novo habito para continuar');
            desabilitado = false;
        }else{
            let obj = {name: novoHabito, days: [...listaEnvio] };
            //console.log(obj.days);
            const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
            let aut = 'Bearer '+ token;
            const request = {headers:{
            Authorization: aut
            }};
            const promise = axios.post(url,obj,request);
            promise.then(resp => {
                //console.log(resp);
                setCadastrar(false);
                setListaDias([false,false,false,false,false,false,false]);
                setNovoHabito('');
                desabilitado = false;
                recarregar();
            });
            promise.catch( erro => {
                console.log(erro);
                desabilitado = false;
            });


        }
    }

    return (

    <>
        <CreateBox>
        <p>Meus hábitos</p>
        <button disabled = {desabilitado} onClick={()=> cadastrar?Limpar():setCadastrar(true)} data-test="habit-create-btn">+</button>
        
        </CreateBox>
        {cadastrar &&
        <Cadastro onSubmit={EnviarServidor} data-test="habit-create-container">
                <InputEstilizado placeholder="nome do hábito" value={novoHabito} id='novoHabito' name='novoHabito' onChange={(e)=> setNovoHabito(e.target.value)} data-test="habit-name-input"  disabled = {desabilitado}></InputEstilizado>
                <ListaDias>
                    {listaDias.map( (el,i) => <DiaSemana key = {i} selecionado = {el} listaDias = {listaDias} setListaDias={setListaDias} index = {i} valor={semana[i]} desabilitado={desabilitado}></DiaSemana>)}
                </ListaDias>
                <ContainerButtons>
                    <BtnCancelar type="button" onClick={()=> Limpar()} data-test="habit-create-cancel-btn"    disabled = {desabilitado}>Cancelar</BtnCancelar>
                    <BtnEnviar  type="submit" data-test="habit-create-save-btn"    disabled = {desabilitado} >Salvar</BtnEnviar >
                </ContainerButtons>
        </Cadastro>
        }
    </>
    )
}

const Cadastro = styled.form`
    width:90%;
    height: 180px;
    background-color: white;
    border-radius: 5px;
    padding: 18px;
`

const InputEstilizado = styled.input`
    margin-bottom: 5px;
    padding: 10px;
    box-sizing: border-box;
    width: 305px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
    ::-webkit-input-placeholder {
        color:#DBDBDB;
        vertical-align: center;
    }
`

const ListaDias = styled.div`
    display: flex;
`
const ContainerButtons = styled.div`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    margin-top: 30px;
`
const BtnCancelar = styled.button`
    background-color: white;
    border: none;
        width: 84px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #52B6FF;
        margin-right: 23px;
`

const BtnEnviar = styled.button`
        width: 84px;
        height: 35px;
        background-color: #52B6FF;
        border-radius: 5px;
        border: none;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 16px;
        color: white;

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