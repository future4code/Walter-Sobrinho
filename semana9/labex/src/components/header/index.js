import React from "react";
import { HeaderContainer, LabexIcon, BotaoLogin } from "./style";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <HeaderContainer>
      <Link to="home">
        <LabexIcon src={Logo} />
      </Link>
      <BotaoLogin variant="contained" color="primary">
        Login
      </BotaoLogin>
    </HeaderContainer>
  );
}

export default Header;
