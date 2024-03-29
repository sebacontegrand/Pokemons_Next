import { Spacer, Text, useTheme, Link } from "@nextui-org/react";
import NextLink from "next/link";
import "./NavBar.scss";
import { FC, ReactEventHandler, SetStateAction, useState } from "react";
import Image from "next/image";

const navBar: FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { theme } = useTheme();
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <div
      className="navbar-menu"
      style={{
        backgroundColor: theme?.colors.gray500.value,
        color: "white",
        justifyContent: "space-between",
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
        alt="imagen de la app"
        width={70}
        height={70}
      />
      <NextLink
        href="/"
        passHref
        style={{ display: "flex", flexDirection: "row" }}
      >
        <Text color="white" h1>
          P
        </Text>

        <Text color="white" h3>
          ókemon
        </Text>
      </NextLink>
      <div style={{ margin: "18px" }}> </div>

      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites">
        <Text color="white" h3>
          Favoritos
        </Text>
      </NextLink>
    </div>
  );
};

export default navBar;
