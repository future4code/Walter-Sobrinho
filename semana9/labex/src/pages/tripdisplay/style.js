import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Typhography from "@material-ui/core/Typography";

export const TripContainer = styled.div`
  background-color: #97ce4c;
  height: 100vh;
  width: 100vw;
`;

export const TripsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const FilterContainer = styled.div`
  background-color: #e89ac7;
  width: 20vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const DisplayContainer = styled.div`
  background-color: #7686a6;
  width: 60vw;
  height: 60vh;
`;

export const Input = styled(TextField)`
  width: 60%;
`;

export const FotoDisplay = styled.img``;

export const Texto = styled(Typhography)``;

export const InfoBox = styled.div``;
