import React from "react";
import styled from "styled-components";


function Pedido () {
    return(
        <Container>
            <Botoes>
                <BotaoSim> SIM </BotaoSim>
                <BotaoNao> NÃO </BotaoNao>
            </Botoes>
        </Container>
    )
}

export default Pedido;


// estilos
const Botoes = styled.div`
    display: flex;
    gap: 50px;
    z-index: 2;
`

const BotaoSim = styled.button`
    background-color: #412706ff;
    padding: 10px 20px;
    color: #caa283ff;
    border-radius: 8px;
    border: none;
    z-index: 2;
`

const BotaoNao = styled.button`
    background-color: #c7852fff;
    padding: 10px 20px;
    color: #311703ff;
    border-radius: 8px;
    border: none;
    z-index: 2;
`

const Container = styled.div`
    background-color: #cfc489ff;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
    overflow: hidden;
`