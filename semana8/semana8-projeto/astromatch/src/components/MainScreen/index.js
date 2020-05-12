import React, { useState, useEffect } from "react";
import {
  ScreenContainer,
  MatchBox,
  DetalhesPerfil,
  ContainerBotoes,
  RejectButton,
  MatchButton,
  DetalhesContainer,
  DescriçãoTxt,
} from "./style";
import { Header } from "../Header/";
import axios from "axios";

export function MainScreen(props) {
  const [profile, changeProfile] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"
      )
      .then((response) => {
        changeProfile(response.data.profile);
      });
  }, []);

  return (
    <ScreenContainer>
      <MatchBox>
        <div>
          <DetalhesPerfil>
            <ContainerBotoes>
              <RejectButton />
              <MatchButton />
            </ContainerBotoes>
            <DetalhesContainer>
              <DescriçãoTxt variant="h4">{profile.name}</DescriçãoTxt>
              <DescriçãoTxt>{profile.bio}</DescriçãoTxt>
            </DetalhesContainer>
          </DetalhesPerfil>
        </div>
        <Header definePagina={props.definePagina} />
      </MatchBox>
    </ScreenContainer>
  );
}
