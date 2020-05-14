import React, { useState, useEffect } from "react";
import { CardContainer, NomeContainer } from "./style";

export function MatchesCard(props) {
  useEffect(() => {});

  return (
    <CardContainer elevation={25}>
      <img src={props.matchPhoto} alt="foto" height="75" width="50" />
      <NomeContainer variant="h4">
        {props.matchName}, {props.matchAge}
      </NomeContainer>
    </CardContainer>
  );
}
