import UserContext from "../context/userContext";
import { useContext } from "react";

import styled from "styled-components";

export default function Header(){

    const {usuario, setUsuario} = useContext(UserContext);
    const {name, id, image,email,token} = usuario;

    return (
    <HeaderBar data-test="header">
        <p>TrackIt</p>
        <img src={image} alt="profile" data-test="avatar"/>
    </HeaderBar>
    );
}

const HeaderBar = styled.div`
    background-color: #126BA5;
    height: 70px;
    width: 100%;
    padding: 10px 18px;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 100;
    p{
        font-family: 'Playball';
        color: white;
        font-size: 40px;
    }
    img{
        width: 50px;
        height: 50px;
        border-radius: 100px;
        object-fit: contain;
    }
`