import "../styles/globals.css";
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from "react";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
