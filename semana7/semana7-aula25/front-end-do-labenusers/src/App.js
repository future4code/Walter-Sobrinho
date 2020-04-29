import React, { useReducer } from "react";
import styled from "styled-components";
import Form from "./components/Form";
import axios from "axios";
import ListaDeInscritos from "./components/ListaDeInscritos";

const CorpoApp = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
`;

const BotaoParaLista = styled.button`
  background: linear-gradient(
    90deg,
    rgba(14, 13, 19, 1) 0%,
    rgba(202, 83, 177, 1) 26%,
    rgba(41, 51, 102, 1) 100%
  );
  border: none;
  color: white;
  height: 30px;
  align-self: center;
`;

class App extends React.Component {
  state = {
    InputNomeValue: "",
    InputEmailValue: "",
    Inscricao: false,
    Inscritos: [],
  };

  componentDidMount = () => {
    this.exibeLista();
  };

  funcaoBotaoRetornar = () => {
    this.setState({ Inscricao: !this.state.Inscricao });
  };

  exibeLista = () => {
    this.setState({ Inscricao: !this.state.Inscricao });
  };

  onClickEnviar = (nome, email) => {
    const valorNome = nome;
    const valorEmail = email;

    const body = {
      name: valorNome,
      email: valorEmail,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "walter-sobrinho-julian",
          },
        }
      )
      .then((response) => {
        alert("Usuário cadastrado!");
      })
      .catch((error) => {
        alert("Ocorreu um erro");
      });

    this.setState({
      InputNomeValue: "",
      InputEmailValue: "",
    });
  };

  render() {
    console.log(this.state.Inscritos);

    if (this.state.Inscricao === true) {
      return (
        <CorpoApp>
          <BotaoParaLista onClick={this.exibeLista}>
            Lista completa
          </BotaoParaLista>
          <Form onClick={this.onClickEnviar} />
        </CorpoApp>
      );
    }
    if (this.state.Inscricao === false) {
      return (
        <ListaDeInscritos
          botaoRetornar={this.funcaoBotaoRetornar}
          ExibeLista={this.exibeLista}
        />
      );
    }
  }
}

export default App;
