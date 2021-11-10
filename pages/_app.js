import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
 /* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable-next-line react/prop-types */
function MyApp({ Component, pageProps }) {
  return(
<ThemeProvider> 
    <Component {...pageProps} />
    </ThemeProvider>
);
}

export default MyApp;
