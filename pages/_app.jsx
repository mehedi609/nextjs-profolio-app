import React from 'react';
import Hero from '../components/shared/Hero';
import Footer from '../components/shared/Footer';
import AppNavbar from '../components/shared/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
  const isHomePage = () => Component.name === 'Home';

  return (
    <>
      <div className="portfolio-app">
        <AppNavbar />
        {isHomePage() && <Hero />}
        <div className="container">
          <Component {...pageProps} />
        </div>

        {isHomePage() && <Footer />}
      </div>
    </>
  );
}

export default MyApp;
