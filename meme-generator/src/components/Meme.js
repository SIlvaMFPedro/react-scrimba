import './Meme.css';
import memesData from '../memesData';

function Meme() {
  
  function getMemeImg(){
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    
  }

  return (
    <main>
        <div className="form">
            <div>
                <label className="form--label">Top Text</label>
                <input type="text" className="form--input" placeholder="Top Text"></input>
            </div>
            <div>
                <label className="form-label">Bottom Text</label>
                <input type="text" className="form--input" placeholder="Bottom Text"></input>
            </div>
            <div>
                <button className="form--button" onClick={getMemeImg}>Get a new meme image 🖼</button>
            </div>
        </div>
    </main>
  );
}

export default Meme;