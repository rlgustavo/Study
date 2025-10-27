import React from "react";
import styled from "styled-components";
import Botao from "./botao";

const TextoPrincipal = styled.p`
    font-size: 1.2rem;
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, vitae?
            </TextoPrincipal>
            <Botao 
                pagina="/desafio"
                texto="ir para desafio"
            />
        </>
    )

}

//Exportar a Função
export default Texto;