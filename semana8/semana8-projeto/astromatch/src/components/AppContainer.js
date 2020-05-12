import React, { useState } from "react";
import { MainScreen } from "./MainScreen";
import { Matches } from "./Matches";

export function AppContainer() {
  const [pagina, setPagina] = useState(false);

  const definePagina = () => {
    setPagina(!pagina);
    console.log(pagina);
  };

  switch (pagina) {
    case false:
      return <MainScreen definePagina={definePagina} />;
    case true:
      return <Matches definePagina={definePagina} />;

    default:
      return <MainScreen />;
  }
}
