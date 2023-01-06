import './App.css';
import React from 'react';
import TopNav from './EssentialComponents/Nav/TopNav';
import Footer from './EssentialComponents/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimatedRoutes from './Components/AnimatedRoutes';
import Tick from './Components/chatbot/tick';
function App() {
  return (
    <Router>
      <div className="App">
        <TopNav />
           <AnimatedRoutes/>
        </div>
        <Tick/>
        <Footer/>
    </Router>
  );
}

export default App;
