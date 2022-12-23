import './App.css';
import React from 'react';
import TopNav from './EssentialComponents/Nav/TopNav';
import ShowCards from './Components/InfoCards/ShowCards';
import Footer from './EssentialComponents/Footer/Footer';
import BookNow from './Components/bookNow/bookNow';
import MainCarousel from './EssentialComponents/Carousel/carousel';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './search/Search'

function App() {
  return (
    <Router>
      <div className="App">
        <TopNav />
        <div className="content">
            <Routes>
                  <Route exact path="/" element={<MainCarousel />}>
                  </Route>
                  <Route exact path="/browse" element={<ShowCards />}>
                  </Route>
                  <Route exact path="/match/:id" element={<BookNow />}>
                  </Route>
                  <Route exact path="/search" element={<Search />}>
                  </Route>
            </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
