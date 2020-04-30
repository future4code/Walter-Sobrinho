import React from "react";
import styled from "styled-components";
import axios from "axios";

const Lista = styled.div`
  display: flex;
  flex-direction: column;
  border: rgba(41, 51, 102, 1) 2px solid;
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

const BotaoRetornar = styled.button`
  background: linear-gradient(
    90deg,
    rgba(14, 13, 19, 1) 0%,
    rgba(202, 83, 177, 1) 26%,
    rgba(41, 51, 102, 1) 100%
  );
  border: none;
  color: white;
  height: 30px;
  font-weight: bold;
  margin-left: 30px;
  width: 20vw;
`;

const BlocoLista = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const CorpoLista = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  margin: auto;
  align-items: center;
  border: gba(41, 51, 102, 1) solid 2px;
`;

const ItemLista = styled.p`
  background: -webkit-linear-gradient(
    rgba(14, 13, 19, 1) 0%,
    rgba(202, 83, 177, 1) 26%,
    rgba(41, 51, 102, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.5em;
`;

class ListaDeInscritos extends React.Component {
  state = {
    lista: [],
  };

  componentDidUpdate = () => {
    this.listaParaExibir();
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
        this.setState({ lista: resposta.data });
      })
      .catch((error) => {
        alert(error.response);
      });
  };

  excluirUser = (usuarioId) => {
    const id = usuarioId;
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
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

  render() {
    console.log(this.state.lista);
    return (
      <CorpoLista>
        <BotaoRetornar onClick={() => this.props.botaoRetornar()}>
          Retornar
        </BotaoRetornar>
        <Lista>
          {this.state.lista.map((user) => {
            return (
              <BlocoLista>
                <ItemLista>{user.name}</ItemLista>
                <BotaoExcluir onClick={() => this.excluirUser(user.id)}>
                  X
                </BotaoExcluir>
              </BlocoLista>
            );
          })}
        </Lista>
      </CorpoLista>
    );
  }
}

export default ListaDeInscritos;
