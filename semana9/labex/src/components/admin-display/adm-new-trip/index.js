import React, { useEffect } from "react";
import { AdminNewTripContainer, Input, Form, Botao } from "./style";
import { useForm } from "../../../functions";
import axios from "axios";

function AdminNewTrip() {
  const functionToday = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }

    const day = yyyy + "-" + mm + "-" + dd;
    return day;
  };

  const { form, onChange, resetForm } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const functionInputChange = (event) => {
    const { value, name } = event.target;
    onChange(name, value);
  };

  const functionSubmit = (event) => {
    event.preventDefault();
    const body = form;
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/walter-julian/trips",
        body
      )
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AdminNewTripContainer>
      Lacunas com um asterisco (*) são obrigatórias.
      <Form onSubmit={functionSubmit}>
        <Input
          name="name"
          variant="filled"
          label="Nome"
          type="text"
          value={form.name}
          onChange={functionInputChange}
          required
        />
        <Input
          name="planet"
          variant="filled"
          label="Planeta"
          value={form.planet}
          onChange={functionInputChange}
          required
        />
        <Input
          name="description"
          variant="filled"
          label="Descrição"
          type="text"
          value={form.description}
          onChange={functionInputChange}
          required
        />
        <Input
          name="durationInDays"
          variant="filled"
          label="Duração"
          value={form.duration}
          type="number"
          onChange={functionInputChange}
          required
          min="1"
          max="15"
        />
        <Input
          name="date"
          variant="filled"
          label="Data"
          type="date"
          value={form.date}
          min={functionToday()}
          onChange={functionInputChange}
          required
        />
        <Botao type="submit">Enviar</Botao>
      </Form>
    </AdminNewTripContainer>
  );
}

export default AdminNewTrip;
