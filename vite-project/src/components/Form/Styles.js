// src/components/Form/styles.js
import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0);
  color: antiquewhite;
  align-items: center;
  width: 100%;
  font-weight: bold;
`;

export const Input = styled.input`
  margin-bottom: 15px;
  padding-left: 350px;
  padding-top: 25px;
  padding-right: 350px;
  border: 2px solid antiquewhite;
  border-radius: 4px;
  color: #7f260f;
  background-color: #7f260f;
  width: 100%;
  align-items: center;
`;

export const Campo = styled.textarea`
  margin-bottom: 15px;
  padding-left: 350px;
  padding-top: 25px;
  padding-right: 350px;
  border: 2px solid antiquewhite;
  border-radius: 4px;
  resize: vertical;
  background-color: #7f260f;
  width: 100%;
`;

export const Select = styled.select`
  margin-bottom: 15px;
  padding: 10px;
  border: 2px solid antiquewhite;
  border-radius: 4px;
  background-color: #7f260f;
  color: antiquewhite;
  width: 100%;
`;

export const Button = styled.button`
  padding: 15px 50px;
  background-color: #f19709;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
