import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  LoginContainer,
  BgPic,
  LoginFormContainer,
  Input,
  Botao,
} from "./style";
import axios from "axios";

export function Login() {
  const history = useHistory();
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");

  const handleLogin = async () => {
    const body = { email: email, password: password };
    const response = await axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/walter-julian/login",
      body
    );

    console.log(response.data);
    window.localStorage.setItem("token", response.data.token);
    history.push("/tripsdisplay");
  };

  const funcChangeEmail = (event) => {
    changeEmail(event.target.value);
  };

  const funcChangePassword = (event) => {
    changePassword(event.target.value);
  };

  return (
    <LoginContainer>
      <BgPic src="https://pyxis.nymag.com/v1/imgs/cd8/804/e0f612fa12d17e68e3d68ccf55f93cac4f-06-rick-morty.jpg" />
      <LoginFormContainer elevation={10}>
        <Input
          variant="filled"
          label="email"
          value={email}
          onChange={funcChangeEmail}
        />
        <Input
          variant="filled"
          label="password"
          floatingLabelText="Digite sua senha"
          value={password}
          onChange={funcChangePassword}
          type="password"
        />
        <Botao variant="contained" onClick={handleLogin}>
          Entrar
        </Botao>
      </LoginFormContainer>
    </LoginContainer>
  );
}

export default Login;
