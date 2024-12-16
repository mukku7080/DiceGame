import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
align-items: center;
max-width: 1180px;
max-height: 522px;
margin: auto;

.content h1{
    font-size: 96px;
    white-space: nowrap;
    height:90px;
}

.content{
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    align-items: end;
}

`;
const SuperContainer = styled.div`
height: 100vh;
display: flex;
align-items: center;
justify-content: center;

`;

const Button = styled.button `

height: 40px;
width: 200px;
background-color: black;
padding: 10px 18 px;
color: white;
border-radius: 5px ;
font-size: 16px;
margin-left:323px;
cursor: pointer;

 &:hover{
    background-color: white;
    color: black;    
    border: 1px solid black;
 }
`;

export const StartGame = ({togle}) => {



    return (
        <SuperContainer>

        <Container>
            <div>
                <img src="/images/dices.png" alt="" />
            </div>
            <div className='content'>
                <h1>DICE GAME</h1>
                <Button onClick={togle}>Play Now</Button>
            </div>
        </Container>
        </SuperContainer>

    )
}




