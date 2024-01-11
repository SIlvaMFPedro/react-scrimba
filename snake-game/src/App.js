import logo from './logo.svg';
import SnakeGame from './components/SnakeGame';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Snake Game App</h1>
      <div className="textWrapper">
        <p className="subTitle">
          <a href="https://www.npmjs.com/package/react-simple-snake" target="_blank" rel="noopener noreferrer">NPM</a> -
          <a href="https://github.com/SIlvaMFPedro/react-scrimba/tree/main/snake-game" target="_blank" rel="noopener noreferrer"> Github</a>
        </p>
        <p id="instructions">Use the arrow keys or W/A/S/D to play</p>
        <p className="subTitle">A simple snake game created with the 
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"> React </a> Javascript Library
        </p>
      </div>
      <SnakeGame/>
    </div>
  );
}

export default App;
