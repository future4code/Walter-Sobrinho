import React, { useEffect, useState } from "react";
import {
  ScreenContainer,
  MatchesBox,
  BotaoReseta,
  MatchesDisplay,
} from "./style";
import { MatchesCard } from "../MatchesCard";
import { Header } from "../Header";
import axios from "axios";

export function Matches(props) {
  const [allMatches, setAllMatches] = useState([]);

  useEffect(() => {
    fetchMatches();
  }, []);

  const fetchMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/walter/matches"
      )
      .then((resposta) => {
        setAllMatches(resposta.data.matches);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  const resetaMatches = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/walter/clear"
      )
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err.data);
      });
    props.definePagina();
  };

  return (
    <ScreenContainer>
      <MatchesBox>
        <Header definePagina={props.definePagina} />
        <MatchesDisplay>
          {allMatches.map((match) => {
            return (
              <MatchesCard
                like={props.like}
                matchPhoto={match.photo}
                matchName={match.name}
                matchAge={match.age}
              />
            );
          })}
        </MatchesDisplay>
        <BotaoReseta onClick={resetaMatches}>Resetar Matches</BotaoReseta>
      </MatchesBox>
    </ScreenContainer>
  );
}
