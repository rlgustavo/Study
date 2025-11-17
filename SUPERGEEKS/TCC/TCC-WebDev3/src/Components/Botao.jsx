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
  background: #6e4a33;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 20px 26px;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  transition: background .15s ease, transform .05s ease, opacity .15s ease;

  display: block;      /* torna bloco */
  margin: 0 auto;      /* centraliza na horizontal */

  &:hover { background: #5c3d2b; }
  &:active { transform: translateY(1px); }
  &:focus-visible { outline: 2px solid #e7d6c8; outline-offset: 2px; }
  &:disabled { opacity: .6; cursor: not-allowed; }
`;