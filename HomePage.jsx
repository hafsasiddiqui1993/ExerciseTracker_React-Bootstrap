import React from 'react'
import Header from '../Layouts/Header';
import NavFunc from '../Layouts/Nav';
import Slider from '../layouts/Slider';
import Footer from '../layouts/Footer';
import { Cards } from '../layouts/Cards';
import { Aside } from '../layouts/Aside';

function HomePage() {
  return (
    <div>



     <Header />
     <NavFunc />
     <Slider />
     <Cards />
     <Aside />
    <Footer />
    </div>
  )
}

export default HomePage