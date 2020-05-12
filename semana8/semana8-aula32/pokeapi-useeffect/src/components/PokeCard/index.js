import React, { useState, useEffect } from "react";
import axios from "axios";

export function PokeCard(props) {
  const [essePokemon, setPokemon] = useState({});
  // método que roda após a montagem do componente

  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => {
        // guarda as infos do pokemon no estado
        setPokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    pegaPokemon(props.pokemon);
  }, [props.pokemon]);

  return (
    <div>
      <p>{essePokemon.name}</p>
      <p>{essePokemon.weight} Kg</p>
      {essePokemon.types && <p>{essePokemon.types[0].type.name}</p>}
      {essePokemon.sprites && (
        <img src={essePokemon.sprites.front_default} alt={essePokemon.name} />
      )}
    </div>
  );
}

export default PokeCard;
