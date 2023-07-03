import Layout from "@/components/layouts/Layout";
import NoFavorites from "@/components/ui/NoFavorites";
import { useEffect, useState, FC, Key } from "react";
import localFavorites from "@/utils/localFavorites";
import { Card, Grid } from "@nextui-org/react";

const Favorites = () => {
  const [favoritesPokemons, setfavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setfavoritesPokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokemons-Favoritos">
      {favoritesPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <Grid.Container gap={2} direction="row" justify="flex-start">
          {favoritesPokemons.map((id) => (
            <Grid xs={6} sm={3} md={2} xl={1} key={id}>
              <Card isHoverable isPressable css={{ padding: 10 }}>
                <Card.Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                  width={"100%"}
                  height={140}
                ></Card.Image>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      )}
    </Layout>
  );
};

export default Favorites;
