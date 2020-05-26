import React from "react";
import { TripOverviewContainer, TripOverViewImg, Texto, Botao } from "./style";

function TripOverview() {
  return (
    <TripOverviewContainer>
      <TripOverViewImg src="https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/01/rick-morty-hell.jpg" />
      <Texto>Ano novo em Mercúrio</Texto>
      <Texto>Planeta: Mercúrio</Texto>
      <Texto>Venha passar a virada pertinho do Sol!</Texto>
      <Texto>Data: 31/12/2020</Texto>
      <Texto>Duração: 7 dias.</Texto>
    </TripOverviewContainer>
  );
}

export default TripOverview;
