import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Botao({
    pagina = "/",
    texto = "Texto"
}){

    const navigate = useNavigate();
    function destino(){
        navigate(pagina)
    }

    return(
        <>
            <BotaoContainer onClick={destino}>
                {texto}
            </BotaoContainer>
        </>
    )
}

export default Botao;

// estilos

const BotaoContainer = styled.button`


`