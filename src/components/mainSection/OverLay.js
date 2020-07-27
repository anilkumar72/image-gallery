import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.section`
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.35);
z-index: 10;
color: #fff;
display: inline-flex;
align-items: flex-start;
flex-wrap: wrap;
justify-content: flex-end;
flex-direction: column;
img{
border-radius: 50px;
}
`;


const UserDiv=styled.div`
display: flex;
p{
padding-left: 10px;
}
`;

const ImageDataDiv=styled.div`
padding-left: 10px;
`;

const getDescription = (description) => {
    if (description === null) {
        return 'no description available'
    } else {
        return description;
    }
}

export default ({imgclass, description, handleRemoveOverlay, userName,profileImg}) => {
    return (
        <Wrapper className={imgclass} onMouseLeave={handleRemoveOverlay}>
            <ImageDataDiv>
            <UserDiv>
            <img src={profileImg} alt={userName}/>
                <p>{userName}</p>
            </UserDiv>
            <p>{getDescription(description)}</p>
            </ImageDataDiv>
        </Wrapper>
    )
}