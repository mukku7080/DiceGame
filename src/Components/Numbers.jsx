import styled from 'styled-components';



const Box = styled.div`
font-weight: 700;
font-size: 24px;
display: flex;
align-items: center;
justify-content: center;
height: 72px;
width: 72px;
border: 1px solid black;

background-color: ${(prop) => prop.isSelected ? 'black' : 'white'};
color: ${(props) => (props.isSelected ? 'white' : 'black')};

`;
const Main = styled.div`

display: flex;
flex-direction: column;
align-items: end;
gap: 1rem;


.number{
    display: flex;
    gap: 1rem;
}
`;

const Numbers = (props) => {  
    
    const NumberSelecterHandler =(value)=>{
        props.SelectMethod(value);
        props.setError("");
    }

    return (
        <Main>

            <p style={{color:'red'}}>{props.error}</p>
            <div className='number'>
                {
                   props.numarray.map((value, i) => <Box isSelected={value === props.num} key={i} onClick={()=>NumberSelecterHandler(value)}>{value}</Box>)
                }
            </div>

            <h2>Select Number</h2>
        </Main>
    )
}

export default Numbers