import React from "react";
import { useParams, useHistory } from "react-router";

function Adm() {
  const pathParams = useParams();
  const history = useHistory();

  return (
    <div>
      <img
        src="https://images8.alphacoders.com/371/371636.jpg"
        alt="foto"
        height="1200"
        width="1920"
      />
    </div>
  );
}

export default Adm;
