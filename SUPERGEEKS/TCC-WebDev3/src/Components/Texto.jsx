import React from "react";
import styled from "styled-components";
import Botao from "./botao";

const TextoPrincipal = styled.p`
    font-size: 1.7rem;
    margin: 0 auto;
    text-align: center;
    max-width: 800px;
    color: #000;
    font-style: italic;
    line-height: 1.8;
`

//Criar a Função
function Texto(){
    return(
        <> 
            <TextoPrincipal>
                Parabens Prof Gu - você é muito querido pela gente
            </TextoPrincipal>   
            <Botao 
                pagina="/desafio"
                texto="Click Aqui"
            />
        </>
    )

}

//Exportar a Função
export default Texto;