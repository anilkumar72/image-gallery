import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.section`
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.26);
z-index: 10;
color: #fff;
`;
const getDescription=(description)=>{
    if(description===null){
        return'no description available'
    }else {
        return description;
    }
}

export default ({imgclass,description,handleRemoveOverlay}) => {
    return (
        <Wrapper className={imgclass}  onMouseLeave={handleRemoveOverlay}>
            {getDescription(description)}
            {console.log(description)}
        </Wrapper>
    )
}