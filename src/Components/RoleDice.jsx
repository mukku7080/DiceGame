import styled from 'styled-components'

const RoleDice = (props) => {


  
  return (
    <Dice>
    <div  className='dice'   >
    <img onClick={props.rdm}  src={`/images/dice_${props.currentNumber}.png`} alt="dice_1" />
    </div>
        <h4 className='text'>Click On Dice To Role</h4>

    </Dice>
  )
}

export default RoleDice

const Dice= styled.div`
 


 .text{
    font-size: 24px;
    line-height: 36px;
 }

`;