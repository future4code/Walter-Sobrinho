import React from "react";
import {
  LoginContainer,
  ImageUser,
  ContainerAdmin,
  ContainerUser,
  ImageAdmin,
} from "./style";
import UserTypeClient from "../../components/user-type-client";
import UserTypeAdmin from "../../components/user-type-admin";
import Rick from "../../img/rick.png";
import Morty from "../../img/morty.jpg";
import { useHistory } from "react-router-dom";
import Link from "react-router-dom";

export function Home() {
  return (
    <LoginContainer>
      <ContainerUser>
        <UserTypeClient />
        <ImageUser src={Morty} />
      </ContainerUser>
      <ContainerAdmin>
        <UserTypeAdmin />
        <ImageAdmin src={Rick} />
      </ContainerAdmin>
    </LoginContainer>
  );
}

export default Home;
