import React from 'react'
import styled from 'styled-components'

const DiceRule = () => {
  return (
    <Rule>
     <div className="content">
     <h3>How to play dice game</h3>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
     </div>
      
    </Rule>
  )
}

export default DiceRule

const Rule = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 1280px;
height: 200px;
padding: 20px auto;
background-color: #FBF1F1;
border: none;

.content{
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}




`;