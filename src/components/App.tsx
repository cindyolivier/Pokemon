import React, { useState } from "react";

import styled from "styled-components";

import PokemonCard from "./PokemonCard";

const Button = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  background-color: #d6ccb3;
  color: white;
  &:hover {
    background-color: #d9d0b6;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  const [pokemonIndex, setPokemonIndex] = useState(1);

  return (
    <div>
      <Div>
        <span> Pokemon index : {pokemonIndex}</span>
        <Button onClick={() => setPokemonIndex(pokemonIndex + 1)}>+</Button>
        <Button
          onClick={() => setPokemonIndex(pokemonIndex - 1)}
          disabled={pokemonIndex <= 1}
        >
          -
        </Button>
      </Div>
      <PokemonCard index={pokemonIndex} />
    </div>
  );
};

export default App;
