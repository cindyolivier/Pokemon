import React, { FunctionComponent } from "react";

import styled from "styled-components";

import { Pokemon } from "./PokemonCard";

const Main = styled.main`
  margin-top: 2rem;
`;

const MainP = styled.p`
  border-bottom: 0.2rem solid black;
  padding-bottom: 1rem;
`;

const H2 = styled.h2`
  margin-top: 0;
  text-align: center;
  font-size: 1.2rem;
  text-transform: capitalize;
`;

const DivH2 = styled.div`
  display: flex;
  justify-content: space-between;
  margintop: 2rem;
  &:hover h2 {
    color: grey !important;
  }
`;

const PokemonCardMain: FunctionComponent<{ pokemon?: Pokemon }> = (props) => {
  const { pokemon } = props;

  return (
    <Main>
      <>
        {pokemon?.attacks?.map((attack) => (
          <div>
            <DivH2>
              <H2>⭐ ⭐ {attack.name}</H2>
              <p>{pokemon?.power}</p>
            </DivH2>
            <MainP>{attack.description}</MainP>
          </div>
        ))}
      </>
    </Main>
  );
};

export default PokemonCardMain;
