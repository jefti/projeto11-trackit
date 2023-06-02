import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from  'react-loader-spinner';

export default function PaginaCadastro(){
    const[email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const[name, setName] = useState('');
    const [image,setImage] = useState('');
    const [desabilitar, setDesabilitar] = useState(false);
    const nav = useNavigate();

    function cadastrar(e){
        if(email && name && image && password){
            setDesabilitar(true);
            e.preventDefault();
            const obj = {email,name,image,password};
            //console.log(obj);
            const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';
            const Promise = axios.post(url,obj);
            Promise.then(()=>{
                nav('/');
            });
            
            Promise.catch(erro=> {
                console.log(erro);
                const resposta = erro.response.data.message;
                alert(resposta);
                setDesabilitar(false);
            });
        } else {
            alert('preencha todos os campos para seguir!')
        }
    }

    return(
        <EstiloPagina>
        <img src="assets/logo.png"></img>
        <Formulario onSubmit={cadastrar}>
            <CaixaTexto
                data-test="email-input"
                placeholder="email"
                type="email"
                value ={email}
                onChange= { e=> setEmail(e.target.value)}
            ></CaixaTexto>

            <CaixaTexto
                data-test="password-input"
                placeholder="senha"
                type="password"
                value ={password}
                onChange= { e=> setPassword(e.target.value)}
            ></CaixaTexto>

            <CaixaTexto
                data-test="user-name-input" 
                placeholder="nome"
                type="text"
                value ={name}
                onChange= { e=> setName(e.target.value)}
            ></CaixaTexto>

            <CaixaTexto 
                data-test="user-image-input" 
                placeholder="foto"
                type="text"
                value ={image}
                onChange= { e=> setImage(e.target.value)}
            ></CaixaTexto>


            <BotaoEstilizado type="submit" disabled= {desabilitar} data-test="signup-btn">
                {desabilitar
                ? <ThreeDots height="13"width="50" redius="90"color="white" ariaLabel="three-dots-loading" visible={true}/>
                : "Cadastrar"}
            </BotaoEstilizado>

            <Link to={"/"}><TextoCadastro data-test="login-link">Já tem uma conta? faça o login!</TextoCadastro></Link>
        </Formulario>


        </EstiloPagina>
    );
}

const EstiloPagina = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 35px;

    img{
        height: 180px;
        width: 180px;
        margin: 32px;
    }
`
const Formulario = styled.form`
    display: flex;
    flex-direction: column;
`
const CaixaTexto = styled.input`
    box-sizing: border-box;
    width: 300px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin: 3px;
    padding: 11px   ;

    ::placeholder,
  ::-webkit-input-placeholder {
    color:#DBDBDB;
    font-size: 20px;
    font-weight: 400;
  }
  :-ms-input-placeholder {
    color:#DBDBDB;
    font-size: 20px;
    font-weight: 400;
  }
`

const BotaoEstilizado = styled.button`
    width: 300px;
    height: 45px;
    background: #52B6FF;
    border-radius: 5px;
    border: none;
    margin: 3px;
    color: white;
    font-Weight: 400;
    font-Size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${props => props.disabled? "0.7" : "1"};
`

const TextoCadastro = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin-top: 25px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
`