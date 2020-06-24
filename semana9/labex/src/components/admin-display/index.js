import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AdminLista from "./adm-lista";
import AdminTrial from "./adm-trial";
import AdminNewTrip from "./adm-new-trip";

export function DisplayContainer(props) {
  switch (props.page) {
    case "lista":
      return <AdminLista />;
    case "trial":
      return <AdminTrial />;
    case "new":
      return <AdminNewTrip />;
    default:
      return "";
  }
}

export default DisplayContainer;
