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

`;

export default () => {
    return (
        <Wrapper>

                <Link to='/'>Home</Link><br/>
                <Link to='protected'>Protected</Link><br/>
                <button >Login</button><br/>
                <button >Logout</button>

        </Wrapper>
    )
}