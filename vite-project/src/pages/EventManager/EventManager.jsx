import React from "react";
import TituloAddEventos from "../../components/Titulos/AddEvents";
import TituloGerenciarEventos from "../../components/Titulos/EventsManager";
import Form from "../../components/Form/FormAdd";

const GerenciarEvento = () => {
  return (
    <div>
      <TituloAddEventos tituloStr="ADICIONAR NOVO EVENTO" />
      <Form />
      <TituloGerenciarEventos tituloStr="GERENCIAR EVENTOS" />
    </div>
  );
};
export default GerenciarEvento;
