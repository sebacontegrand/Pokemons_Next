// pages/_app.js

import type { AppProps } from "next/app";
// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import { darkTheme } from "../themes/darkthemes";

function MyApp({ Component, pageProps }: AppProps) {
  // 2. Use at the root of your app
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
