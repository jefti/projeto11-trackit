import UserContext from "../context/userContext";
import { useContext } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import styled from "styled-components";

export default function PaginaHabitos(){
    const {usuario, setUsuario} = useContext(UserContext);
    const {name, id, image,email,token} = usuario;

    return (
        <> 
            <Header/>
            <HabitosBody>Hábitos</HabitosBody>
            <Footer></Footer>
        </>
    );
}

const HabitosBody = styled.div`
    padding-top: 70px;
    box-sizing: border-box;
    height: 100vh;
    background-color: #E5E5E5;

`