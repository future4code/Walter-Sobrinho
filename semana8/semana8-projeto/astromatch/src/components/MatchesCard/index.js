import React, { useState } from "react";
import { CardContainer, NomeContainer } from "./style";

export function MatchesCard() {
  return (
    <CardContainer elevation={50}>
      <img src="https://picsum.photos/75/100" alt="foto" />
      <NomeContainer variant="h4">Friedrich Nietzsche</NomeContainer>
    </CardContainer>
  );
}
