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

const BotaoExcluir = styled.button`
  background: -webkit-linear-gradient(
    rgba(14, 13, 19, 1) 0%,
    rgba(202, 83, 177, 1) 26%,
    rgba(41, 51, 102, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: none;
  margin-left: 30px;
  cursor: pointer;
  font-size: 1.5em;
`;

const BlocoLista = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
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
    this.listaParaExibir();
  };

  excluirUser = (usuarioId) => {
    const id = usuarioId;
    axios
      .delete(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id",
        id,
        {
          headers: {
            Authorization: "walter-sobrinho-julian",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  listaParaExibir = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "walter-sobrinho-julian",
          },
        }
      )
      .then((resposta) => {
        this.setState({ Inscritos: resposta.data });
      })
      .catch((error) => {
        alert(error.response);
      });
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
          listaDeUsers={this.state.Inscritos.map((user) => {
            return (
              <BlocoLista>
                <p>{user.name}</p>
                <BotaoExcluir /*onClick={this.excluirUser(user.id)}*/>
                  X
                </BotaoExcluir>
              </BlocoLista>
            );
          })}
          userId={this.state.Inscritos.map((user) => {
            return user.id;
          })}
        />
      );
    }
  }
}

export default App;
