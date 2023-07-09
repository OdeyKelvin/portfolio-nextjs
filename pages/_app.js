import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import "nprogress/nprogress.css";
import NProgress from 'nprogress';
import { Router } from 'next/router';
Router.events.on("routeChangeStart", ()=>NProgress.start());
Router.events.on("routeChangeComplete", ()=>NProgress.done());
Router.events.on("routeChangeError", ()=>NProgress.done());
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;