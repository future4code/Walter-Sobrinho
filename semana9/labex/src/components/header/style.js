import styled from "styled-components";
import Button from "react-bootstrap/Button";

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
  background-color: #62a4ab;
  border-radius: 20px;
  outline: none;
  border: none;
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 1.5em;
`;
