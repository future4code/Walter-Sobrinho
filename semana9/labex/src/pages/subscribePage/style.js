import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "react-bootstrap/Button";

export const SubsPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

export const BgImage = styled.img`
  height: 89%;
  width: 100%;
`;

export const FormWrapper = styled.div`
  position: absolute;
  height: 70vh;
  width: 30vw;
  background-color: #66d17e;
  top: 200px;
  left: 100px;
  opacity: 0.9;
  display: flex;
  flex-flow: column wrap;
  align-items: space-evenly;
  padding-left: 100px;
`;

export const Input = styled(TextField)`
  width: 60%;
`;

export const Form = styled.form`
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
`;

export const Seletor = styled.select`
  display: block;
  height: 50px;
  background: none;
  outline-color: #e89ac7;
  outline-style: groove;
  width: 60%;
`;

export const Opcao = styled.option`
  font-size: 1.3em;
`;

export const Botao = styled(Button)`
  width: 40%;
  background-color: #e89ac7;
  border: none;
  border-radius: 20px;
  height: 50px;
  font-size: 1.2em;
`;
