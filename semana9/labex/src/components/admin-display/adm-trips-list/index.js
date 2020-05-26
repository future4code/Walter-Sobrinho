import React from "react";
import { AdminTripsListContainer, ItemList, List } from "./style";

function AdminTripsList() {
  return (
    <AdminTripsListContainer>
      <List>
        <ItemList>Viagem a Mercúrio</ItemList>
        <ItemList>Viagem a Jupiter</ItemList>
      </List>
    </AdminTripsListContainer>
  );
}

export default AdminTripsList;
