import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.section`
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.26);
z-index: 10;
color: #fff;
`;

export default ({imgclass}) => {
    return (
        <Wrapper className={imgclass}>
            from overlay
        </Wrapper>
    )
}