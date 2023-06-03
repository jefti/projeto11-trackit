import styled from "styled-components";

export default function DiaEstatico(props){
    const {estado,conteudo} = props;
    
    return (
    <DiaBox estado={estado} data-test="habit-day">
        {conteudo}
    </DiaBox>
    );
}

const DiaBox = styled.div`
        width: 30px;
        height: 30px;
        background: ${ props => props.estado ? "#CFCFCF" : "white"};
        border: 1px solid ${ props => props.estado ? "#D5D5D5" : "#CFCFCF"};
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
        color: ${ props => props.estado ? "#FFFFFF" : "#DBDBDB"};;
`