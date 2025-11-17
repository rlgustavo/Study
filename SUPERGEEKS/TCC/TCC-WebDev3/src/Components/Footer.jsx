// Footer.jsx
import React from "react";
import styled from "styled-components";

const FooterBar = styled.footer`
  /* Paleta */
  --brown-800: #4b3326;
  --brown-700: #5c3d2b;
  --cream-30:  rgba(242, 230, 221, .30);
  --cream-90:  #f6ebe3;

  background:
    radial-gradient(120% 160% at 50% 0%, rgba(255,255,255,.06), transparent 40%),
    linear-gradient(180deg, var(--brown-700), var(--brown-800));
  color: var(--cream-90);

  padding: 48px 16px 28px;
  margin-top: 120px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  box-shadow:
    0 -10px 30px rgba(0,0,0,.25),
    inset 0 1px 0 rgba(255,255,255,.08);
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  font-family: 'Quicksand', system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
`;

const Line = styled.div`
  height: 1px;
  margin-bottom: 16px;
  background: linear-gradient(90deg, transparent, var(--cream-30), transparent);
`;

const Copy = styled.small`
  display: block;
  font-size: .85rem;
  opacity: .92;

  a{
    color: #f2e6dd;
    text-decoration: none;
  }
  a:hover{ text-decoration: underline; }
`;

function Footer() {
  return (
    <FooterBar>
      <Inner>
        <Line />
        <Copy>
          🤎 {new Date().getFullYear()} • Todos os direitos reservados — Feito por <a href="#">Prof Gu</a>
        </Copy>
      </Inner>
    </FooterBar>
  );
}

export default Footer;
