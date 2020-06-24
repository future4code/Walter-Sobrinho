import React from "react";
import { AdminTrialContainer, Texto, BoxBotoes, Botao } from "./style";

function AdminTrial() {
  return (
    <AdminTrialContainer>
      <Texto variant="h5">Candidato: Astrodev</Texto>
      <Texto>Idade: 20</Texto>
      <Texto>Motivação: Quero muito ir!</Texto>
      <Texto>Profissão: Chefe</Texto>
      <Texto>País: Brasil</Texto>
      <BoxBotoes>
        <Botao variant="contained">Aprovar</Botao>
        <Botao variant="contained">Negar</Botao>
      </BoxBotoes>
    </AdminTrialContainer>
  );
}

export default AdminTrial;
