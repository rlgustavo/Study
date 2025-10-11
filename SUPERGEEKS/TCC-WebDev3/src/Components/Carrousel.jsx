import React from 'react';
import styled from 'styled-components';

//Importando Fotos
import foto1 from '../Assets/foto1.jpg';
import foto2 from '../Assets/foto2.jpg';
import foto3 from '../Assets/foto3.jpg';
import foto4 from '../Assets/foto4.jpg';
import foto5 from '../Assets/foto5.jpg';
import foto6 from '../Assets/foto6.jpg';
import foto7 from '../Assets/foto7.jpg';

const Container = styled.section`
    margin-top: 30px;
    padding: 10px 0;
    overflow-x: auto;
    white-space: nowrap;
    scrollbar-width: none;
`

const Foto = styled.img`
    height: 300px;
    width: auto;
    border-radius: 16px;
    margin: 0 10px;
`

const imagens = [foto1, foto2, foto3, foto4, foto5, foto6, foto7];




function Carrousel(){
    return(
        <>
            <Container>
                    {
                        imagens.map( (src, index) => (
                          <Foto  key={index} src={src}  />  
                        ) )
                    }
            </Container>
        </>
    );

}

export default Carrousel;