import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const ImageUser = styled.img`
  height: 100%;
  width: 100%;
`;

export const ImageAdmin = styled.img`
  height: 100%;
  width: 100%;
`;

export const ContainerUser = styled.div`
  height: 100vh;
  width: 50vw;
  opacity: 1;
  &:hover {
    background-color: white;
    opacity: 0.7;
  }
`;

export const ContainerAdmin = styled.div`
  height: 100vh;
  width: 50vw;
  opacity: 1;
  &:hover {
    background-color: white;
    opacity: 0.7;
  }
`;
