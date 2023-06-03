import styled from "styled-components";
import { Link,useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import UserContext from "../context/userContext";
import { ThreeDots } from  'react-loader-spinner';

export default function PaginaLogin(){

	const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [desabilitar, setDesabilitar] = useState(false);

    const {usuario, setUsuario} = useContext(UserContext);

    const nav = useNavigate();

    function entrar(e){
        e.preventDefault();
        if(email && password){
            setDesabilitar(true);
            const obj = {email, password};
            const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
            const promise = axios.post(url,obj);
            promise.then(resp => {
                //console.log(resp.data);
                const user = {...resp.data};
                setUsuario(user);
                nav("/hoje");
            });

            promise.catch(erro => {
                console.log(erro.response.data.message);
                alert(erro.response.data.message);
                setDesabilitar(false);
            });
        } else {
            alert('preencha os campos para prosseguir!')
        }

    }

    return (
    <EstiloPagina>
            <img src="assets/logo.png"></img>
            <Formulario onSubmit={entrar}>
                <CaixaTexto
                    disabled={desabilitar}
                    data-test = "email-input" 
                    placeholder="email"
                    type="email"
                    value={email}
                    id='email'
                    onChange = {(e)=> setEmail(e.target.value)}
                ></CaixaTexto>

                <CaixaTexto 
                    disabled={desabilitar}
                    placeholder="senha"
                    data-test = "password-input"
                    type = "password"
                    id = 'password'
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                ></CaixaTexto>

                <BotaoEstilizado type="submit" disabled= {desabilitar} data-test="login-btn">
                    {desabilitar
                    ? <ThreeDots height="13"width="50" redius="90"color="white" ariaLabel="three-dots-loading" visible={true}/>
                    : "Entrar"}
                </BotaoEstilizado>


            </Formulario>
            <TextoCadastro><Link to={"/cadastro"} data-test="signup-link">Não tem uma conta? Cadastre-se!</Link></TextoCadastro>
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
    margin-top: 25px;
a{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #52B6FF;
}

`