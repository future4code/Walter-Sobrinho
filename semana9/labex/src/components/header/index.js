import React from "react";
import { HeaderContainer, LabexIcon, BotaoLogin } from "./style";
import Logo from "../../img/logo.png";
import { Link, useHistory } from "react-router-dom";

function Header(props) {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };
  return (
    <HeaderContainer>
      <Link to="home">
        <LabexIcon src={Logo} />
      </Link>
      <BotaoLogin variant="contained" color="primary" onClick={logout}>
        Logout
      </BotaoLogin>
    </HeaderContainer>
  );
}

export default Header;
