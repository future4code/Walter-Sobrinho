import React from "react";
import axios from "axios";
import styled from "styled-components";

const CorpoMissoes = styled.div`
  color: white;
  background-color: #0a3873;
  border: white solid 2px;
  padding: 20px;
`;

const BotaoMissoes = styled.div`
  background: #0a3873;
  background-color: #0a3873;
  border-radius: 8px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 20px;
  font-weight: bold;
  padding: 13px 32px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #3d768a;
`;

const ContainerLista = styled.div`
  display: flex;
  flex-flow: column wrap;
`;
const ContainerDosDetalhes = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

class Missoes extends React.Component {
  state = {
    missions: [],
    detalhes: false,
  };

  //Funções!!
  componentDidMount() {
    axios.get("https://api.spacexdata.com/v3/missions").then((response) => {
      this.setState({ missions: response.data });
    });
  }
  exibeDetalhes = (id) => {
    this.setState({ detalhes: !this.state.detalhes });
  };

  render() {
    switch (this.state.detalhes) {
      case "vazio":
        return (
          <CorpoMissoes>
            <h2>Missões da SpaceX</h2>
            {this.state.missions.map((missoes) => {
              return (
                <ContainerLista>
                  <BotaoMissoes
                    onClick={() => this.exibeDetalhes(missoes.mission_id)}
                  >
                    {missoes.mission_name}
                  </BotaoMissoes>
                </ContainerLista>
              );
            })}
          </CorpoMissoes>
        );
      case "Thaicom":
        return (
          <CorpoMissoes>
            <h2>Missões da SpaceX</h2>
            {this.state.missions.map((missoes) => {
              return (
                <ContainerLista>
                  <BotaoMissoes
                    onClick={() => this.exibeDetalhes(missoes.mission_id)}
                  >
                    {missoes.mission_name}
                  </BotaoMissoes>
                </ContainerLista>
              );
            })}
          </CorpoMissoes>
        );

      default:
        return (
          <CorpoMissoes>
            <h2>Missões da SpaceX</h2>
            {this.state.missions.map((missoes) => {
              return (
                <ContainerLista>
                  <BotaoMissoes
                    onClick={() => this.exibeDetalhes(missoes.mission_id)}
                  >
                    {missoes.mission_name}
                  </BotaoMissoes>
                </ContainerLista>
              );
            })}
          </CorpoMissoes>
        );
    }
  }
}

export default Missoes;
