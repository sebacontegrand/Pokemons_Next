import Head from "next/head";
import { FC, ReactNode } from "react";
import NavBar from "../ui/NavBar";
import "./Layout.scss";
import { useRouter } from "next/router";

type LayoutProps = {
  children: ReactNode;
  title: string;
};

const origin = typeof window === "undefined" ? "" : window.location.origin;
const Layout: FC<LayoutProps> = ({ children, title }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title || "Pokemon"}</title>
        <meta name="author" content="Sebastian" />
        <meta name="description" content="info sobre el Pokemon" />
        <meta name="keywords" content="xxxx,pokemon , pokedex" />
        <meta property="og:title" content={`Info del Pokemon${title}`} />
        <meta
          property="og:description"
          content={`Esta es la pagina de ${title}.`}
        />
        <meta property="og:image" content={`${origin}/img/pokemons.jpeg`} />
      </Head>
      <NavBar />
      <main className="main-page-layout">{children}</main>
    </>
  );
};

export default Layout;
