import React, { useState } from "react";
import { ScreenContainer, MatchesBox } from "./style";
import { MatchesCard } from "../MatchesCard";
import { Header } from "../Header";

export function Matches(props) {
  return (
    <ScreenContainer>
      <MatchesBox>
        <Header definePagina={props.definePagina} />
        <MatchesCard />
      </MatchesBox>
    </ScreenContainer>
  );
}
