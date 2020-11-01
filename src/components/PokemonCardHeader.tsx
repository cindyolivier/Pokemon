import React from "react";

import styled from "styled-components";

import { Pokemon } from "./PokemonCard";

const Base = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-left: -1.7rem;
  margin-right: -1.7rem;
  border: 1px solid black;
  border-radius: 2.5rem;
  background: linear-gradient(grey, white);
  padding: 0 1rem 0 1rem;
  font-weight: bold;
  font-size: 19px;
  font-family: monospace;
`;

const H1 = styled.h1`
  text-transform: capitalize;
`;

const ImgPokemon = styled.img`
  box-shadow: 0 0 1rem black;
  width: 25rem;
  height: 17rem;
  border: 7px ridge #9d9290;
  background-color: #cfbb8a;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderP = styled.p`
  font-size: 0.8rem;
  text-align: center;
  margin: 0;
  text-transform: capitalize;
`;

const PokemonCardHeader = (props: { pokemon?: Pokemon }) => {
  const { pokemon } = props;

  if (!pokemon) {
    return null;
  }

  const { img, name, pv, type, taille, poids } = pokemon;

  return (
    <header>
      <Header>
        <Base>BASE</Base>
        <H1>{name}</H1>
        <p style={{ fontWeight: "bold" }}>
          {" "}
          PV <span style={{ fontSize: "1.8rem" }}>{pv} ⭐</span>
        </p>
      </Header>
      <ImgPokemon src={img} alt="Pokémon" />
      <HeaderP>
        {type} Height : {taille / 10} m Weight : {poids / 10} kg
      </HeaderP>
    </header>
  );
};

export default PokemonCardHeader;
