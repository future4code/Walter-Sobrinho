import React from "react";
import { useHistory } from "react-router-dom";
import { UserTypeContainer } from "./style";
import { Link } from "react-router-dom";

export function UserTypeClient() {
  return (
    <Link to="/login">
      <UserTypeContainer>Quero viajar</UserTypeContainer>
    </Link>
  );
}

export default UserTypeClient;
