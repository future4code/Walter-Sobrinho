import styled from "styled-components";
import BootForm from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Container = styled.div`
  height: 99vh;
  width: 100vw;
  position: relative;
`;

export const BgImg = styled.img`
  height: 100%;
  width: 100%;
`;

export const SignUpContainer = styled.div`
  box-shadow: 10px 5px 3px #2f2f2f;
  background-color: #97ce4c;
  position: absolute;
  top: 40%;
  left: 40%;
  border-radius: 20px;
`;

export const Form = styled(BootForm)`
  display: flex;
  flex-flow: column wrap;
  height: 300px;
  width: 400px;
  justify-content: space-evenly;
  align-items: center;
`;

export const Input = styled.input`
  width: 70%;
  height: 30px;
  background: none;
  outline: none;
  border: 1px solid lightgrey;
  border-radius: 10px;
  &:hover {
    border: 1px solid grey;
  }
`;

export const Botao = styled(Button)`
  border: none;
  border-radius: 15px;
  height: 45px;
  width: 90px;
  background-color: #e89ac7;
`;
