import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

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
