import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const HeaderContainer = styled.div`
  height: 100px;
  background-color: #e89ac7;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LabexIcon = styled.img`
  width: 100px;
`;

export const BotaoLogin = styled(Button)`
  width: 200px;
  height: 60px;
`;
