import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  LoginContainer,
  BgPic,
  LoginFormContainer,
  Input,
  Botao,
  Form,
} from "./style";
import axios from "axios";
import { useForm } from "../../functions";

export function Login() {
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token !== null) {
      history.push("/tripsdisplay");
    }
  }, []);

  const handleLogin = async () => {
    const body = { email: form.email, password: form.password };
    const response = await axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/walter-julian/login",
      body
    );

    window.localStorage.setItem("token", response.data.token);
    history.push("/tripsdisplay");
  };

  const { form, onChange, resetForm } = useForm({
    email: "",
    password: "",
  });

  const dealInputChange = (event) => {
    const { value, name } = event.target;
    onChange(name, value);
  };

  return (
    <LoginContainer>
      <BgPic src="https://pyxis.nymag.com/v1/imgs/cd8/804/e0f612fa12d17e68e3d68ccf55f93cac4f-06-rick-morty.jpg" />
      <LoginFormContainer elevation={10}>
        <Form>
          <Input
            name="email"
            variant="filled"
            label="email"
            value={Form.email}
            onChange={dealInputChange}
            inputProps={{
              pattern: "^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$",
              title: "Digite um e-mail válido",
            }}
          />
          <Input
            name="password"
            variant="filled"
            label="password"
            floatingLabelText="Digite sua senha"
            value={Form.password}
            onChange={dealInputChange}
            type="password"
          />
          <Botao variant="contained" onClick={handleLogin}>
            Entrar
          </Botao>
          <Botao
            variant="contained"
            onClick={() => {
              history.push("./signup");
            }}
          >
            Cadastre-se
          </Botao>
        </Form>
      </LoginFormContainer>
    </LoginContainer>
  );
}

export default Login;
