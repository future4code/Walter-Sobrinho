import React from "react";
import { useHistory } from "react-router-dom";
import { ErrorBg, ErrorDisplay, ErrorContainer } from "./style";

export function Error() {
  const history = useHistory();

  return (
    <ErrorContainer>
      <ErrorBg src="https://wallpapercave.com/wp/wp3277657.jpg" />
      <ErrorDisplay>
        <p>ERRO 404:</p> <p>ENDEREÇO NÃO ENCONTRADO</p>
      </ErrorDisplay>
    </ErrorContainer>
  );
}

export default Error;
