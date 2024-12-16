import './App.css';
// import styled from 'styled-components';
import { StartGame } from './Components/StartGame';
import { useState } from 'react';
import PlayGame from './Components/PlayGame';





function App() {
   
  const [isPlayClicked,setIsPlayClicked] = useState(false);

  const toggleClick=()=>{
    setIsPlayClicked((prev)=>!prev)
  }

  return (
    <>
     {
      isPlayClicked ? <PlayGame/>:<StartGame togle={toggleClick}/>
     }
    </>


  );
}

export default App;



