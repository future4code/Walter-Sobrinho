import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "react-bootstrap/Button";

export const AdminNewTripContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 80%;
  height: 80%;
  position: relative;
  padding: 5px;
  margin: 20px auto;
  background-color: #62a4ab;
  justify-content: center;
  border-radius: 20px;
`;

export const Input = styled(TextField)``;

export const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
`;

export const Botao = styled(Button)`
  width: 40%;
  background-color: #e89ac7;
  border: none;
  border-radius: 20px;
  height: 50px;
  font-size: 1.2em;
  margin: 10px auto;
`;

export const Seletor = styled.select`
  background: none;
  border: 1px solid grey;
  height: 20px;
`;

export const Opcao = styled.option``;
