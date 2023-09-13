import React from 'react'
/*adds footer to contact page */
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import HeroImg2 from "../components/HeroImg2";

import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="CONTACT." text="Contact me"/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default Contact