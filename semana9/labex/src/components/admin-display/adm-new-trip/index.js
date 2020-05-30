import React, { useEffect } from "react";
import {
  AdminNewTripContainer,
  Input,
  Form,
  Botao,
  Opcao,
  Seletor,
} from "./style";
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
    const token = window.localStorage.getItem("token");
    const body = form;
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/walter-julian/trips",
        body,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((resp) => {
        resetForm();
        window.alert("Viagem criada com sucesso!");
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
          pattern={["[A-Za-z ]{3,}"]}
          required
        />
        <Input
          name="description"
          variant="filled"
          label="Descrição"
          type="text"
          value={form.description}
          onChange={functionInputChange}
          pattern={["[A-Za-z ]{3,}"]}
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
        <Seletor name="planet" onChange={functionInputChange}>
          <Opcao value="Mercúrio">Mercúrio</Opcao>
          <Opcao value="Vênus">Vênus</Opcao>
          <Opcao value="Marte">Marte</Opcao>
          <Opcao value="Júpiter">Júpiter</Opcao>
          <Opcao value="Saturno">Saturno</Opcao>
          <Opcao value="Urano">Urano</Opcao>
          <Opcao value="Neturno">Neturno</Opcao>
          <Opcao value="Lua">Lua</Opcao>
        </Seletor>
        <Botao type="submit">Enviar</Botao>
      </Form>
    </AdminNewTripContainer>
  );
}

export default AdminNewTrip;
