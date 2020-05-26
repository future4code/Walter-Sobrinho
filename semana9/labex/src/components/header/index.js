import React from "react";
import { HeaderContainer, LabexIcon, BotaoLogin } from "./style";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderContainer>
      <Link to="home">
        <LabexIcon src={Logo} />
      </Link>
      <BotaoLogin variant="contained">Login</BotaoLogin>
    </HeaderContainer>
  );
}

export default Header;
