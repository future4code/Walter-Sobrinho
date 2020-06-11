import React from "react";
import axios from "axios";
import styled from "styled-components";

const CorpoCapsulas = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
  padding: 10px;
  color: white;
`;

const BoxDaCapsula = styled.div`
  border: 1px solid white;
`;
class Capsulas extends React.Component {
  state = {
    capsulas: [],
  };
  componentDidMount() {
    axios.get("https://api.spacexdata.com/v3/capsules").then((response) => {
      this.setState({ capsulas: response.data });
    });
  }
  render() {
    console.log(this.state.capsulas);
    return (
      <CorpoCapsulas>
        {this.state.capsulas.map((capsula) => {
          return (
            <BoxDaCapsula>
              <p>
                <strong>Número de série:</strong> {capsula.capsule_serial}
              </p>
              <p>
                <strong>Status:</strong> {capsula.status}
              </p>
              <p>
                <strong>Detalhes:</strong> {capsula.details}
              </p>
            </BoxDaCapsula>
          );
        })}
      </CorpoCapsulas>
    );
  }
}

export default Capsulas;
