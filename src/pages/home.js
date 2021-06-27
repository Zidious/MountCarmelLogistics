import React from 'react';
import Hero from '../components/hero';
import Services from '../components/services';
import About from '../components/about';
import Contact from '../components/contact';
import Footer from '../components/footer';
const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};
export default Home;
