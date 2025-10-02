import React from "react";
import styled from "styled-components";

const FooterConteudo = styled.footer`
    background-color: #835a0aff;
    padding: 20px 0px;
    padding-top: 120px;
    text-align: center;
    font-size: 0.7rem;
    color: #1c0202ff;
    font-family: 'Quicksand', sans-serif;
    margin-top: 120px;
`

function Footer(){
    return(
        <FooterConteudo>
            🤎 { new Date().getFullYear() } Todos os Direitos Reservado - 
            Feito por Prof Gu
        </FooterConteudo>
    )
}

export default Footer;