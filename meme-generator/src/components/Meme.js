import './Meme.css';
import memesData from '../memesData';
import React from 'react';

function Meme() {

  
  const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  
  //const [allMemes, setAllMemes] = React.useState(memesData);            // USE MEMES DATA

  const [allMemes, setAllMemes] = React.useState([]);                     // USE MEMES API

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((data) => setAllMemes(data.data.memes));
  }, []);

 
  function getMemeImgFromData(){
    const memesArray = allMemes.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMeme((prevMeme) => ({
        ...prevMeme,
        randomImage: memesArray[randomNumber].url,
    }));
  }

  function getMemeImgFromAPI(){
    const memeImg = allMemes[Math.floor(Math.random() * allMemes.length)]
    let url = memeImg.url;
    setMeme((prevMeme) => ({
        ...prevMeme,
        randomImage: url,
    }));
  }

  function handleChange(event){
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
        ...prevMeme,
        [name]: value,
    }));
  }

  return (
    <main>
        <div className="form">
            <div>
                <label className="form--label">Top Text</label>
                <input type="text" className="form--input" placeholder="Top Text" name="topText" value={meme.topText} onChange={handleChange}></input>
            </div>
            <div>
                <label className="form-label">Bottom Text</label>
                <input type="text" className="form--input" placeholder="Bottom Text" name="bottomText" value={meme.bottomText} onChange={handleChange}></input>
            </div>
            <div>
                <button className="form--button" onClick={getMemeImgFromAPI}>Get a new meme image 🖼</button>
            </div>
        </div>
        <div className="meme">
            <img src={meme.randomImage} className="meme--image" alt="meme"/>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
    </main>
  );
}

export default Meme;