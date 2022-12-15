import './App.css';
import React from 'react';
import TopNav from './EssentialComponents/TopNav';
import ShowCards from './InfoCards/ShowCards';
import Footer from './EssentialComponents/Footer';
function App() {
  return (
    <div className="App">
      <TopNav/>
      <ShowCards/>
      <Footer/>
    </div>
  );
}

export default App;
