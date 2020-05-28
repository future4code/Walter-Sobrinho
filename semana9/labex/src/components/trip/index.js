import React from "react";
import { DisplayContainer, FotoDisplay, Texto, InfoBox, Slide } from "./style";

export function Trip(props) {
  return (
    <Slide>
      <Slide.Item>
        <DisplayContainer elevation={10}>
          <FotoDisplay src="https://conteudo.imguol.com.br/c/noticias/e1/2018/12/05/terceira-temporada-da-animacao-para-adultos-rick-and-morty-e-disponibilizada-pela-netflix-1544032759199_v2_1920x1080.jpg" />
          <InfoBox>
            <Texto variant="h5">Multi luau em Jupiter</Texto>
            <Texto>Jupiter</Texto>
            <Texto>Noite mágica com vista para as 69 luas de Jupiter</Texto>
            <Texto>Duração: 540 dias</Texto>
            <Texto>Data: 21/12/2020</Texto>
          </InfoBox>
        </DisplayContainer>
      </Slide.Item>
    </Slide>
  );
}

export default Trip;
