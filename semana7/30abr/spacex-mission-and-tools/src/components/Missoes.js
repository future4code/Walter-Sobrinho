import React from "react";
import axios from "axios";
import styled from "styled-components";

const CorpoMissoes = styled.div`
  color: white;
  background-color: #0a3873;
  border: #080c26 solid 2px;
`;

class Missoes extends React.Component {
  state = {
    missions: [],
  };

  //Funções!!
  componentDidMount() {
    axios.get("https://api.spacexdata.com/v3/missions").then((response) => {
      this.setState({ missions: response.data });
    });
  }
  render() {
    console.log(this.state.missions);
    return (
      <CorpoMissoes>
        <h2>Missões da SpaceX</h2>
        {this.state.missions.map((missoes) => {
          return <p>{missoes.mission_name} </p>;
        })}
      </CorpoMissoes>
    );
  }
}

export default Missoes;
