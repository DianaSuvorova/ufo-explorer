import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return(<ThemeProvider> 
    <Component {...pageProps} />
    </ThemeProvider>);
}

export default MyApp;
