import React from "react";
import { DisplayContainer, Texto, InfoBox, FotoDisplay, Botao } from "./style";
import { useHistory } from "react-router-dom";
import { useStore } from "use-store";
function TripDetails(props) {
  const history = useHistory();

  const selectTrip = () => {
    history.push("/subspage");
    window.localStorage.setItem("tripId", props.trips.id);
  };

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
      <Botao
        onClick={(e) => {
          selectTrip();
        }}
      >
        Candidatar-se
      </Botao>
    </DisplayContainer>
  );
}

export default TripDetails;
