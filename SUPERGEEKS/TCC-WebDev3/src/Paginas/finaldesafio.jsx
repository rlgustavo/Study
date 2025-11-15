import React, { useMemo, useState } from "react";
import styled from "styled-components";



const EXT = ".jpg";

const defaultImages = Array.from({ length: 12 }, (_, i) => `/foto${i + 1}${EXT}`);

// ======= Estilos =======
const Page = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 48px 20px 64px;
  background: #e4b17f; /* bege */
`;

const Title = styled.h1`
  font-size: clamp(1.6rem, 2vw + 1rem, 2.2rem);
  font-weight: 800;
  color: #5a2a0a;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(88px, 140px));
  grid-template-rows: repeat(3, 1fr);
  gap: 16px;
  justify-content: center;
`;

const Card = styled.button`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  border: 0;
  cursor: pointer;
  border-radius: 14px;
  overflow: hidden;
  background: #5b2100; /* cor do verso */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  outline-offset: 4px;
`;

const Content = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Bar = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  background: #5a2a0a;
  color: #f7e7d7;
  border: none;
  padding: 10px 16px;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
`;

// ======= Página/Componente =======
export default function Desafio() {
  const images = useMemo(() => defaultImages, []);

  // Visibilidade de cada carta (true = mostra imagem)
  const [visible, setVisible] = useState(() => Array(12).fill(false));

  const toggle = (i) => {
    setVisible((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  };

  const hideAll = () => setVisible(Array(12).fill(false));
  const showAll = () => setVisible(Array(12).fill(true));

  return (
    <Page>
      <Title>Desafio dos Padrinhos</Title>

      <Grid>
        {images.map((src, i) => (
          <Card key={i} onClick={() => toggle(i)} aria-label={`Carta ${i + 1}`}>
            <Content>{visible[i] ? <Img src={src} alt="" /> : null}</Content>
          </Card>
        ))}
      </Grid>

      <Bar>
        <Button onClick={hideAll}>Esconder todas</Button>
        <Button onClick={showAll}>Mostrar todas</Button>
      </Bar>
    </Page>
  );
}
