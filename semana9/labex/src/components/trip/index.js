import React, { useState } from "react";
import {
  DisplayContainer,
  FotoDisplay,
  Texto,
  InfoBox,
  TripListContainer,
  LittleCard,
  LittleCardPic,
  PageContainer,
} from "./style";
import { useGetTrips } from "../../functions";
import trip1 from "../../img/trip1.jpg";
import trip2 from "../../img/trip2.jpg";
import trip3 from "../../img/trip3.jpg";
import trip4 from "../../img/trip4.jpg";
import trip5 from "../../img/trip5.jpg";
import trip6 from "../../img/trip6.jpg";
import trip7 from "../../img/trip7.jpg";
import TripDetails from "./TripDetails.js";
import axios from "axios";

export function Trip(props) {
  const [trip, selectTrip] = useState({});

  const baseUrl =
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/walter-julian/trip";

  const [pic, selectPic] = useState(
    "https://img.ibxk.com.br/2020/01/30/30145052314407.jpg"
  );

  const token = window.localStorage.getItem("token");

  const tripList = useGetTrips();

  const imgArray = [trip1, trip2, trip3, trip4, trip5, trip6, trip7];

  const tripToShow = (tripId, idx) => {
    tripList
      .filter((trip) => {
        const id = tripId;
        if (id === trip.id) {
          selectTrip(trip);
          selectPic(imgArray[idx]);
        }
      })
      .then(
        axios
          .get(`${baseUrl}/${trip.id}`, { Headers: { auth: token } })
          .then((response) => console.log(response.data))
          .catch((error) => console.log(error.data))
      );
  };

  return (
    <div>
      <TripListContainer>
        {tripList.map((trip, idx) => {
          return (
            <PageContainer>
              <LittleCard
                key={trip.id}
                onClick={(e) => {
                  tripToShow(trip.id, idx);
                }}
              >
                <LittleCardPic src={imgArray[idx]} />
                <Texto variant="h6">{trip.name}</Texto>
                <Texto>Planeta: {trip.planet}</Texto>
                <Texto>Data: {trip.date}</Texto>
                <Texto>Duração: {trip.durationInDays} dias</Texto>
              </LittleCard>
            </PageContainer>
          );
        })}
        <TripDetails trips={trip} pic={pic} />
      </TripListContainer>
    </div>
  );
}

export default Trip;
