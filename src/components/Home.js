import React from 'react';
import NavBar from './NavBar';
import Banner from './Banner';
import Features from './Features';
import Pricing from './Pricing';
import Footer from './Footer';
import '../css/Home.css';



const Home = (props) => {
  return (
      <React.Fragment>
        <NavBar />
        <Banner />
        <Features />
        <Pricing />
        <Footer />
     </React.Fragment>

     
  );
}

export default Home;