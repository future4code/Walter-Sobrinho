import React from "react";
import styled from "styled-components";
import axios from "axios";

const Lista = styled.div`
  display: flex;
  flex-direction: column;
  border: rgba(41, 51, 102, 1) 2px solid;
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
`;

const CorpoLista = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  margin: auto;
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

  componentDidMount = () => {};

  render() {
    console.log(this.props.lista);
    return (
      <CorpoLista>
        <BotaoRetornar onClick={() => this.props.botaoRetornar()}>
          Retornar
        </BotaoRetornar>
        <ItemLista>{this.props.listaDeUsers}</ItemLista>
      </CorpoLista>
    );
  }
}

export default ListaDeInscritos;
