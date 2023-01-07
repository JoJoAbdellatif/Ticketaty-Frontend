import './App.css';
import React from 'react';
import TopNav from './EssentialComponents/Nav/TopNav';
import Footer from './EssentialComponents/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimatedRoutes from './Components/AnimatedRoutes';
import Tick from './Components/chatbot/tick';
import useFetch from './Components/useFetch';
function App() {
   const { data: data1, error, isPending } = useFetch('https://ticketaty-shop.vercel.app/analytics')

  return (
    <Router>
      <div className="App">
        <TopNav />
           <AnimatedRoutes/>
        </div>
        <Tick props = {data1}/>
        <Footer/>
    </Router>
  );
}

export default App;
