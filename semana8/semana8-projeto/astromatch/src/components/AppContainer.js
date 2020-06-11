import React, { useState, useEffect } from "react";
import { MainScreen } from "./MainScreen";
import { Matches } from "./Matches";
import axios from "axios";

export function AppContainer() {
  //State
  const [pagina, setPagina] = useState(false);

  const [profile, changeProfile] = useState({});

  const [like, setLike] = useState({});

  //Funções
  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:walter/person"
      )
      .then((response) => {
        changeProfile(response.data.profile);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  const funcaoLike = (id) => {
    const body = {
      id: id,
      choice: true,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/walter/choose-person",
        body
      )
      .then((response) => {
        setLike(response.data);
      })
      .catch((err) => {
        console.log(err.data);
      });
    fetchProfiles();
  };

  const definePagina = () => {
    setPagina(!pagina);
  };

  //Render
  switch (pagina) {
    case false:
      return (
        <MainScreen
          definePagina={definePagina}
          funcaoLike={funcaoLike}
          profile={profile}
          fetchProfiles={fetchProfiles}
        />
      );
    case true:
      return (
        <Matches
          definePagina={definePagina}
          matches={like}
          definePagina={definePagina}
        />
      );

    default:
      return <MainScreen />;
  }
}
