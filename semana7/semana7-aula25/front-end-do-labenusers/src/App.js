import React from "react";
import styled from "styled-components";
import Form from "./components/Form";
import axios from "axios";
const CorpoApp = styled.div`
  display: flex;
  justify-content: center;
  height: 96vh;
`;

class App extends React.Component {
  state = {
    InputNomeValue: "",
    InputEmailValue: "",
  };

  componentDidUpdate = () => {};

  onClickEnviar = (nome, email) => {
    const valorNome = nome;
    const valorEmail = email;
  };

  render() {
    return (
      <CorpoApp>
        <Form onClick={this.onClickEnviar} />
      </CorpoApp>
    );
  }
}
export default App;
