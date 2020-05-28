import React from "react";
import { useHistory } from "react-router-dom";
import { ErrorBg, X, ErrorContainer } from "./style";

import Home from "../../pages/home";

export function Error() {
  return (
    <ErrorContainer>
      <ErrorBg src="https://wallpapercave.com/wp/wp3277657.jpg" />
      <X>
        <p>ERRO 404:</p> <p>ENDEREÇO NÃO ENCONTRADO</p>
      </X>
    </ErrorContainer>
  );
}

export default Error;
