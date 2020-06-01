import React from "react";
import { AdminTripsListContainer, ItemList, List } from "./style";

function AdminTripsList(props) {
  return (
    <AdminTripsListContainer>
      <List>
        {props.trip.map((trip) => {
          return (
            <ItemList
              key={trip.id}
              onClick={() => {
                props.selectTrip(trip.id);
              }}
            >
              {trip.name}
            </ItemList>
          );
        })}
      </List>
    </AdminTripsListContainer>
  );
}

export default AdminTripsList;
