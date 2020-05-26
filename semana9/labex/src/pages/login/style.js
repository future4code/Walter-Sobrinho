import styled from "styled-components";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

export const BgPic = styled.img`
  height: 100%;
  width: 100%;
`;

export const LoginFormContainer = styled(Card)`
  height: 200px;
  width: 300px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  top: 400px;
  left: 750px;
`;

export const Input = styled(TextField)`
  width: 70%;
`;

export const Botao = styled(Button)``;
