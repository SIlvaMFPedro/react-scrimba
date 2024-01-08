import './Meme.css';
import memesData from '../memesData';
import React from 'react';

function Meme() {

  const [memeImage, setMemeImage] = React.useState("");
  
  function getMemeImg(){
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);


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
        <div className="meme">
            <img src={memeImage} className="meme--image" alt="meme"/>
        </div>
    </main>
  );
}

export default Meme;