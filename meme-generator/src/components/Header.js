import trollface from '../images/troll-face.png';
import './Header.css';

function App() {
  return (
    <header className="header">
        <img src={trollface} className="header--image"/>
        <h2 className="header-title">Meme Generator</h2>
        <h4 className="header-text">React Course - Project 3</h4>
    </header>
  );
}

export default App;