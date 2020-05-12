import React from "react";
import styled from "styled-components";
import WelcomeScreen from "./components/WelcomeScreen";
import Sobre from "./components/Sobre";
import Capsulas from "./components/Capsulas";
import Missoes from "./components/Missoes";
import Lancamentos from "./components/Lancamentos";

//Estilização
const AppCorpo = styled.div`
  /* display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center; */
  /* height: 100vh; */
  background: rgb(192, 75, 242);
  background: linear-gradient(
    90deg,
    rgba(192, 75, 242, 1) 0%,
    rgba(98, 50, 166, 0.8911939775910365) 24%,
    rgba(32, 68, 140, 1) 54%,
    rgba(61, 113, 217, 0.8799894957983193) 80%,
    rgba(20, 70, 115, 1) 100%
  );
`;

const Nav = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-bottom: 100px;
`;

const Botao = styled.button`
  height: 10vh;
  color: white;
  font-weight: bold;
  background-color: #144673;
  border: 2px white solid;
  margin: 0px 20px 0px 20px;
  width: 10vw;
`;

const ComponentContainer = styled.div`
  display: flex;
  justify-content: center;
`;

class App extends React.Component {
  state = {
    infoParaExibicao: "welcome-screen",
  };
  //Funções!
  exibeMissoes = () => {
    this.setState({ infoParaExibicao: "missoes" });
  };
  exibeCapsulas = () => {
    this.setState({ infoParaExibicao: "capsulas" });
  };
  exibeLancamentos = () => {
    this.setState({ infoParaExibicao: "lancamentos" });
  };
  exibeSobre = () => {
    this.setState({ infoParaExibicao: "sobre" });
  };
  exibeHome = () => {
    this.setState({ infoParaExibicao: "home" });
  };
  sectionHandler = () => {
    switch (this.state.infoParaExibicao) {
      case "welcome-screen":
        return <WelcomeScreen />;
      case "capsulas":
        return <Capsulas />;
      case "lancamentos":
        return <Lancamentos />;
      case "sobre":
        return <Sobre />;
      case "missoes":
        return <Missoes />;
      case "home":
        return <WelcomeScreen />;

      default:
        return <WelcomeScreen />;
    }
  };

  render() {
    console.log(this.state.infoParaExibicao);
    return (
      <AppCorpo>
        <Nav>
          <Botao onClick={this.exibeHome}>Home</Botao>
          <Botao onClick={this.exibeMissoes}>Missoes</Botao>
          <Botao onClick={this.exibeCapsulas}>Cápsulas</Botao>
          <Botao onClick={this.exibeLancamentos}>Lançamentos</Botao>
          <Botao onClick={this.exibeSobre}>Sobre</Botao>
        </Nav>
        <ComponentContainer>{this.sectionHandler()}</ComponentContainer>
      </AppCorpo>
    );
  }
}
export default App;
