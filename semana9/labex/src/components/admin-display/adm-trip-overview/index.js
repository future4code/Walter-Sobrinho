import React, { useState, useEffect } from "react";
import {
  TripOverviewContainer,
  TripOverViewImg,
  Texto,
  Botao,
  Container,
  DisplayWrapper,
} from "./style";
import AdminTripsList from "../adm-trips-list";
import { useGetTrips } from "../../../functions";
import trip1 from "../../../img/trip1.jpg";
import trip2 from "../../../img/trip2.jpg";
import trip3 from "../../../img/trip3.jpg";
import trip4 from "../../../img/trip4.jpg";
import trip5 from "../../../img/trip5.jpg";
import trip6 from "../../../img/trip6.jpg";
import trip7 from "../../../img/trip7.jpg";
import axios from "axios";

function TripOverview() {
  const allTrips = useGetTrips({});

  const baseUrl =
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/walter-julian/trip";

  const token = window.localStorage.getItem("token");

  const [trip, changeTrip] = useState({});

  const selectTrip = (id) => {
    allTrips.filter((trip) => {
      if (trip.id === id) return trip;
      changeTrip(trip);
    });
  };

  useEffect(() => {
    console.log(trip);
  }, [trip]);

  return (
    <Container>
      <AdminTripsList trip={allTrips} selectTrip={() => selectTrip(trip.id)} />
      <DisplayWrapper>
        <TripOverviewContainer>
          <Texto>{trip.name}</Texto>
          <Texto>Planeta: {trip.planet}</Texto>
          <Texto>{trip.description}</Texto>
          <Texto>Data: {trip.date}</Texto>
          <Texto>Duração: {trip.durationInDays} dias</Texto>
        </TripOverviewContainer>
      </DisplayWrapper>
    </Container>
  );
}

export default TripOverview;
