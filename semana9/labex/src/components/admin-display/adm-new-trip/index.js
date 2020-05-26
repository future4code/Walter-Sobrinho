import React from "react";
import { AdminNewTripContainer, Input } from "./style";

function AdminNewTrip() {
  return (
    <AdminNewTripContainer>
      <Input variant="filled" label="Nome" />
      <Input variant="filled" label="Planeta" />
      <Input variant="filled" label="Descrição" />
      <Input variant="filled" label="Duração" />
      <Input variant="filled" label="Data" />
    </AdminNewTripContainer>
  );
}

export default AdminNewTrip;
