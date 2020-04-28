import React from "react";
import styled from "styled-components";

const CorpoForms = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 30vw;
  border: solid grey 3px;
  margin-top: 50px;
`;

const Input = styled.input`
  border: lightblue dotted 3px;
`;

const TituloForm = styled.h2`
  background: -webkit-linear-gradient(
    rgba(14, 13, 19, 1) 0%,
    rgba(202, 83, 177, 1) 26%,
    rgba(41, 51, 102, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Botao = styled.button`
  background: linear-gradient(
    90deg,
    rgba(14, 13, 19, 1) 0%,
    rgba(202, 83, 177, 1) 26%,
    rgba(41, 51, 102, 1) 100%
  );
  border: none;
  color: white;
`;

class Form extends React.Component {
  state = {
    InputNome: "",
    InputEmail: "",
  };

  onChangeNome = (event) => {
    this.setState({ InputNome: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ InputEmail: event.target.value });
  };

  render() {
    return (
      <CorpoForms>
        <TituloForm>Formulário de cadastro</TituloForm>
        <Input
          placeholder={"Insira seu nome"}
          type="text"
          onChange={this.onChangeNome}
        />
        <Input
          placeholder={"Insira seu email"}
          type="email"
          onChange={this.onChangeEmail}
        />
        <Botao
          onClick={() =>
            this.props.onClick(this.state.InputNome, this.state.InputEmail)
          }
        >
          Enviar
        </Botao>
      </CorpoForms>
    );
  }
}

export default Form;
