import React from 'react';
import {BrowserRouter, Route, Router} from 'react-router-dom';
import Navbar from './component/Navbar';
import Index from './component/Index';
import Contact from './component/Contact';
import Footer from './component/Footer';
import './App.css';
import Home from './component/Home';
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Route exact path = '/' component= {Index}></Route>
      <Route path='/contact' component = {Contact}></Route>
      <Footer></Footer>
    </BrowserRouter>
  );
}
export default App;
