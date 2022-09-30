import React from 'react';
import {motion} from "framer-motion";
import {useRef, useEffect, useState} from "react";
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Carousel from './Components/Carousel';
import Parallax from './Components/Parallax';
import AnimatedRoutes from './AnimatedRoutes';
import BackgroundImage from './Components/BackgroundImage';
import JoinTag from './Components/JoinTag';
import Footer from './Components/Footer';
import AboutText from './Components/AboutText';
import FrontPage from './Components/FrontPage';
import imagesEvents from './imagesEvent.js'
import imagesProjects from './imagesProjects.js';
import AppEventsVGL from './AppEventsVGL';
import Aos from "aos";
import "aos/dist/aos.css";
import "./ourTeam.css"
import OurTeamLeft from './OurTeamLeft';
import OurTeamRight from './OurTeamRight';

export default function OurTeam() {
  const [menu,setMenu] = useState(0);
  useEffect(()=>{
    Aos.init({});
  },[]);
  return (
    <>
      <Navbar setMenu={setMenu}/>
      <OurTeamLeft name="CLAXON TOURNAMENTS"  body=" In 2017, a group of teenagers were frustrated with the lack of quality competitions in the games they loved. In July the same year, this group of teenagers brought it upon themselves to change that.
" image="Assets/111.png"/>
      <OurTeamRight name="6D TECHNOLOGIES"  body="Long-term business success turns on many factors – from the ability to reduce costs and increase revenue, to how and when to implement innovative and technical solutions that differentiate your offerings and delight subscribers with reliable system features and useful applications. Incorporated in 2002, 6D is a technology-oriented organization founded by enterprising technocrats.

With customers in 80+ countries across 6 continents, 6D is a global organisation with an Indian DNA. We have an energetic team of professionals with extensive experience in engineering real-time, highly available and scalable platform.

As a proactive technology partner, 6D works with its customers to understand market trends and business vision, developing the solutions they need to thrive in an ever-changing world." image="Assets/333.png"/> 
      <OurTeamLeft name="MUSIC BRIDGE"  body="Bridge Music exists to discover and empower the raw, passionate talent of India by providing a platform for them to collaborate with already established artists to create music that leaves a legacy true to India's creative inheritance." image="Assets/444.png"/>
      <OurTeamRight name="HARSH IMPEX"  body="Harsh Impex and Ishaan Plastics (P) Ltd are the Indian group of Company Manufacturing PET fridge bottles, jars, containers, perform and caps situated in Kolkata.

Both the Companies have Modern setup adjacent to each other in an Industrial complex having latest version of sophisticated Blow / Injection machines and Auxiliaries.

The R and D wings and Quality control are of International standard.

The Companies have more than 200 dedicated highly qualified professional technicians." image="Assets/222.png"/>
      <Footer/>
    
    </>
  )
}
