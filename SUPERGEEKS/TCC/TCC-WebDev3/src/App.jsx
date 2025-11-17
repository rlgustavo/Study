// App.jsx
import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Header from "./Components/Header";
import Carrousel from "./Components/Carrousel";
import Contador from "./Components/Contador";
import Texto from "./Components/Texto";
import Footer from "./Components/Footer";
import PlayerMusic from "./Components/PlayerMusic";

/* ====== Estilos globais (reset leve + fonte + bg base) ====== */
const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    color: #2b1a12; /* texto básico sobre o fundo claro */
    background:
      radial-gradient(1200px 600px at 10% -10%, rgba(255,255,255,.25), transparent 60%),
      radial-gradient(1000px 500px at 110% 10%, rgba(255,255,255,.18), transparent 55%),
      linear-gradient(180deg, #6e4a33 0%, #5c3d2b 60%, #4b3326 100%); /* marromzinho elegante */
  }
`;

/* ====== Container do app (preenche a tela) ====== */
const AppShell = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;             /* respiro nas bordas do fundo marrom */
`;

/* ====== Miolo central (cartão claro) ====== */
const MainCard = styled.main`
  width: 100%;
  max-width: 1200px;         /* limita largura para ficar mais chique */
  margin: 0 auto;
  flex: 1;                   /* ocupa o espaço entre topo e rodapé */
  background: #faf6f2;       /* tom creme para contraste com marrom */
  border-radius: 20px;
  padding: 24px;
  box-shadow:
    0 12px 40px rgba(0,0,0,.28),
    0 2px 8px rgba(0,0,0,.14);
  
  /* Responsividade suave */
  @media (min-width: 768px) { padding: 32px; border-radius: 24px; }
  @media (min-width: 1024px){ padding: 40px; }
`;

/* ====== Cabeçalho do cartão (opcional) ====== */
const CardHeader = styled.div`
  margin-bottom: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppShell>
        <PlayerMusic />
        <MainCard>
          <CardHeader>
            <Header />
          </CardHeader>

          <Carrousel />
          <Contador />
          <Texto />
        </MainCard>
        <Footer />
      </AppShell>
    </>
  );
}

export default App;
