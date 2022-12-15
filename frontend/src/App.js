import './App.css';
import React from 'react';
import TopNav from './EssentialComponents/TopNav';
import ShowCards from './InfoCards/ShowCards';
function App() {
  return (
    <div className="App">
      <TopNav/>
      <ShowCards/>
    </div>
  );
}

export default App;
