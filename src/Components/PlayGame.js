import React from 'react'
import Score from './Score'
import styled from 'styled-components'
import Numbers from './Numbers';
import RoleDice from './RoleDice';
import { useState } from 'react';
import DiceRule from './DiceRule';


const MainSection = styled.div`
display: flex;
flex-direction: column;
 max-width: 1280px; 
 height: calc(100vh-145px); 
 margin: auto;
padding-top: 40px;
.head{
  max-width: 1280px;
  height: 145px;
  display: flex;
  justify-content: space-between;
}
`;

const Section2 = styled.div`
height: 500px;
width: px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 2rem;


`;
const Button = styled.button`

height: 40px;
width: 200px;
background-color: black;
padding: 10px 18 px;
color: white;
border-radius: 5px ;
font-size: 15px;
font-weight: 700;
cursor: pointer;

 &:hover{
    background-color: white;
    color: black;    
    border: 1px solid black;
 }
`;

const PlayGame = () => {

  const numarray = [1, 2, 3, 4, 5, 6];


  const [score, setScore] = useState(0);
  const [num, setNum] = useState();
  const [currentDiceNumber, setCurrentDiceNumber] = useState(1);
  const [error, setError] = useState();
  const [showRules, setShowRules] = useState(false);



  const Random = (min, max) => {
    return Math.floor(Math.random() * (max - min) + 1) + (min)
  }

  const DiceRole = () => {
    if (!num) {
      setError("You are not selected any number");
      return
    }
    else {
      setError("")
    }
    const number = Random(0, 6);
    setCurrentDiceNumber(number)
    console.log(currentDiceNumber)

    if (currentDiceNumber === num) {
      setScore((prev) => prev + currentDiceNumber)
    }
    else {
      setScore((prev) => prev - 2)
    }
    setNum(undefined);
  }
  const NumberSelectMethod = (value) => {

    setNum(value);
  }

  const toggleRules = () => {
    setShowRules((prev) => !prev);
  };


  return (
    <MainSection>
      <div className='head'>
        <Score SelectedNumber={score} />
        <Numbers numarray={numarray} SelectMethod={NumberSelectMethod} num={num} error={error} setError={setError} />
      </div>

      <Section2>
        <RoleDice currentNumber={currentDiceNumber} rdm={DiceRole} />

        <Button onClick={() => setScore(0)} >Reset Scores</Button>
        <Button onClick={toggleRules}>
          {showRules ? "Hide Rules" : "Show Rules"}
        </Button>

      </Section2>

      {showRules && <DiceRule />}

    </MainSection>
  )
}

export default PlayGame