import { AppType } from "next/app";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import theme, { Config } from "../components/theme";
import "../styles/style.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <ColorModeScript
          initialColorMode={(theme as { config: Config }).config.initialColorMode} 
        />
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
};

export default MyApp;
