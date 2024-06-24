// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #7f260f;
    color: #333;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  header, footer {
    background-color: black;
    color: white;
    padding: 10px 20px;
  }

  nav a {
    padding: 10px 20px;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
    text-decoration: none;
  }

  nav a:hover {
    background-color: white;
    color: black;
  }
`;

export default GlobalStyles;
