import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  padding: 10px 20px;
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const Button = styled.a`
  padding: 10px 20px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: white;
    color: black;
  }
`;
