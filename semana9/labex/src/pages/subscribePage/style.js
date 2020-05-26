import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

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
  align-items: center;
`;

export const Input = styled(TextField)`
  width: 60%;
`;
