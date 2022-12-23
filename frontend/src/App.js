import './App.css';
import React from 'react';
import TopNav from './EssentialComponents/Nav/TopNav';
import Footer from './EssentialComponents/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimatedRoutes from './Components/AnimatedRoutes';

function App() {
  return (
    <Router>
      <div className="App">
        <TopNav />
           <AnimatedRoutes/>
        </div>
        <Footer/>
    </Router>
  );
}

export default App;
