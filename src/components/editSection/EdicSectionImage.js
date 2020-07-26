import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.section`
display: flex;
margin-left: 30%;
`;
const MainBlock=styled.div`
border: 1px solid red;
display: flex;
img{
width: 400px;
height: 400px;
object-fit: cover;
}
`;
const TextDiv=styled.div`

`;

export default ({imgsrc,imgclass,description,userName,profileImg}) => {
    return (
        <Wrapper>
            <MainBlock>
            <img src={imgsrc} alt={userName}/>
                <TextDiv>
                    {description}
                   <input type='text' value={userName}/>
                </TextDiv>
            </MainBlock>
        </Wrapper>
    )
}