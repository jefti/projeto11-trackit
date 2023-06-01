import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function PaginaLogin(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [desabilitar, setDesabilitar] = useState(false);

    function entrar(e){
        e.preventDefault();
        if(email && password){
            const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
            const obj = {email, password};
            const promise = axios.post(url,obj);
            promise.then(resp => console.log(resp.data));
            promise.catch(erro => {
                console.log(erro.response.data.message);
                alert(erro.response.data.message);
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
                    placeholder="email"
                    type="email"
                    value={email}
                    onChange = {(e)=> setEmail(e.target.value)}
                ></CaixaTexto>

                <CaixaTexto 
                    placeholder="senha"
                    type = "password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                ></CaixaTexto>

                <BotaoEstilizado type="submit" disabled= {desabilitar}>
                    {desabilitar
                    ? <ThreeDots height="13"width="50" redius="90"color="white" ariaLabel="three-dots-loading" visible={true}/>
                    : "Entrar"}
                </BotaoEstilizado>


            </Formulario>
            <Link to={"/cadastro"}><TextoCadastro>Não tem uma conta? Cadastre-se!</TextoCadastro></Link>
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
    font-Size: 20px
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