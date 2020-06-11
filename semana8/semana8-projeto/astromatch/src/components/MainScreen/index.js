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
  FotoPerfil,
} from "./style";
import { Header } from "../Header/";

export function MainScreen(props) {
  return (
    <ScreenContainer>
      <MatchBox>
        <div>
          <DetalhesPerfil>
            <ContainerBotoes>
              <RejectButton onClick={props.fetchProfiles} />
              <MatchButton onClick={() => props.funcaoLike(props.profile.id)} />
            </ContainerBotoes>
            <DetalhesContainer>
              <DescriçãoTxt variant="h4">
                {props.profile.name}, {props.profile.age}
              </DescriçãoTxt>
              <DescriçãoTxt>{props.profile.bio}</DescriçãoTxt>
            </DetalhesContainer>
          </DetalhesPerfil>
        </div>
        <FotoPerfil src={props.profile.photo} />
        <Header definePagina={props.definePagina} />
      </MatchBox>
    </ScreenContainer>
  );
}
