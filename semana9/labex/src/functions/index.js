import { useState, useEffect } from "react";
import axios from "axios";

export const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  const resetForm = () => {
    setForm(initialValues);
  };

  return { form, onChange, resetForm };
};

export const applyToTrip = (form, tripId) => {
  const body = { form };
  const trip = tripId;
  axios.post(
    `https://us-central1-labenu-apis.cloudfunctions.net/labeX/walter-julian/trips/${trip}/apply`,
    body
  );
};

export const useGetTrips = () => {
  const [trips, handleTrips] = useState([]);
  axios
    .get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/walter-julian/trips"
    )
    .then((response) => {
      handleTrips(response.data.trips);
    })
    .catch((err) => {
      console.log(err.data);
    });
  return trips;
};

export const getPermission = async (url) => {
  const token = window.localStorage.getItem("token");

  const response = await axios.get(`${url}`, { headers: { Auth: token } });

  return response;
};

export const gateKeeper = (history) => {
  const token = window.localStorage.getItem("token");

  if (token === null) {
    history.push("/login");
  }
};
