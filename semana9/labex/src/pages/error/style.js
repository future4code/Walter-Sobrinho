import styled from "styled-components";
import Card from "react-bootstrap/Card";

export const ErrorBg = styled.img`
  height: 99vh;
  width: 100vw;
`;

export const X = styled(Card)`
  position: absolute;
  top: 30%;
  left: 32%;
  background-color: #97ce4c;
  opacity: 0.9;
  padding: 20px;
  color: #e89ac7;
  font-weight: bold;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  -moz-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow: 10px 3px 5px 6px #0f0f0f;
  border-radius: 20px;
`;

export const ErrorContainer = styled.div`
  position: relative;
  font-size: 2em;
  text-align: center;
`;
