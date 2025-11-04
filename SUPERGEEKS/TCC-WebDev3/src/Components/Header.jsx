// Header.jsx
import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0%   { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`;

const Wrap = styled.header`
  display: grid;
  place-items: center;
  text-align: center;
  padding: 2.5rem 1rem 1.75rem;
`;

const Titulo = styled.h1`
  --c1: #6e4a33; /* marrom */
  --c2: #b58c6f; /* caramelo */
  --c3: #f2e6dd; /* creme */

  margin: 0;
  padding: 0 1rem 1rem;
  font-family: 'Great Vibes', cursive;
  font-size: clamp(2.6rem, 7vw, 5rem);
  line-height: 1;

  /* Gradiente animado no texto */
  background: linear-gradient(90deg, var(--c1), var(--c2), var(--c3), var(--c2), var(--c1));
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${shimmer} 6s linear infinite;

  /* Contorno + brilho sutil p/ legibilidade */
  -webkit-text-stroke: 0.8px rgba(75, 51, 38, 0.25);
  text-shadow: 0 3px 14px rgba(110, 74, 51, 0.35);

  /* Linha decorativa */
  position: relative;
  &::after{
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: min(320px, 70vw);
    height: 10px;
    border-radius: 999px;
    background:
      radial-gradient(circle at 10% 50%, rgba(181,140,111,.28), transparent 45%),
      radial-gradient(circle at 90% 50%, rgba(181,140,111,.28), transparent 45%),
      linear-gradient(90deg, transparent, rgba(242,230,221,.95), transparent);
    filter: drop-shadow(0 6px 12px rgba(75,51,38,.25));
  }
`;

const Sub = styled.p`
  margin: .75rem 0 0;
  font-size: clamp(1rem, 2.2vw, 1.25rem);
  color: #5c3d2b;
  opacity: .9;
`;

function Header() {
  return (
    <Wrap>
      <Titulo>Feliz Aniversário</Titulo>
      <Sub>Que o seu dia seja doce e inesquecível.</Sub>
    </Wrap>
  );
}

export default Header;
