import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


function Pedido () {
    const navigate = useNavigate();
    const aceitar = () => navigate('/home')

    const [posicao, setPosicao] = useState( { top: null , left: null})

    const fugir = () => {
        const larguraMax = window.innerWidth - 120;
        const alturaMax = window.innerHeight - 160;

        const novaLeft = Math.random() * larguraMax;
        const novaTop = Math.random() * alturaMax + 120;

        setPosicao( { top: novaTop, left: novaLeft })
    }

    const isMobile = window.innerWidth <= 600;

    return(
        <Container>
            <PedidoText> 
                Lembrei do seu aniversario e 
                você quer saber qual é o seu presente? 
            </ PedidoText>
            <Botoes>
                <BotaoSim onClick={ aceitar } > SIM </BotaoSim>
                < BotaoNao 
                    onClick={isMobile ? fugir : undefined}
                    onMouseEnter={ !isMobile ? fugir : undefined }  
                    style={ {
                        position: posicao.top === null ? 'relative' : 'absolute',
                        top: posicao.top ?? 'auto',
                        left: posicao.left ?? 'auto'
                    } }
                > 

                NÃO </BotaoNao>
            </Botoes>
        </Container>
    )
}

export default Pedido;


// estilos

const PedidoText = styled.p `
    font-size: 2rem;
    margin: 0 auto;
    text-align: center;
    max-width: 800px;
    color: #0b0a0a;
    margin-bottom: 30px;
`


const Botoes = styled.div`
    display: flex;
    gap: 50px;
    z-index: 2;
`

const BotaoSim = styled.button`
    background-color: #412706ff;
    padding: 10px 20px;
    font-size: 1rem;
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