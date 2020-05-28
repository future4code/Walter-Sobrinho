import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import { useHistory } from "react-router-dom";
import { TripContainer, TripsWrapper, FilterContainer, Input } from "./style";
import Trip from "../../components/trip";
import { useGetTrips } from "../../functions";

function TripsDisplay(props) {
  const history = useHistory();
  const [allTrips, changeTrips] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      history.push("/");
    }
  }, [history]);

  useEffect(() => {
    const trips = useGetTrips;
  }, [history]);

  return (
    <TripContainer>
      <Header />
      <TripsWrapper>
        <Trip />
        <FilterContainer>
          <Input variant="outlined" label="label" />
          <Input variant="outlined" label="label" />
          <Input variant="outlined" label="label" />
          <Input variant="outlined" label="label" />
        </FilterContainer>
      </TripsWrapper>
    </TripContainer>
  );
}

export default TripsDisplay;
