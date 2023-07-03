import pokeApi from "@/api/pokeApi";
import Layout from "@/components/layouts/Layout";
import { Pokemon } from "@/interfaces/pokemon-full";
import { PokemonListResponse } from "@/interfaces/pokemon-list";
import localFavorites from "@/utils/localFavorites";
import { Grid, Card, Button, Container, Text, Image } from "@nextui-org/react";
import confetti from "canvas-confetti";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React, { useEffect, useState } from "react";

interface Props {
  pokemon: any;
}
const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  const [existInFav, setExistInFav] = useState(false);

  useEffect(() => {
    setExistInFav(localFavorites.isInFavorites(pokemon.id));
  }, [pokemon.id]);
  const onToggleFavorites = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setExistInFav(!existInFav);
    if (existInFav) return;
    confetti({
      zIndex: 999,
      particleCount: 150,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };
  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={pokemon.namen}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button
                color="gradient"
                ghost={!existInFav}
                onPress={onToggleFavorites}
              >
                {existInFav ? "Favorites" : "Guardar en Favoritos"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={25}>Sprites</Text>
              <Container direction="row" display="flex" gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemonName: string[] = data.results.map((e) => e.name);

  return {
    paths: pokemonName.map((name) => ({
      params: { name },
    })),

    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${name}`);
  const pokemon = {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
  return {
    props: {
      pokemon,
    },
  };
};
export default PokemonByNamePage;
