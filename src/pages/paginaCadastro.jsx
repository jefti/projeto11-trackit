import styled from "styled-components";
import { Link } from "react-router-dom";
export default function PaginaCadastro(){
    return(
        <EstiloPagina>
        <img src="assets/logo.png"></img>
        <Formulario>
            <CaixaTexto placeholder="email"></CaixaTexto>
            <CaixaTexto placeholder="senha"></CaixaTexto>
            <CaixaTexto placeholder="nome"></CaixaTexto>
            <CaixaTexto placeholder="foto"></CaixaTexto>
            <BotaoEstilizado>Cadastrar</BotaoEstilizado>
            <Link to={"/"}><TextoCadastro>Já tem uma conta? faça o login!</TextoCadastro></Link>
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