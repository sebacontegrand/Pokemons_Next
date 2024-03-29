import pokeApi from "@/api/pokeApi";
import Layout from "@/components/layouts/Layout";
import { PokemonCard } from "@/components/pokemon/PokemonCard";
import { PokemonListResponse, SmallPokemon } from "@/interfaces/pokemon-list";
import { Card, Grid, Row, Text, Image } from "@nextui-org/react";
import { GetStaticProps, NextPage } from "next";
import React, { useState } from "react";

interface Props {
  pokemons: SmallPokemon[];
}
const Home: NextPage<Props> = ({ pokemons }) => {
  const [input, setInput] = React.useState("");

  const handleOnChange = (event: any) => {
    setInput(event.target.value);
  };
  const filteredPokemons = pokemons?.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(input?.toLowerCase())
  );
  return (
    <Layout title="listado de Pokemons">
      <input
        onChange={handleOnChange}
        style={{
          borderRadius: "10px",
          border: "1px grey",
          color: "dark",
          marginLeft: "5px",
          paddingLeft: "10px",
          marginTop: "15px",
          marginBottom: "5px",
          fontSize: "24px",
        }}
        placeholder="Search..."
      />
      <Image src={"/img/pokemons.jpeg"} width={400} height={150} />

      <Grid.Container gap={2} justify="flex-start">
        {filteredPokemons?.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};
export default Home;
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  const response = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons = response.data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
      i + 1
    }.png`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};
