import React from 'react';
import styled from 'styled-components';

const Titulo = styled.h1`
    text-align: center;
    padding: 2rem;
    font-family: 'Great Vibes', cursive;
    font-size: 3rem;
`


function Header() {
    return (
        <>
            <Titulo> Feliz Aniversario </Titulo>
        </>
    )
}


export default Header;