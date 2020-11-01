import React from "react";

import styled from "styled-components";

import { Pokemon } from "./PokemonCard";

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;

const DivFooter = styled.div`
  margin-left: -1.7rem;
  margin-right: -1.7rem;
  border: 1px solid black;
  border-radius: 2.5rem;
  padding: 0 2.5rem 0 2.5rem;
  background-color: #b1ab9a;
`;

const P = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`;

const FooterP = styled.p`
  font-size: 0.8rem;
  text-align: center;
  margin: 0;
`;

const PokemonCardFooter = (props: { pokemon?: Pokemon }) => {
  const { pokemon } = props;

  if (!pokemon) {
    return null;
  }

  return (
    <footer>
      <Footer>
        <DivFooter>
          <P> Weakness x2 | Resistance </P>
        </DivFooter>

        <DivFooter>
          <P>Retirement</P>
        </DivFooter>
      </Footer>

      <FooterP style={{ marginTop: "2rem" }}> </FooterP>
    </footer>
  );
};

export default PokemonCardFooter;
