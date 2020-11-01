import React, { useEffect, useState } from "react";

import styled from "styled-components";
import axios from "axios";

import PokemonCardHeader from "./PokemonCardHeader";
import PokemonCardMain from "./PokemonCardMain";
import PokemonCardFooter from "./PokemonCardFooter";

const Container = styled.div`
  font-size: 1rem;
  border: solid #cfb14b 1.5rem;
  border-radius: 2.7rem;
  box-shadow: 0 0 2rem black;
  background-color: #c3bab6;
  margin: 2rem;
  height: 45rem;
  width: 26rem;
  padding: 1rem;
  padding-top: 0;
  background-image: url("https://www.picclickimg.com/d/l400/pict/362614810954_/Versace-2-Accueil-Papier-Paint-962332-Beige-Uni.jpg");
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export type Pokemon = {
  img: string;
  name: string;
  pv: number;
  type: string;
  taille: number;
  poids: number;
  move?: Move[];
  power?: number;
  attacks?: Array<{ name: string; description: string }>;
};

export type Move = {
  name: string;
  url: string;
};

type PokemonResponse = {
  name: string;
  moves: Array<{ move: Move }>;
  sprites: { front_default: string };
  stats: Array<{ base_stat: number }>;
  types: Array<{ type: { name: string } }>;
  height: number;
  weight: number;
};

type PokemonMoveResponse = {
  effect_entries: Array<{ short_effect: string }>;
};

const PokemonCard = (props: { index?: number }) => {
  const { index } = props;
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    axios
      .get<PokemonResponse>(`https://pokeapi.co/api/v2/pokemon/${index}`)
      .then(async (resPokemon) => {
        const move: Move[] = resPokemon.data.moves.map(
          (move: { move: Move }) => {
            return { name: move.move.name, url: move.move.url };
          }
        );
        const currentPokemon = {
          move,
          img: resPokemon.data.sprites.front_default,
          name: resPokemon.data.name,
          pv: resPokemon.data.stats[0].base_stat,
          taille: resPokemon.data.height,
          poids: resPokemon.data.weight,
          type: resPokemon.data.types[0].type.name,
        };

        const resPokemonMoves = await Promise.all([
          axios.get<PokemonMoveResponse>(resPokemon.data.moves[0].move.url),
          axios.get<PokemonMoveResponse>(resPokemon.data.moves[1].move.url),
        ]);

        setPokemon({
          ...currentPokemon,
          attacks: [
            {
              name: resPokemon.data.moves[0].move.name,
              description:
                resPokemonMoves[0].data.effect_entries[0].short_effect,
            },
            {
              name: resPokemon.data.moves[1].move.name,
              description:
                resPokemonMoves[1].data.effect_entries[0].short_effect,
            },
          ],
        });
      })

      .catch((e) => console.warn(e));
  }, [index]);

  if (!pokemon) {
    return null;
  }

  return (
    <Container>
      <PokemonCardHeader pokemon={pokemon} />
      <PokemonCardMain pokemon={pokemon} />
      <PokemonCardFooter pokemon={pokemon} />
    </Container>
  );
};

export default PokemonCard;
