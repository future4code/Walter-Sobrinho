import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const AdmContainer = styled.div``;

export const AdmBgImage = styled.img`
  position: absolute;
  width: 100%;
  height: 90%;
`;

export const ButtonContainer = styled.div`
  background-color: #e89ac7;
  height: 120px;
  width: 70%;
  border-radius: 30px;
  position: absolute;
  opacity: 0.9;
  top: 150px;
  left: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`;

export const ActivityDisplay = styled.div`
  height: 500px;
  width: 70%;
  background-color: #97ce4c;
  position: absolute;
  top: 350px;
  left: 150px;
  border: #f2ead0 10px solid;
  border-radius: 30px;
`;

export const Botao = styled(Button)`
  height: 60%;
`;
