import Die from './components/Die';
import React from 'react';
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import './App.css';

function App() {

  const [dice, setDice] = React.useState(allNewDice());
  const [tenzie, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const allDiceHeld = dice.every(die => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every(die => die.value === firstValue);
    if (allDiceHeld && allSameValue){
      setTenzies(true);
      console.log("You won!");
    }
  }, [dice]);

  function allNewDice(){
    // New array to hold my numbers
    const newDice = [];
    // Loop 10 times
    for (let i = 0; i < 10; i++){
       // Push a random number from 1-6
      newDice.push({
        value: Math.ceil(Math.random() * 6), 
        isHeld: false,
        id: nanoid()
      });
    }
    // Return array
    return newDice;
  }

  function generateNewDie(){
    return {
      value: Math.ceil(Math.random() * 6), 
      isHeld: false,
      id: nanoid()
    }
  }

  function rollDice() {
    if (!tenzie){
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ? die : generateNewDie();
      }));
    }
    else{
      setTenzies(false);
      setDice(allNewDice());
    }
  }

  function holdDice(id) {
     setDice(oldDice => oldDice.map(die => {
        return die.id === id ? {...die, isHeld: !die.isHeld} : die;
     }));
  }

  const diceElements = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)}/>)
  return (
    <main>
      {tenzie && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice--container">
        {diceElements}
      </div>
      <button className="roll--dice" onClick={rollDice}>{tenzie ? "New Game" : "Roll"}</button>
    </main>
  );
}

export default App;
