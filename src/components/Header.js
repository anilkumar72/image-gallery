import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";


const Wrapper = styled.section`
width: 100vw;
height: 12vh;
max-width: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: #2e3d49;
`;
const RouteLink =styled(Link)`
margin-left: 50px;
text-decoration: none;
font-size: 30px;
color: #fff;
font-family: Roboto,sans-serif;
`

export default () => {
    return (
        <Wrapper>
                <RouteLink to='/'>Home</RouteLink><br/>
                <RouteLink to='/edit'>Edit</RouteLink><br/>
        </Wrapper>
    )
}