import React, { useState } from "react";
import { useParams, useHistory } from "react-router";
import {
  AdmContainer,
  AdmBgImage,
  ButtonContainer,
  Botao,
  ActivityDisplay,
} from "./style";
import Header from "../../components/header";
import DisplayContainer from "../../components/admin-display";
function Adm(props) {
  const pathParams = useParams();
  const history = useHistory();
  const [page, switchPage] = useState("none");

  const showTrips = () => {
    switchPage("lista");
  };

  const createNew = () => {
    switchPage("new");
  };

  const travelersTrial = () => {
    switchPage("trial");
  };
  return (
    <AdmContainer>
      <Header />
      <AdmBgImage
        src="https://img.ibxk.com.br/2020/01/30/30145052314407.jpg"
        alt="background image"
      />
      <ButtonContainer>
        <Botao variant="contained" onClick={showTrips}>
          Viagens
        </Botao>
        <Botao variant="contained" onClick={createNew}>
          Nova Viagem
        </Botao>
        <Botao variant="contained" onClick={travelersTrial}>
          Candidatos
        </Botao>
      </ButtonContainer>
      <ActivityDisplay>
        <DisplayContainer page={page} />
      </ActivityDisplay>
    </AdmContainer>
  );
}

export default Adm;
