import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    text-align: center;
    margin: 60px 0;
    color: #9f1c1cff;
`

const Titulo = styled.h1`
    font-family: 'Great Vibes', cursive;
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #060606;
`
const Titulo2 = styled.h1`
    font-family: 'Great Vibes', cursive;
    font-size: 1.5rem;
    margin-bottom: 20px;
    font-weight: 100;
    color: #060606;
`

const Relogio = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
`

const Unidade = styled.div`
    background-color: #4c1d0d;
    color: #fff;
    border-radius: 15px;
    padding: 15px 25px;
    min-width: 90px;
    font-family: 'Arial', sans-serif;
`

const Numero = styled.div`
    font-size: 2rem;
    font-weight: bold;
`
const Label = styled.div`
    font-size: 0.85rem;
    margin-top: 5px;
`



function Contador(){
    const [tempo, setTempo] = useState(
        {
            anos: 0,
            meses: 0,
            dias: 0,
            horas: 0,
            minutos: 0,
            segundos: 0,
        }
    );

    useEffect( () => {
        const dataInicio = new Date( '2024-09-26T00:00:00' )

        const atualizarTempo = () => {
            const agora = new Date();

            let anos = agora.getFullYear() - dataInicio.getFullYear();
            let meses = agora.getMonth() - dataInicio.getMonth();
            let dias = agora.getDate() - dataInicio.getDate();

            if( dias < 0) {
                meses--;
                dias += new Date(agora.getFullYear(), agora.getMonth, 0).getDate();
            }

            if(meses < 0) {
                anos--;
                meses += 12;
            }


            const hoje = new Date();
            const tempoPassado = hoje.getTime() - dataInicio.getTime();
            const totalSegundos = Math.floor(tempoPassado / 1000);

            const horas = Math.floor((totalSegundos % 86400) / 3600);
            const minutos = Math.floor((totalSegundos % 3600) / 60);
            const segundos = totalSegundos % 60;

            setTempo( {anos, meses, dias, horas, minutos, segundos});
        };

        atualizarTempo();
        const timer = setInterval( atualizarTempo, 1000 );
        return () => clearInterval(timer);
    
    }, []);




    return(
        <Container>
            <Titulo> 04.11.2025 </Titulo>
            <Titulo2> Compartilhando Momentos Há </Titulo2>

            <Relogio>
                    <Unidade>
                        <Numero> {tempo.anos}  </Numero>
                        <Label> ANOS </Label>
                    </Unidade>

                    <Unidade>
                        <Numero> {tempo.meses}  </Numero>
                        <Label> MESES </Label>
                    </Unidade>

                    <Unidade>
                        <Numero> {tempo.dias}  </Numero>
                        <Label> DIAS </Label>
                    </Unidade>

                    <Unidade>
                        <Numero> {tempo.horas}  </Numero>
                        <Label> HORAS </Label>
                    </Unidade>

                    <Unidade>
                        <Numero> {tempo.minutos}  </Numero>
                        <Label> MINUTOS </Label>
                    </Unidade>

                    <Unidade>
                        <Numero> {tempo.segundos}  </Numero>
                        <Label> SEGUNDOS </Label>   
                    </Unidade>
                
            </ Relogio>

        </Container>
    )
}

export default Contador;