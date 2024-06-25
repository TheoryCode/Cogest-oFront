import React from "react";
import TituloAddEventos from "../../components/Titulos/AddEvents";
import TituloGerenciarEventos from "../../components/Titulos/EventsManager";

const GerenciarEvento = () => {
  return (
    <div>
      <TituloAddEventos tituloStr="ADICIONAR NOVO EVENTO" />
      <TituloGerenciarEventos tituloStr="GERENCIAR EVENTOS" />
    </div>
  );
};
export default GerenciarEvento;
