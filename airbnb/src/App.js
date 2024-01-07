import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import Card from './components/Card';
import data from './data';
import './App.css';

console.log(data);

function App() {

  const datacards = data.map(item => {
    return (
      <Card 
          image={item.coverImg} 
          rating={item.stats.rating} 
          reviewCount={item.stats.reviewCount} 
          country={item.location}
          title={item.title} 
          price={item.price}/>
    )
  })
  return (
    <div>
      <Navbar/>
      <Hero/>
      <section className="cards-list">
        {datacards}
      </section>
    </div>
  );
}

export default App;
