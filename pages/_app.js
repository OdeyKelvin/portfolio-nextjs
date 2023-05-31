import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Preloader from '../components/Preloader';
import '../styles/globals.css';



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
