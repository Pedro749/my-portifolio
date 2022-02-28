import React from 'react';
import './App.css'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Header from './Components/Header';
import Footer from './Components/Footer';


const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/skills' element={ <Skills /> }/>
          <Route path='/projects' element={ <Projects /> }/>
          <Route path='/contact' element={ <Contact /> }/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
   
  );
};

export default App;