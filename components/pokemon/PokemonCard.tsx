import { SmallPokemon } from "@/interfaces/pokemon-list";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import React from "react";
import { FC } from "react";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const onPress = () => {
    router.push(`/name/${pokemon.name}`);
  };
  return (
    <React.Fragment>
      <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
        <Card isHoverable isPressable onPress={onPress}>
          <Card.Body css={{ p: 1 }}>
            <Card.Image src={pokemon.img} width="100%" height={140} />
          </Card.Body>
          <Card.Footer>
            <Row justify="space-between">
              <Text>#{pokemon.id}</Text>
              <Text transform="capitalize">{pokemon.name}</Text>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </React.Fragment>
  );
};
