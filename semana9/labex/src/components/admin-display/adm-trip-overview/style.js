import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export const TripOverviewContainer = styled.div`
  height: 100%;
  width: 80%;
  background-color: #62a4ab;
  margin: auto;
  border-radius: 30px;
`;

export const TripOverViewImg = styled.img`
  margin: 50px auto;
  width: 50%;
  border: 10px solid white;
`;

export const Texto = styled(Typography)``;

export const Botao = styled(Button)``;

export const Container = styled.div`
  display: flex;
  width: 1100px;
  justify-content: space-between;
  left: -20%;
  position: absolute;
`;

export const DisplayWrapper = styled.div`
  display: flex;
`;
