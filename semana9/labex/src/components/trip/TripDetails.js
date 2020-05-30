import React from "react";
import { DisplayContainer, Texto, InfoBox, FotoDisplay } from "./style";

function TripDetails(props) {
  return (
    <DisplayContainer>
      <FotoDisplay src={props.pic} />
      <InfoBox>
        <Texto variant="h6"></Texto>
        <Texto>{props.trips.name}</Texto>
        <Texto>{props.trips.planet}</Texto>
        <Texto>{props.trips.description}</Texto>
        <Texto>{props.trips.date}</Texto>
        <Texto>{props.trips.durationInDays}</Texto>
      </InfoBox>
    </DisplayContainer>
  );
}

export default TripDetails;
