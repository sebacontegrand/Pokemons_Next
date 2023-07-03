import React from "react";
import Layout from "../layouts/Layout";
import { Container, Text, Image } from "@nextui-org/react";

const NoFavorites = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh-100px)",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "cemter",
      }}
    >
      <Text h1>No hay Favoritos</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        width={250}
        height={250}
        css={{ opacity: 0.5 }}
      />
    </Container>
  );
};

export default NoFavorites;
