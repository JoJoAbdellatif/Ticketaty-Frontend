import './App.css';
import React from 'react';
import TopNav from './EssentialComponents/TopNav';
import ShowCards from './InfoCards/ShowCards';
import Footer from './EssentialComponents/Footer';
import bookNow from './bookNow/bookNow';
function App() {
  return (
    <div className="App">
      <TopNav/>
      <bookNow/>
      <Footer/>
    </div>
  );
}

export default App;
