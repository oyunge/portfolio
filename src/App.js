import './App.scss'
import React from 'react'
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import PortfoliosPage from './Pages/PortfoliosPage';

import BlogPage from './Pages/BlogPage';
import ContactPage from './Pages/ContactPage';
import {useState} from 'react';

import { Switch, Route } from 'react-router-dom';
function App() {
  const [navToggle, setNavToggle] = useState(false);
  const navClick = () =>{
    setNavToggle(!navToggle)
  }
  return (
    <div>
      {/* side bar is fixed position */}
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
        <div className="content">
          <switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/portfolio" exact>
              <PortfoliosPage />
            </Route>
            <Route path="/blogs" exact>
              <BlogPage />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
          </switch>
        </div>

      </div>
    </div>
  )
}

export default App
