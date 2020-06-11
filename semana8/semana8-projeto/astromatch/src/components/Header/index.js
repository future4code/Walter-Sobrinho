import React, { useState } from "react";
import {
  HeaderContainer,
  MatchIcon,
  Message,
  LogoContainer,
  A,
  M,
} from "./style";

export function Header(props) {
  return (
    <HeaderContainer>
      <MatchIcon onClick={props.definePagina} />
      <LogoContainer>
        <A variant="h5">A</A>
        <M color="secondary" variant="h5">
          M
        </M>
      </LogoContainer>
      <Message />
    </HeaderContainer>
  );
}
