import React from "react";
import { useHistory } from "react-router-dom";
import { UserTypeAdminContainer } from "./style";
import { Link } from "react-router-dom";

export function UserTypeAdmin() {
  return (
    <Link to="/admin">
      <UserTypeAdminContainer>Quero guiar</UserTypeAdminContainer>
    </Link>
  );
}

export default UserTypeAdmin;
