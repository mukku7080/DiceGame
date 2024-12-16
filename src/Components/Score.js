import React from 'react'
import styled from 'styled-components'



const Main = styled.div`
max-width: 200px;

margin: auto 0;
padding: 0;
display: flex;
flex-direction: column;
line-height: 70px;

h1{
display: flex;    
justify-content: center;
font-size: 100px;
font-weight: 500px;
margin-top:5px;

}
h6{
   font-size :24px ;
   margin-top: 0px;
}


`;


const Score = (props) => {
    return (
        <Main>
            <h1>{props.SelectedNumber}</h1>
            <h6>Total Score</h6>
        </Main>

    )
}

export default Score