import React from "react";
import { AdminListaContainer } from "./style";
import TripOverview from "../adm-trip-overview";
import AdminTripsList from "../adm-trips-list";

function AdminLista() {
  return (
    <AdminListaContainer>
      <AdminTripsList />
      <TripOverview />
    </AdminListaContainer>
  );
}

export default AdminLista;
