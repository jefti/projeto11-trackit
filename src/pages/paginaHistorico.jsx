import Footer from "../components/footer";
import Header from "../components/header";
import styled from "styled-components";

export default function PaginaHistorico(){
    return (
    <>
    <Header data-test="header"></Header>
    <Conteudo>
        <CreateBox>
            <p>Histórico</p>
            <span>
                Em breve você poderá ver o histórico dos seus hábitos aqui!
            </span>
        </CreateBox>
    </Conteudo>
    <Footer></Footer>
    </>
    )
}

const Conteudo = styled.div`
padding-top: 70px;
padding-bottom: 100px;
box-sizing: border-box;
min-height: 100vh;
background-color:#F2F2F2;
display: flex;
align-items: center;
flex-direction: column;
`

const CreateBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 21px 17px;
    flex-direction: column;
     p{
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 23px;
        color: #126BA5;
     }
     span{
        margin-top: 17px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
     }
`