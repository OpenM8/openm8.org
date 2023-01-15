import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import theme from '../components/theme';
import '../styles/style.css';
import { api } from "../utils/api";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
