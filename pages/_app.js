import "../styles/globals.css";
/* eslint-disable react/jsx-props-no-spreading */

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
