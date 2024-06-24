// src/components/Footer/styles.js
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 10px 20px;
  color: white;
`;

export const Logo = styled.img`
  width: 200px;
  height: 120px;
`;

export const ContactInfo = styled.div`
  p {
    margin: 5px 0;
  }
`;
