import { AppProps } from "next/app";
import { GlobalStyle } from "../styles/global";
import { ThemeContextProvider } from "../hooks/useTheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeContextProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeContextProvider>
    </>
  );
}

export default MyApp;
