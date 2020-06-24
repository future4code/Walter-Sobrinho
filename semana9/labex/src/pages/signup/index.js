import React from "react";
import { Container, BgImg, SignUpContainer, Form, Input, Botao } from "./style";
import { useForm } from "../../functions";
import axios from "axios";
import { useHistory } from "react-router-dom";

function SignUp() {
  const history = useHistory();
  const { form, onChange, resetForm } = useForm({
    email: "",
    password: "",
  });

  const dealInputChange = (event) => {
    const { value, name } = event.target;
    onChange(name, value);
  };

  const functionSubmit = (event) => {
    event.preventDefault();

    const body = {
      email: form.email,
      password: form.password,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/walter-julian/signup",
        body
      )
      .then((respo) => {
        window.alert("Usuário Cadastrado!");
      })
      .catch((err) => {
        console.log(err.data);
      });

    history.push("/login");
  };

  return (
    <Container>
      <BgImg src="https://entreseries.com.br/wp-content/uploads/2019/07/rick-and-morty-season-4-social.jpeg" />
      <SignUpContainer>
        <Form onSubmit={functionSubmit}>
          <Input
            type="email"
            name="email"
            required
            value={Form.name}
            onChange={dealInputChange}
            placeholder="Digite seu e-mail"
            pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
            title="Digite um e-mail válido"
          />
          <Input
            type="password"
            name="password"
            required
            value={Form.email}
            onChange={dealInputChange}
            placeholder="Digite sua senha"
          />
          <Botao type="submit">Cadastrar</Botao>
        </Form>
      </SignUpContainer>
    </Container>
  );
}

export default SignUp;
