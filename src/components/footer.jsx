import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer(){
    return(
        <FooterBar>
            <p><StyledLink to={"/habitos"}>Hábitos</StyledLink></p>
            <StyledHoje>Hoje</StyledHoje>
            <p><StyledLink to={"/historico"}>Histórico</StyledLink></p>
        </FooterBar>
    );
}

const FooterBar = styled.div`
    box-sizing: border-box;
    background-color: white;
    height: 70px;
    
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0px;

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