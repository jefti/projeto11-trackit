import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer(){
    return(
        <FooterBar data-test="menu" >
            <p><StyledLink to={"/habitos"} data-test="habit-link">Hábitos</StyledLink></p>
            <StyledHoje>Hoje</StyledHoje>
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

const StyledHoje = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 90px;
    background-color: #52B6FF;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Lexend Deca';
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;

    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, 0);
`