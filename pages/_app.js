import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import '../styles/loader.css'
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Navbar />
          <Component {...pageProps} />
        </>
      ) : (
        <div className='w-screen bg-black  h-screen left-0 top-0 flex flex-col justify-center'>
        <div className='loader  mx-auto w-10/12'></div>
       </div>
      )}
    </>
  );
}

export default MyApp;
