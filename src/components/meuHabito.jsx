import styled from "styled-components";

export default function MeuHabito(props){
    const {days, id, name} = props.el;
    return (
        <MeuHabitoContainer>
            {(name[0].toUpperCase() + name.slice(1))}
            <DiaBox>
                D
            </DiaBox>
        </MeuHabitoContainer>
    )
}

const MeuHabitoContainer = styled.div`
    width: 340px;
    height: 90px;
    margin: 10px;
    background-color: white;
    border-radius: 5px;
    padding: 12px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;

    
`

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