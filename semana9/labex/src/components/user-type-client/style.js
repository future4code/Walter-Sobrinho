import styled from "styled-components";

export const UserTypeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 400px;
  position: absolute;
  top: 300px;
  left: 250px;
  border-radius: 300px;
  color: transparent;
  transition: 450ms ease-in;
  &:hover {
    display: flex;
    background-color: #0f1926;
    color: #f2ead0;
    align-items: center;
    justify-content: center;
    font-size: 3em;
    border: 5px #f2ead0 solid;
  }
`;
