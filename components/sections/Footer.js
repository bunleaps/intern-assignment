import React from "react";
import styled from "styled-components";

const FooterSectionStyled = styled.section`
  width: 100vw;
  height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #dfb5a2;
  color: white;

  span {
    font-family: Lato, sans-serif;
    font-size: 14px;
    line-height: 20px;
  }

  h1 {
    margin: 0;
    font-family: Playfair Display, serif;
    font-size: 63px;
    line-height: 76px;
  }
`;

function Footer() {
  return (
    <FooterSectionStyled>
      <span>Next Story</span>
      <h1>Zahra</h1>
    </FooterSectionStyled>
  );
}

export default Footer;
