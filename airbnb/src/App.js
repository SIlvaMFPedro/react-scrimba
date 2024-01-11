import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import Card from './components/Card';
import data from './data';
import React, { useState } from "react";
import './App.css';

console.log(data);

function App() {

  const datacards = data.map(item => {
    return (
      <Card
          key={item.id} 
          image={item.coverImg} 
          rating={item.stats.rating} 
          reviewCount={item.stats.reviewCount} 
          country={item.location}
          title={item.title} 
          price={item.price}
          openSpots={item.openSpots}/>
    )
  })

  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode);
  }


  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Hero darkMode={darkMode}/>
      <section className="cards-list">
        {datacards}
      </section>
    </div>
  );
}

export default App;
