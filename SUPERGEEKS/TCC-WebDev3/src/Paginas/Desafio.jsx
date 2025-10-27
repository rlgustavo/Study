import React, { useEffect, useMemo, useState }  from "react";
import styled from "styled-components";
import Botao from "../Components/botao";

const EXT = ".jpg";
const imagemPadrao =  Array.from(
    { length: 12 }, ( _ , i) => `/foto${i + 1}${EXT}`
);


// ========== Estilos ===========

const Page = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #741111ff;
    color: #5f5050ff;
    padding: 40px 20px;
    min-height: 100vh;
`

const Titulo = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 40px;
    font-weight: bold;
    color: #fff;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns:  repeat(4, minmax(88px, 140px));
    grid-template-rows: repeat(3, 1fr);
    gap: 32px;
    justify-content: center;
`

const Card = styled.button`
    position: relative;
    width: 100%;
    aspect-ratio: 1/1;
    border: 0;
    cursor: pointer;
    border-radius: 14px;
    overflow: hidden;
    background: #5b2100;
`

const Content = styled.div`
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Bar = styled.div`
    display: flex;
    gap: 32px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`


function Desafio() {
    const images = useMemo( () => imagemPadrao, []);

    //verificar se ta visivel ou não
    const [visivel, setVisivel] = useState( () => Array(12).fill(false) );

    const toggle = ( i ) => {
        setVisivel( (previa) => previa.map(( v , index ) => ( index === i ? !v : v ) ) );
    }

    return(
        <Page>
                <Titulo> BEM VINDO AO DESAFIO </Titulo>
                
                <Grid>
                    {images.map( ( src, i ) => (
                        <Card  key={i} onClick={() => toggle(i)} aria-label={`Carta ${i + 1}`} >
                            <Content>
                                {visivel[i] ? <Img src={src}/> : null}
                            </Content>
                        </Card>
                    ))}
                </Grid>

                <Bar>
                    <Botao 
                        pagina="/home"
                        texto="ir para home"
                    />            
                    <Botao 
                        pagina="/"
                        texto="ir para o Inicio"
                    />
                </Bar>
        </Page>
    )
}

export default Desafio;