import React from 'react'
import Home from './Home.js';
import Menu from './Components/Menu';
import ReactDOM from "react-dom/client";
import Footer from './Components/Footer';
import App from './AppHome.js';
import ValoRegistration from './valoRegistration.js';
import {AnimatePresence} from 'framer-motion';

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import AppEventsVGL from './AppEventsVGL';
import AppHome from './AppHome'

export default function AnimatedRoutes() {
   const location = useLocation(); 
  return (
    <AnimatePresence>

    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/EventVGL" element = {<AppEventsVGL/>}/>
        <Route path="/valoRegistration" element = {<valoRegistration/>}/>
    </Routes>
    </AnimatePresence>
  );
}
