import { DbContextProvider } from "@/context/dbContext";
import { CommunityProvider } from "@/context/communityContext";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <DbContextProvider>
        <CommunityProvider>
          <Component {...pageProps} />
        </CommunityProvider>
      </DbContextProvider>
    </ChakraProvider>
  );
}
