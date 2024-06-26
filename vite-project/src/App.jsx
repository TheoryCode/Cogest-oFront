// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import GlobalStyle from "./styles/GlobalStyles";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import GerenciarEvento from "./pages/EventManager/EventManager";
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <main>
        <GerenciarEvento />
        <Routes>
          {" "}
          <Route path="/" element={<AppLayout />}>
            {" "}
          </Route>{" "}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
