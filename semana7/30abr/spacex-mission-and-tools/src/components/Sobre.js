import React from "react";
import styled from "styled-components";
import axios from "axios";

const CorpoSobre = styled.div`
  height: 90vh;
`;

const BoxSobre = styled.div`
  color: white;
  background-color: #0a3873;
  border: white solid 2px;
  padding: 40px 20px;
  width: 40vw;
  text-align: center;
`;

class Sobre extends React.Component {
  state = {
    missions: "",
  };

  componentDidMount() {
    axios.get("https://api.spacexdata.com/v3/info").then((response) => {
      this.setState({ missions: response.data });
    });
  }

  render() {
    return (
      <CorpoSobre>
        <BoxSobre>
          <h1>{this.state.missions.name}</h1>
          <h4>CEO/Founder: {this.state.missions.ceo}</h4>
          <h4>COO: {this.state.missions.coo}</h4>
          <h4>CTO: {this.state.missions.cto}</h4>
          <h4>Fundada em: {this.state.missions.founded}</h4>
          <h4>Empregados: {this.state.missions.employees}</h4>
          <p>{this.state.missions.summary}</p>
        </BoxSobre>
      </CorpoSobre>
    );
  }
}

export default Sobre;
